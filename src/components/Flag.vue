<script setup lang="ts">
import { computed } from 'vue'
import twemoji from 'twemoji'

const props = defineProps<{
  emoji: string
}>()

const html = computed(() => {
  return twemoji.parse(props.emoji, {
    folder: 'svg',
    ext: '.svg'
  })
})
</script>

<template>
  <span class="flag-icon" v-html="html"></span>
</template>

<style>
.flag-icon img {
  height: 1.2em;
  width: 1.2em;
  margin: 0 .1em;
  vertical-align: middle;
  display: inline-block;
}
</style>
