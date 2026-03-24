<script setup>
import { ref } from 'vue'

const props = defineProps({
  elements: Array,
  progress: Object,
})

const emit = defineEmits(['hint', 'reset'])
const search = ref('')
const showConfirmReset = ref(false)

function filteredElements() {
  if (!search.value) return props.elements
  const q = search.value.toLowerCase()
  return props.elements.filter(e => e.name.toLowerCase().includes(q))
}

function onDragStart(e, elementId) {
  e.dataTransfer.setData('elementId', elementId)
  e.dataTransfer.setData('source', 'sidebar')
  e.dataTransfer.effectAllowed = 'copy'
}

function confirmReset() {
  showConfirmReset.value = true
}

function doReset() {
  showConfirmReset.value = false
  emit('reset')
}
</script>

<template>
  <aside class="w-72 min-w-72 bg-slate-800 border-r border-slate-700 flex flex-col h-full">
    <!-- Header -->
    <div class="p-4 border-b border-slate-700">
      <h1 class="text-xl font-bold text-amber-400 mb-1">Evolution Alchemy</h1>
      <div class="flex items-center gap-2 text-sm text-slate-400">
        <div class="flex-1 bg-slate-700 rounded-full h-2 overflow-hidden">
          <div
            class="bg-amber-500 h-full rounded-full transition-all duration-500"
            :style="{ width: (progress.found / progress.total * 100) + '%' }"
          />
        </div>
        <span class="whitespace-nowrap">{{ progress.found }}/{{ progress.total }}</span>
      </div>
    </div>

    <!-- Search -->
    <div class="p-3 border-b border-slate-700">
      <input
        v-model="search"
        type="text"
        placeholder="Search elements..."
        class="w-full px-3 py-1.5 bg-slate-700 border border-slate-600 rounded text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
      />
    </div>

    <!-- Element list -->
    <div class="flex-1 overflow-y-auto p-2">
      <div
        v-for="el in filteredElements()"
        :key="el.id"
        draggable="true"
        @dragstart="onDragStart($event, el.id)"
        class="flex items-center gap-2 px-3 py-2 rounded-lg cursor-grab active:cursor-grabbing hover:bg-slate-700/60 transition-colors mb-0.5"
        :title="el.description"
      >
        <span class="text-2xl leading-none">{{ el.emoji }}</span>
        <span class="text-sm text-slate-300">{{ el.name }}</span>
      </div>
      <div v-if="filteredElements().length === 0" class="text-center text-slate-500 text-sm py-4">
        No elements found
      </div>
    </div>

    <!-- Buttons -->
    <div class="p-3 border-t border-slate-700 flex gap-2">
      <button
        @click="$emit('hint')"
        class="flex-1 px-3 py-2 bg-amber-600 hover:bg-amber-500 text-white text-sm font-medium rounded-lg transition-colors"
      >
        💡 Hint
      </button>
      <button
        @click="confirmReset"
        class="px-3 py-2 bg-slate-700 hover:bg-red-600 text-slate-300 hover:text-white text-sm rounded-lg transition-colors"
        title="Reset progress"
      >
        🔄
      </button>
    </div>

    <!-- Reset confirmation -->
    <div
      v-if="showConfirmReset"
      class="absolute inset-0 bg-black/50 flex items-center justify-center z-50"
      @click.self="showConfirmReset = false"
    >
      <div class="bg-slate-800 border border-slate-600 rounded-xl p-6 mx-4 max-w-sm">
        <p class="text-slate-200 mb-4">Reset all progress? This cannot be undone.</p>
        <div class="flex gap-3 justify-end">
          <button
            @click="showConfirmReset = false"
            class="px-4 py-2 text-sm text-slate-400 hover:text-slate-200"
          >Cancel</button>
          <button
            @click="doReset"
            class="px-4 py-2 text-sm bg-red-600 hover:bg-red-500 text-white rounded-lg"
          >Reset</button>
        </div>
      </div>
    </div>
  </aside>
</template>
