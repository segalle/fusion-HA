<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { ELEMENTS, TOTAL_ELEMENTS, findRecipe, getHint, getStarterIds } from './game/elements.js'
import Sidebar from './components/Sidebar.vue'
import GameWorkspace from './components/GameWorkspace.vue'
import HintModal from './components/HintModal.vue'
import DiscoveryToast from './components/DiscoveryToast.vue'

const STORAGE_KEY = 'evolution-alchemy-save'

// Game state
const discovered = ref(new Set(getStarterIds()))
const workspaceItems = ref([])
const nextItemId = ref(1)
const showHint = ref(false)
const hintData = ref(null)
const toast = ref(null)
const toastTimeout = ref(null)

// Load from localStorage
onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    try {
      const data = JSON.parse(saved)
      discovered.value = new Set(data.discovered)
    } catch (e) {
      // ignore corrupt save
    }
  }
})

// Save on change
watch(discovered, (val) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    discovered: [...val],
  }))
}, { deep: true })

const discoveredList = computed(() => {
  return [...discovered.value]
    .map(id => ({ id, ...ELEMENTS[id] }))
    .sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name))
})

const progress = computed(() => ({
  found: discovered.value.size,
  total: TOTAL_ELEMENTS,
}))

function addToWorkspace(elementId, x, y) {
  workspaceItems.value.push({
    instanceId: nextItemId.value++,
    elementId,
    x,
    y,
  })
}

function removeFromWorkspace(instanceId) {
  workspaceItems.value = workspaceItems.value.filter(i => i.instanceId !== instanceId)
}

function tryCombine(instanceId1, instanceId2) {
  const item1 = workspaceItems.value.find(i => i.instanceId === instanceId1)
  const item2 = workspaceItems.value.find(i => i.instanceId === instanceId2)
  if (!item1 || !item2) return

  const result = findRecipe(item1.elementId, item2.elementId)
  if (result) {
    const midX = (item1.x + item2.x) / 2
    const midY = (item1.y + item2.y) / 2

    // Remove both items
    removeFromWorkspace(instanceId1)
    removeFromWorkspace(instanceId2)

    // Add result to workspace
    addToWorkspace(result, midX, midY)

    // Discover if new
    if (!discovered.value.has(result)) {
      const newSet = new Set(discovered.value)
      newSet.add(result)
      discovered.value = newSet
      showToast(result)
    }
  }
}

function showToast(elementId) {
  if (toastTimeout.value) clearTimeout(toastTimeout.value)
  toast.value = { id: elementId, ...ELEMENTS[elementId] }
  toastTimeout.value = setTimeout(() => {
    toast.value = null
  }, 3000)
}

function clearWorkspace() {
  workspaceItems.value = []
}

function requestHint() {
  const hint = getHint(discovered.value)
  hintData.value = hint
  showHint.value = true
}

function resetGame() {
  discovered.value = new Set(getStarterIds())
  workspaceItems.value = []
  localStorage.removeItem(STORAGE_KEY)
}
</script>

<template>
  <div class="flex h-screen w-screen bg-slate-900">
    <!-- Sidebar -->
    <Sidebar
      :elements="discoveredList"
      :progress="progress"
      @drag-start="(id, e) => { /* handled by workspace */ }"
      @hint="requestHint"
      @reset="resetGame"
    />

    <!-- Workspace -->
    <GameWorkspace
      :items="workspaceItems"
      :discovered="discovered"
      @add-element="addToWorkspace"
      @remove-item="removeFromWorkspace"
      @combine="tryCombine"
      @clear="clearWorkspace"
    />

    <!-- Hint modal -->
    <HintModal
      v-if="showHint"
      :hint="hintData"
      @close="showHint = false"
    />

    <!-- Discovery toast -->
    <DiscoveryToast :element="toast" />
  </div>
</template>
