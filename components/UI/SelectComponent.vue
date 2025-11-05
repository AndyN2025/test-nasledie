<template>
    <div class="lg:block  mt-4 mb-4">

        <div class="hidden lg:block relative w-full">
            <div class="flex justify-center">
                <div class="relative w-full max-w-xs">
                    <button @click="isOpen = !isOpen"
                        class="w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 pl-4 pr-4 rounded-lg text-left text-sm flex items-center justify-between hover:bg-gray-200 transition">
                        <span>{{ currentLabel }}</span>
                        <ChevronDown class="w-5 h-5 text-gray-600 transition-transform duration-200"
                            :class="{ 'rotate-[-180deg]': isOpen }" />
                    </button>

                    <transition name="dropdown">
                        <div v-if="isOpen"
                            class="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 overflow-hidden">
                            <div class="p-[18px] space-y-5">
                                <div v-for="group in store.categoryGroups" :key="group.title">
                                    <div class="text-xs font-medium text-gray-500 mb-2">{{ group.title }}</div>
                                    <button v-for="item in group.items" :key="item.value" @click="selectAndClose(item.value)"
                                        class="w-full text-left text-sm hover:text-green-600 transition py-2 flex justify-between"
                                        :class="{ 'text-green-600 font-medium': modelValue === item.value }">
                                        <span>{{ item.label }}</span>
                                        <span class="text-gray-500">{{ item.count }}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>

        <div class="lg:hidden w-full">
            <button @click="isMobileOpen = true"
                class="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-left text-sm text-gray-700 flex items-center justify-between hover:bg-gray-200">
                <span>{{ currentLabel }}</span>
                <ChevronDown class="w-5 h-5 text-green-600" />
            </button>

            <teleport to="body">
                <Transition name="slide-up">
                    <div v-if="isMobileOpen" class="fixed inset-0 z-50 flex items-end bg-black/50"
                        @click.self="isMobileOpen = false">
                        <div class="w-full bg-gray-100 rounded-t-2xl shadow-2xl overflow-hidden" @click.stop>
                            <div class="flex items-center justify-between p-4 border-b border-gray-300">
                                <h3 class="text-lg font-semibold">Категории</h3>
                                <button @click="isMobileOpen = false" class="p-2 hover:bg-gray-200 rounded-full">
                                    <X class="w-5 h-5" />
                                </button>
                            </div>

                            <div class="max-h-96 overflow-y-auto bg-gray-100">
                                <div v-for="group in store.categoryGroups" :key="group.title" class="mb-4">
                                    <div class="px-4 py-2 text-xs font-medium text-gray-500 uppercase">{{ group.title }}
                                    </div>
                                    <button v-for="item in group.items" :key="item.value" @click="select(item.value)"
                                        class="w-full px-4 py-3 text-left hover:bg-gray-200 flex justify-between text-sm"
                                        :class="{ 'text-green-600 font-medium bg-gray-200': selected === item.value }">
                                        <span>{{ item.label }}</span>
                                        <span class="text-gray-500">{{ item.count }}</span>
                                    </button>
                                </div>
                            </div>

                            <div class="p-4 border-t border-gray-300 bg-gray-100">
                                <button @click="emit('update:modelValue', selected); isMobileOpen = false"
                                    class="w-full bg-green-600 text-white py-3 rounded-full font-medium hover:bg-green-700">
                                    Применить
                                </button>
                            </div>
                        </div>
                    </div>
                </Transition>
            </teleport>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ChevronDown, X } from 'lucide-vue-next'
import { useCategoryStore } from '@/stores/category'

const props = defineProps<{ modelValue: string }>()
const emit = defineEmits(['update:modelValue'])

const store = useCategoryStore()

const isOpen = ref(false)
const isMobileOpen = ref(false)
const selected = ref(props.modelValue)

watchEffect(() => selected.value = props.modelValue)

// Текущее название
const currentLabel = computed(() => {
    for (const group of store.categoryGroups) {
        const item = group.items.find(i => i.value === props.modelValue)
        if (item) return `${item.label} (${item.count})`
    }
    return 'Выберите категорию'
})

const select = (val: string) => {
    selected.value = val
}

const selectAndClose = (val: string) => {
    emit('update:modelValue', val)
    isOpen.value = false
}
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.2s ease-out;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.3s ease-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(100%);
    opacity: 0;
}
</style>