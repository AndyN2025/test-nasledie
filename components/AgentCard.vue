<template>
    <div class="bg-gray-100 rounded-2xl p-4 max-h-[140px]">
        <div class="flex gap-4">

            <div class="w-[20%] flex-shrink-0">
                <img :src="avatar" :alt="name" class="w-full aspect-square rounded-2xl object-cover" />
            </div>

            <div class="w-[80%] min-w-0 flex flex-col">
                <h3 class="font-bold text-gray-900 text-base mb-2 truncate">{{ name }}</h3>

                <div class="flex items-center gap-1 text-sm text-gray-600 mb-2">
                    <span v-if="verified" class="flex items-center gap-1">
                        <CheckCircle class="w-4 h-4 text-green-600" />
                        <span>Документы проверены</span>
                    </span>
                    <span v-if="verified && (rating > 0 || reviews > 0)" class="text-gray-400">•</span>
                    <span v-if="rating > 0 || reviews > 0" class="flex items-center gap-1">
                        <Star class="w-4 h-4 text-green-500" />
                        <span class="font-medium">{{ rating }}</span>
                        <span v-if="reviews > 0">• {{ reviews }} отзывов</span>
                        <span v-else class="text-gray-400">• Нет отзывов</span>
                    </span>
                </div>

                <p class="text-sm text-gray-600 leading-relaxed line-clamp-2 mt-2">
                    {{ description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    name: string
    avatar: string
    verified: boolean
    rating: number
    reviews: number
    description: string
}>()
</script>

<script lang="ts">
import { CheckCircle, Star } from 'lucide-vue-next'
export default {
    components: { CheckCircle, Star }
}
</script>