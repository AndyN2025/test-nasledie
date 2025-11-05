<template>
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-center gap-3 overflow-x-auto whitespace-nowrap">
      <!-- Desktop -->
      <div class="hidden lg:flex gap-4 mb-6">
        <NuxtLink
          v-for="tab in tabs"
          :key="tab.to"
          :to="tab.to"
          class="px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 bg-gray-200 text-gray-600 hover:bg-gray-200 hover:text-gray-900 flex items-center gap-1"
        >
          {{ tab.label }}
          <span
            v-if="tab.id === 'agents' && agentsCount"
            class="text-xs  text-grey-500 px-2 py-0.5 "
          >
            {{ agentsCount }}
          </span>
        </NuxtLink>
      </div>

      <!-- Mobile -->
      <div class="lg:hidden flex gap-2 py-2">
        <NuxtLink
          v-for="tab in tabs"
          :key="tab.to"
          :to="tab.to"
          class="px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 bg-gray-200 text-gray-600 hover:bg-gray-200 hover:text-gray-900 flex items-center gap-1"
        >
          {{ tab.labelShort || tab.label }}
          <span
            v-if="tab.id === 'agents' && agentsCount"
            class="text-[10px] bg-grey-100 text-grey-700 px-1.5 py-0.5 rounded-full"
          >
            {{ agentsCount }}
          </span>
        </NuxtLink>
      </div>
    </div>

    <div class="border-b border-gray-200"></div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'nuxt/app'
import { computed } from 'vue'

const props = defineProps<{
  agentsCount?: number
}>()


const tabs = [
  {
    id: 'products',
    label: 'Товары и услуги',
    labelShort: 'Товары',
    to: '/'
  },
  {
    id: 'agents',
    label: 'Агенты',
    labelShort: 'Агенты',
    to: '/agents'
  },
  {
    id: 'about',
    label: 'О компании',
    labelShort: 'О компании',
    to: '/about'
  }
]
</script>