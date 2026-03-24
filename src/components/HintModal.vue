<script setup>
import { ELEMENTS } from '../game/elements.js'

const props = defineProps({
  hint: Object, // { ingredient1, ingredient2, result } or null
})

const emit = defineEmits(['close'])
</script>

<template>
  <div
    class="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
    @click.self="$emit('close')"
  >
    <div class="bg-slate-800 border border-slate-600 rounded-2xl p-6 mx-4 max-w-sm w-full shadow-2xl">
      <h2 class="text-lg font-bold text-amber-400 mb-4">💡 Hint</h2>

      <div v-if="hint" class="text-center">
        <p class="text-slate-400 text-sm mb-3">Try combining:</p>
        <div class="flex items-center justify-center gap-3 text-xl mb-3">
          <div class="flex items-center gap-1.5 px-3 py-2 bg-slate-700 rounded-xl">
            <span class="text-2xl">{{ ELEMENTS[hint.ingredient1]?.emoji }}</span>
            <span class="text-sm text-slate-300">{{ ELEMENTS[hint.ingredient1]?.name }}</span>
          </div>
          <span class="text-amber-400 font-bold">+</span>
          <div class="flex items-center gap-1.5 px-3 py-2 bg-slate-700 rounded-xl">
            <span class="text-2xl">{{ ELEMENTS[hint.ingredient2]?.emoji }}</span>
            <span class="text-sm text-slate-300">{{ ELEMENTS[hint.ingredient2]?.name }}</span>
          </div>
        </div>
        <p class="text-slate-500 text-sm">= ???</p>
      </div>

      <div v-else class="text-center py-4">
        <p class="text-slate-400">
          No hints available right now. Try combining elements you have in new ways!
        </p>
      </div>

      <button
        @click="$emit('close')"
        class="mt-5 w-full px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm rounded-lg transition-colors"
      >
        Got it
      </button>
    </div>
  </div>
</template>
