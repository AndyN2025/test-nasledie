<template>
    <section class="max-w-4xl mx-auto w-full space-y-2">
        <div class="rounded-2xl  p-4 h-full min-h-[130px] flex flex-col justify-center">
            <h2 class="text-2xl font-bold mb-4">О компании</h2>
            <p class="text-gray-600 text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Iure voluptas commodi culpa! Fuga incidunt sequi eaque,
                cupiditate numquam magnam debitis ipsa aliquam quibusdam
                eius accusamus? Dicta omnis minus dolorem blanditiis.
            </p>
        </div>

        <div
            class=" rounded-2xl  p-4 h-full min-h-[130px] flex flex-col justify-center opacity-60 cursor-not-allowed">
            <h3 class="text-2xl font-bold mb-2">Режим работы</h3>
            <p class="text-gray-600 text-lg">Сегодня с 8:00 до 23:00</p>
        </div>

        <div class=" rounded-2xl  overflow-hidden h-full min-h-[130px]">
            <div class="flex flex-col md:flex-row h-full">
                <div class="w-full md:w-[70%] p-4 flex flex-col justify-center order-2 md:order-1">
                    <h3 class="text-2xl font-bold mb-2">Местоположение</h3>
                    <p class="text-green-600 text-lg font-normal">
                        Ростов на Дону, Воронежская ул., 42А корп. 1
                    </p>
                </div>

                <div class="w-full md:w-[30%] relative bg-gray-200 h-48 md:h-full order-1 md:order-2">
                    <img src="https://via.placeholder.com/300x200?text=Карта" alt="Карта проезда"
                        class="w-full h-full object-cover" />
                    <MapPin
                        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white drop-shadow-md" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { MapPin } from 'lucide-vue-next'

definePageMeta({
    layout: 'layout'
})
</script>

<style scoped>
@media (min-width: 768px) {
    .rounded-2xl>div>div:last-child {
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }
}
</style>