<template>
    <footer class="bg-gray-100 border-t">
        <div class="hidden lg:flex max-w-7xl mx-auto px-4 py-6 text-xs text-gray-500">
            <p class="flex items-center gap-[15px]">
                © Annonce 2023
                <NuxtLink to="/" class="hover:underline">Документы</NuxtLink>
                <NuxtLink to="/about" class="hover:underline">О компании</NuxtLink>
            </p>
        </div>
        
        <div class="lg:hidden px-4 py-3 text-xs text-gray-500 space-y-[15px] text-left">
            <p class="text-left">© Annoncé 2023</p>
        
            <div class="flex flex-col gap-[15px]">
                <NuxtLink to="/" class="hover:underline">Документы</NuxtLink>
                <NuxtLink to="/about" class="hover:underline">О компании</NuxtLink>
            </div>

            <div class="flex flex-col gap-[15px] text-gray-400">
                <span>О проекте</span>
                <span>Продакшн</span>
                <span>Популярное</span>
            </div>

            <p class="text-left">Русский</p>
        </div>
    </footer>
</template>