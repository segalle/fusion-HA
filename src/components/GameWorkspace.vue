<script setup>
import { ref } from 'vue'
import { ELEMENTS } from '../game/elements.js'

const props = defineProps({
  items: Array,
  discovered: Set,
})

const emit = defineEmits(['addElement', 'removeItem', 'combine', 'clear'])

const workspace = ref(null)
const draggingInstanceId = ref(null)
const dragOffset = ref({ x: 0, y: 0 })

// --- Drop from sidebar ---
function onDragOver(e) {
  e.preventDefault()
  e.dataTransfer.dropEffect = 'copy'
}

function onDrop(e) {
  e.preventDefault()
  const elementId = e.dataTransfer.getData('elementId')
  const source = e.dataTransfer.getData('source')
  if (elementId && source === 'sidebar') {
    const rect = workspace.value.getBoundingClientRect()
    const x = e.clientX - rect.left - 40
    const y = e.clientY - rect.top - 20
    emit('addElement', elementId, x, y)
  }
}

// --- Drag workspace items (pointer events for smoother feel) ---
function onPointerDown(e, item) {
  if (e.button !== 0) return
  e.preventDefault()
  draggingInstanceId.value = item.instanceId

  const rect = workspace.value.getBoundingClientRect()
  dragOffset.value = {
    x: e.clientX - rect.left - item.x,
    y: e.clientY - rect.top - item.y,
  }

  const el = e.currentTarget
  el.setPointerCapture(e.pointerId)
  el.style.zIndex = 1000
}

function onPointerMove(e) {
  if (draggingInstanceId.value === null) return
  const rect = workspace.value.getBoundingClientRect()
  const item = props.items.find(i => i.instanceId === draggingInstanceId.value)
  if (item) {
    item.x = e.clientX - rect.left - dragOffset.value.x
    item.y = e.clientY - rect.top - dragOffset.value.y
  }
}

function rectsOverlap(r1, r2) {
  return !(r1.right < r2.left || r1.left > r2.right || r1.bottom < r2.top || r1.top > r2.bottom)
}

function onPointerUp(e, item) {
  if (draggingInstanceId.value === null) return
  const el = e.currentTarget
  el.style.zIndex = ''

  const draggedId = draggingInstanceId.value
  draggingInstanceId.value = null

  // Use actual bounding rects for overlap detection
  const draggedRect = el.getBoundingClientRect()
  const allChips = workspace.value.querySelectorAll('[data-instance-id]')

  for (const chip of allChips) {
    const otherId = Number(chip.dataset.instanceId)
    if (otherId === draggedId) continue
    if (rectsOverlap(draggedRect, chip.getBoundingClientRect())) {
      emit('combine', draggedId, otherId)
      return
    }
  }
}

function onDoubleClick(instanceId) {
  emit('removeItem', instanceId)
}
</script>

<template>
  <main
    ref="workspace"
    class="flex-1 relative overflow-hidden bg-slate-900"
    @dragover="onDragOver"
    @drop="onDrop"
  >
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="w-full h-full" style="background-image: radial-gradient(circle, #94a3b8 1px, transparent 1px); background-size: 30px 30px;"></div>
    </div>

    <!-- Instructions -->
    <div
      v-if="items.length === 0"
      class="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div class="text-center text-slate-600">
        <p class="text-5xl mb-4">🧬</p>
        <p class="text-lg font-medium">Drag elements here</p>
        <p class="text-sm mt-1">Drop two elements on each other to combine them</p>
        <p class="text-xs mt-2 text-slate-700">Double-click to remove an element</p>
      </div>
    </div>

    <!-- Workspace items -->
    <div
      v-for="item in items"
      :key="item.instanceId"
      :data-instance-id="item.instanceId"
      class="absolute select-none touch-none"
      :class="{
        'scale-110': draggingInstanceId === item.instanceId,
        'transition-transform': draggingInstanceId !== item.instanceId,
      }"
      :style="{ left: item.x + 'px', top: item.y + 'px' }"
      @pointerdown="onPointerDown($event, item)"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp($event, item)"
      @dblclick="onDoubleClick(item.instanceId)"
    >
      <div
        class="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 border border-slate-600 rounded-xl shadow-lg cursor-grab active:cursor-grabbing hover:border-amber-500/50 transition-colors"
      >
        <span class="text-2xl leading-none">{{ ELEMENTS[item.elementId]?.emoji }}</span>
        <span class="text-sm text-slate-300 whitespace-nowrap">{{ ELEMENTS[item.elementId]?.name }}</span>
      </div>
    </div>

    <!-- Clear button -->
    <button
      v-if="items.length > 0"
      @click="$emit('clear')"
      class="absolute bottom-4 right-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-400 text-sm rounded-lg transition-colors"
    >
      🗑️ Clear workspace
    </button>
  </main>
</template>
