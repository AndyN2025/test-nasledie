<template>
  <div class="space-y-4 max-w-7xl mx-auto w-full">
    <SelectComponent v-model="selectedCategoryModel" />

    <ProductList :items="store.filteredAds()" :loading="store.loading">
      <template #default="{ item }">
        <ProductCard :ad="item" />
      </template>
    </ProductList>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import ProductList from '@/components/ProductList.vue'
import SelectComponent from '@/components/UI/SelectComponent.vue'
import { useAdsStore } from '@/stores/ads'

definePageMeta({
  layout: 'layout'
})
const store = useAdsStore()

const selectedCategoryModel = ref(store.selectedCategory)
watch(selectedCategoryModel, (newVal) => {
  store.selectedCategory = newVal
})

onMounted(async () => {
  if (!store.ads.length) {
    await store.fetchAds()
  }
})

</script>