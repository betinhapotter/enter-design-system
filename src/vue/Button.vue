<script setup lang="ts">
withDefaults(defineProps<{ variant?: 'brand' | 'secondary' | 'ghost' | 'destructive'; size?: 'sm' | 'md' | 'lg' }>(), {
  variant: 'brand',
  size: 'md',
});
const base = 'inline-flex items-center justify-center rounded-[10px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none';
const variants: Record<string, string> = {
  brand: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  destructive: 'bg-destructive text-white hover:bg-destructive/90',
};
const sizes: Record<string, string> = { sm: 'h-8 px-3 text-sm', md: 'h-10 px-4 text-sm', lg: 'h-12 px-6 text-base' };
</script>

<template>
  <button :class="[base, variants[variant], sizes[size]]">
    <slot />
  </button>
</template>
