<script setup>
defineProps({
  element: Object, // { id, name, emoji, description } or null
})
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-500 ease-out"
    leave-active-class="transition-all duration-300 ease-in"
    enter-from-class="translate-y-full opacity-0 scale-90"
    enter-to-class="translate-y-0 opacity-100 scale-100"
    leave-from-class="translate-y-0 opacity-100 scale-100"
    leave-to-class="-translate-y-4 opacity-0 scale-90"
  >
    <div
      v-if="element"
      class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div class="flex items-center gap-3 px-5 py-3 bg-amber-600/90 backdrop-blur border border-amber-500 rounded-2xl shadow-2xl shadow-amber-900/40">
        <span class="text-4xl animate-bounce">{{ element.emoji }}</span>
        <div>
          <p class="text-white font-bold">{{ element.name }}</p>
          <p class="text-amber-100 text-sm">{{ element.description }}</p>
        </div>
        <span class="text-amber-200 text-xs font-medium ml-2 uppercase tracking-wider">New!</span>
      </div>
    </div>
  </Transition>
</template>
