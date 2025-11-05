<template>
  <div class="flex-1">
    <div class="space-y-4 max-w-4xl mx-auto w-full">

      <div  class="space-y-4 lg:max-h-[480px] p-8">
        <AgentCard
          v-for="agent in store.agents"
          :key="agent.id"
          :name="agent.name"
          :avatar="agent.avatar.trim()"
          :verified="agent.verified"
          :rating="agent.rating"
          :reviews="agent.reviews"
          :description="agent.description"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AgentCard from '@/components/AgentCard.vue'
import { useAgentsStore } from '@/stores/agents'

definePageMeta({
    layout: 'layout'
})

const store = useAgentsStore()
</script>