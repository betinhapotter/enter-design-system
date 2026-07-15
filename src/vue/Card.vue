<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<template>
  <div class="rounded-[14px] border border-border bg-card text-card-foreground shadow-sm animate-in fade-in-0 zoom-in-95">
    <div v-if="title || $slots.header" class="p-5 pb-0">
      <slot name="header"><h3 class="font-semibold leading-none tracking-tight">{{ title }}</h3></slot>
    </div>
    <div class="p-5"><slot /></div>
    <div v-if="$slots.footer" class="p-5 pt-0"><slot name="footer" /></div>
  </div>
</template>
