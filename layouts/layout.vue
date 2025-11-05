<template>
    <div class="h-screen bg-gray-50 flex flex-col overflow-hidden">
        <Header />

        <div class="flex-1 flex flex-col lg:mx-auto w-full overflow-y-auto">
            <div class="p-4 lg:p-0">
                <CompanyInfo />
                <Tabs  :agentsCount="agentsCount"/>
            </div>

            <div class="flex-1  p-4 lg:p-0 lg:max-h-490">
                <slot />
            </div>
        </div>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from '@/components/UI/Header.vue'
import Footer from '@/components/UI/Footer.vue'
import CompanyInfo from '@/components/CompanyInfo.vue'
import Tabs from '@/components/UI/Tabs.vue'
import { useAgentsStore } from '@/stores/agents'
import { computed } from 'vue'


const agentsStore = useAgentsStore()
const agentsCount = computed(() => agentsStore.agents.length)

</script>