<template>
    <div class=" lg:mx-auto pb-8 flex flex-col ">

        <div class="h-[100%] overflow-y-auto rounded-xl  p-4 bg-gray-50">

            <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
                <div v-for="n in 8" :key="n" class="bg-white rounded-xl h-64 animate-pulse"></div>
            </div>

            <div v-else-if="paginatedItems.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
                <slot v-for="item in paginatedItems" :item="item" />
            </div>

            <div v-else class="flex items-center justify-center h-full text-gray-500">
                <p class="text-center">Товаров не найдено</p>
            </div>
        </div>

        <div v-if="totalPages > 1" class="mt-6 flex justify-center items-center gap-2 pt-6 border-t border-gray-200">
            <button @click="currentPage--" :disabled="currentPage === 1"
                class="w-10 h-10 rounded-lg border flex items-center justify-center transition"
                :class="currentPage === 1 ? 'border-gray-300 text-gray-400' : 'border-gray-300 hover:bg-gray-50'">
                <ChevronLeft class="w-5 h-5" />
            </button>

            <button v-for="page in totalPages" :key="page" @click="currentPage = page"
                class="w-10 h-10 rounded-lg transition font-medium"
                :class="currentPage === page ? 'bg-green-600 text-white' : 'hover:bg-gray-50 border border-gray-300'">
                {{ page }}
            </button>

            <button @click="currentPage++" :disabled="currentPage === totalPages"
                class="w-10 h-10 rounded-lg border flex items-center justify-center transition"
                :class="currentPage === totalPages ? 'border-gray-300 text-gray-400' : 'border-gray-300 hover:bg-gray-50'">
                <ChevronRight class="w-5 h-5" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { ref, computed, watch } from 'vue'

const props = defineProps<{
    items: any[]
    loading?: boolean
}>()

const currentPage = ref(1)
const itemsPerPage = 8

const totalPages = computed(() => Math.ceil(props.items.length / itemsPerPage))
const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    return props.items.slice(start, start + itemsPerPage)
})

// Сброс страницы при изменении списка
watch(() => props.items, () => {
    currentPage.value = 1
}, { deep: true })
</script>