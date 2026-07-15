<script setup lang="ts">
withDefaults(defineProps<{ placeholder?: string }>(), { placeholder: 'Descreva o que quer criar…' });
const model = defineModel<string>();
const emit = defineEmits<{ (e: 'submit', value: string): void }>();
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); emit('submit', model.value ?? ''); }
}
</script>

<template>
  <div class="flex items-end gap-2 rounded-[14px] border border-border bg-card p-2 shadow-sm focus-within:ring-2 focus-within:ring-ring transition-shadow">
    <textarea
      v-model="model"
      :placeholder="placeholder"
      rows="1"
      class="min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm outline-none"
      @keydown="onKeydown"
    />
    <button
      class="inline-flex h-9 items-center gap-1 rounded-[10px] bg-primary px-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
      @click="emit('submit', model ?? '')"
    >
      Enter ↵
    </button>
  </div>
</template>
