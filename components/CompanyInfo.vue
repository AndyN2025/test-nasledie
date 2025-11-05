<template>
    <section class="hidden lg:block text-center pb-8">
        <div class="inline-flex items-center justify-center w-24 h-24 bg-black rounded-2xl mb-6">
            <div class="text-yellow-400 text-4xl font-bold">Н</div>
        </div>

        <h1 class="text-3xl font-bold text-gray-900 mb-2">Наследие</h1>

        <div class="flex items-center justify-center gap-1 text-sm text-gray-600 mb-4">
            <CheckCircle class="w-4 h-4 text-green-600 flex-shrink-0" />
            <span>Документы проверены</span>
            <span class="text-gray-400">•</span>

            <Star class="w-4 h-4 text-green-600 flex-shrink-0" />
            <span>4.7</span>
            <span class="text-gray-400">•</span>

            <span>19 отзывов</span>
        </div>

        <button @click="emit('toggle-phone')"
            class="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 font-medium transition">
            {{ showPhone ? '+7 (999) 123-45-67' : 'Показать номер телефона' }}
        </button>
    </section>
</template>

<script setup lang="ts">
import { CheckCircle, Star } from 'lucide-vue-next'

defineProps<{ showPhone?: boolean }>()
const emit = defineEmits(['toggle-phone'])
</script>