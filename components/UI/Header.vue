<template>
  <header class="bg-yellow-50 h-[60px] sticky top-0 z-50 shadow-sm">
    <div class="hidden lg:flex items-center justify-between h-full max-w-7xl mx-auto px-6">
      <div class="flex items-center gap-6">
        <NuxtLink to="/" class="text-2xl font-bold text-gray-900">Annonce</NuxtLink>

        <button class="flex items-center gap-2 bg-gray-100 text-gray-700 px-2 py-2 rounded-full hover:bg-gray-200 transition cursor-pointer">
          <LayoutGrid class="w-4 h-4" />
          <span class="text-sm font-medium">Все категории</span>
        </button>
      </div>


      <div class="flex items-center gap-8 text-sm">
        <div class="flex items-center gap-1 text-gray-600">
          <MapPin class="w-4 h-4" />
          <span>Ростов-на-Дону</span>
        </div>

        <div class="h-6 w-px bg-gray-300"></div>

        <NuxtLink to="/" class="text-green-600 font-medium hover:text-green-700 transition">
          Разместить объявление
        </NuxtLink>

        <button class="flex items-center gap-3 bg-gray-100 rounded-full p-1 pr-3 hover:bg-gray-200 transition">
          <Menu class="w-5 h-5 text-gray-600 ml-1" />
          <div class="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            <img src="https://via.placeholder.com/32" alt="User" class="w-full h-full object-cover" />
          </div>
        </button>
      </div>
    </div>


    <div class="lg:hidden flex items-center justify-between h-full px-4">

      <button class="p-2 hover:bg-gray-200/50 rounded-full transition">
        <Menu class="w-5 h-5 text-gray-700" />
      </button>

      <NuxtLink to="/" class="text-xl font-bold text-gray-900">
        Annonce
      </NuxtLink>

      <button class="relative p-1 hover:bg-gray-200/50 rounded-full transition">
        <ShoppingBag class="w-5 h-5 text-gray-700" />
        <span class="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
          1
        </span>
      </button>
    </div>
  </header>
</template>