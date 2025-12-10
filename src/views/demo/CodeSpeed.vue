<template>
  <div class="min-h-screen bg-gray-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Header Section -->
      <div class="mb-8 space-y-6">
        <div class="text-center">
          <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl">AI Coding Speed Battle</h1>
          <p class="mt-3 text-lg text-gray-500">Compare how different models generate React components in real-time.</p>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-4xl mx-auto">
          <label class="block text-sm font-medium text-gray-700 mb-2">Prompt</label>
          <div class="relative">
            <textarea 
              readonly 
              class="w-full h-24 p-4 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 font-mono text-sm resize-none focus:ring-0 focus:border-gray-200"
            >Create a user information card component with a modern design, including an avatar, name, role, and stats for followers/following. Use Tailwind CSS for styling.</textarea>
            <button 
              @click="startDemo" 
              :disabled="isPlaying"
              class="absolute bottom-4 right-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-medium rounded-md shadow-sm transition-colors flex items-center gap-2"
            >
              <span v-if="!isPlaying">Start Generation</span>
              <span v-else>Generating...</span>
              <svg v-if="!isPlaying" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Model Card -->
        <div v-for="model in models" :key="model.id" class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-[500px]">
          <!-- Card Header -->
          <div class="px-4 py-3 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full" :class="model.status === 'completed' ? 'bg-green-500' : model.status === 'writing' ? 'bg-yellow-500 animate-pulse' : 'bg-gray-300'"></div>
              <h3 class="font-semibold text-gray-800">{{ model.name }}</h3>
            </div>
            <div class="text-xs font-mono text-gray-500">
              <span v-if="model.status === 'completed'">Finished in {{ model.duration }}s</span>
              <span v-else-if="model.status === 'writing'">{{ model.progress.toFixed(1) }}s</span>
              <span v-else>Ready</span>
            </div>
          </div>

          <!-- Content Area -->
          <div class="flex-1 flex overflow-hidden">
            <!-- Code Editor (Left) -->
            <div class="w-1/2 bg-[#1e1e1e] text-gray-300 p-4 overflow-auto font-mono text-xs leading-relaxed custom-scrollbar relative">
              <pre><code class="language-javascript">{{ model.currentCode }}<span v-if="model.status === 'writing'" class="animate-pulse">|</span></code></pre>
            </div>

            <!-- Preview (Right) -->
            <div class="w-1/2 bg-white border-l border-gray-200 relative">
              <div v-if="model.status !== 'completed'" class="absolute inset-0 flex items-center justify-center bg-gray-50 text-gray-400 text-sm">
                <div class="text-center">
                  <div v-if="model.status === 'writing'" class="mb-2">
                    <svg class="animate-spin h-6 w-6 mx-auto text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                  {{ model.status === 'writing' ? 'Writing code...' : 'Waiting to start...' }}
                </div>
              </div>
              <iframe 
                v-else
                :srcdoc="getFixedIframeContent(model.fullCode)"
                class="w-full h-full border-0"
                sandbox="allow-scripts allow-modals"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { garlicCode, claudeCode, geminiCode, minimaxCode } from './code-samples';

interface Model {
  id: string;
  name: string;
  duration: number; // seconds
  fullCode: string;
  currentCode: string;
  status: 'idle' | 'writing' | 'completed';
  progress: number;
  timer: any;
}

const isPlaying = ref(false);

const models = reactive<Model[]>([
  {
    id: 'garlic',
    name: 'OpenAI Garlic',
    duration: 15,
    fullCode: garlicCode,
    currentCode: '',
    status: 'idle',
    progress: 0,
    timer: null
  },
  {
    id: 'claude',
    name: 'Claude Opus 4.5',
    duration: 20,
    fullCode: claudeCode,
    currentCode: '',
    status: 'idle',
    progress: 0,
    timer: null
  },
  {
    id: 'gemini',
    name: 'Gemini 3.0 Pro',
    duration: 25,
    fullCode: geminiCode,
    currentCode: '',
    status: 'idle',
    progress: 0,
    timer: null
  },
  {
    id: 'minimax',
    name: 'MiniMax M2',
    duration: 22,
    fullCode: minimaxCode,
    currentCode: '',
    status: 'idle',
    progress: 0,
    timer: null
  }
]);

const startDemo = () => {
  if (isPlaying.value) return;
  isPlaying.value = true;

  models.forEach(model => {
    // Reset
    model.currentCode = '';
    model.status = 'writing';
    model.progress = 0;
    if (model.timer) clearInterval(model.timer);

    const totalChars = model.fullCode.length;
    const updateInterval = 50; // ms
    const totalSteps = (model.duration * 1000) / updateInterval;
    const charsPerStep = Math.ceil(totalChars / totalSteps);
    let currentStep = 0;

    model.timer = setInterval(() => {
      currentStep++;
      model.progress = (currentStep * updateInterval) / 1000;
      
      // Calculate how many chars to show
      const charCount = Math.min(Math.floor(currentStep * charsPerStep), totalChars);
      model.currentCode = model.fullCode.substring(0, charCount);

      if (currentStep >= totalSteps || charCount >= totalChars) {
        clearInterval(model.timer);
        model.currentCode = model.fullCode;
        model.status = 'completed';
        model.progress = model.duration;
        
        // Check if all finished
        if (models.every(m => m.status === 'completed')) {
          isPlaying.value = false;
        }
      }
    }, updateInterval);
  });
};



// Fixing the iframe content generation to handle "export default"
// We will strip "export default" from the code and append the render call.
// We need to know the component name or just use a standard wrapper.
const getFixedIframeContent = (code: string) => {
  // Simple regex to find the function name: export default function Name
  const match = code.match(/export default function (\w+)/);
  const componentName = match ? match[1] : 'App';
  
  // Remove "export default" to make it a regular function declaration in the global scope of the script
  const cleanCode = code.replace('export default function', 'function');

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <script src="https://unpkg.com/lucide-react@latest"><\/script>
        <style>
          body { margin: 0; padding: 0; font-family: system-ui, -apple-system, sans-serif; }
          /* Custom scrollbar for webkit */
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { bg: transparent; }
          ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
        </style>
      </head>
      <body>
        <div id="root"></div>
        <script type="text/babel">
          // Mock Lucide icons if needed or load them. 
          // For simplicity in this demo, we'll assume basic HTML or simple SVG if icons fail, 
          // but I added lucide-react script above. Note: lucide-react UMD might expose 'lucide'.
          
          // However, the code uses "import ... from 'lucide-react'". 
          // In browser standalone, imports don't work like that.
          // We need to mock the require/import or just replace them.
          
          const { useState, useEffect } = React;
          
          // Mock icons to prevent crash
          const User = () => <span>👤</span>;
          const Mail = () => <span>✉️</span>;
          const MapPin = () => <span>📍</span>;
          
          ${cleanCode.replace(/import .*/g, '')}
          
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(<${componentName} />);
        <\/script>
      </body>
    </html>
  `;
};
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #1e1e1e;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>
