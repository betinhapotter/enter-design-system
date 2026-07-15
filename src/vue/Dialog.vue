<script setup lang="ts">
defineProps<{ open?: boolean; title?: string }>();
const emit = defineEmits<{ (e: 'close'): void }>();
</script>

<template>
  <div v-if="open" class="fixed inset-0 z-50 grid place-items-center">
    <div class="absolute inset-0 bg-black/60 animate-in fade-in-0" @click="emit('close')" />
    <div class="relative z-10 w-full max-w-md rounded-[14px] border border-border bg-card p-6 shadow-lg animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2 blur-in">
      <h2 v-if="title" class="mb-2 text-lg font-semibold">{{ title }}</h2>
      <slot />
    </div>
  </div>
</template>
