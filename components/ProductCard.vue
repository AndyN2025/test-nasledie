<template>
    <div class="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col h-full h-[320px]">
        <NuxtLink :to="`/ad/${ad.id}`" class="flex flex-col h-full">

            <div class="relative h-[200px] bg-gray-100 ">
                <img :src="ad.image" :alt="ad.title" class="w-full h-full object-contain p-4" />

                <div class="absolute top-2 left-2 right-2 flex gap-2">

                    <div class="flex items-center gap-1 bg-black/50 text-white text-xs px-2 py-1 rounded-md">
                        <Eye class="w-3 h-3" />
                        <span>{{ ad.views }}</span>
                    </div>

                    <div class="flex items-center gap-1 bg-black/50 text-white text-xs px-2 py-1 rounded-md">
                        <Calendar class="w-3 h-3" />
                        <span>{{ ad.daysAgo }} {{ ad.daysLabel }}</span>
                    </div>
                </div>
            </div>


            <div class="p-3 flex flex-col flex-1 h-[120px]">

                <p class="text-lg font-bold text-left">{{ ad.price }} ₽</p>


                <p class="text-sm text-gray-700 line-clamp-2 mt-1">{{ ad.title }}</p>

                <div v-if="ad.promoted" class="text-center text-green-600 text-xs font-medium mt-2">
                    Объявление продвигается
                </div>
                <div v-else-if="ad.hidden" class="text-center text-red-600 text-xs font-medium mt-2">
                    Объявление закрыто
                </div>

                <div v-else class="flex items-center justify-between mt-3 text-xs">
                    <span class="text-gray-600">Увеличьте кол-во просмотров</span>
                    <button @click.stop.prevent="promoteAd(ad.id)"
                        class="bg-green-600 text-white px-3 py-1.5 rounded-md text-xs font-medium hover:bg-green-700 transition">
                        Продвигать
                    </button>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { Eye, Calendar } from 'lucide-vue-next'

defineProps<{
    ad: {
        id: number
        image: string
        title: string
        price: string
        views: number
        daysAgo: number
        daysLabel: string
        promoted: boolean
        hidden: boolean
    }
}>()

const promoteAd = (id: number) => {
    alert(`Продвигаем объявление #${id}`)
}
</script>