<template>
  <div class="flex flex-col lg:flex-row gap-8 p-5 lg:p-8 pt-12  min-h-screen">

    <aside
      class="w-full lg:w-1/4 bg-[#f5f2f2ad] rounded-xl shadow-sm p-5 h-fit sticky top-5 hidden md:block"
    >
      <h3 class="text-xl font-semibold mb-4 text-[#275c37]">Filters</h3>

      <div class="mb-4">
        <label class="block font-medium mb-2">Category</label>
        <select
          v-model="selectedCategory"
          class="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#275c37]"
        >
          <option value="">All</option>
          <option v-for="cat in categories" :key="cat">{{ cat }}</option>
        </select>
      </div>

      <div class="mb-4">
        <label class="block font-medium mb-2">Max Price: ${{ maxPrice }}</label>
        <input
          type="range"
          min="0"
          max="5000"
          step="100"
          v-model="maxPrice"
          class="w-full accent-[#275c37]"
        />
      </div>

      <div>
        <label class="block font-medium mb-2">Sort By</label>
        <select
          v-model="sortBy"
          class="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#275c37]"
        >
          <option value="">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
    </aside>

    <div class="flex-1">
      <div class="max-w-xl mb-6">
        <div class="flex bg-white rounded-lg shadow-md overflow-hidden">
          <input
            v-model="search"
            type="text"
            class="flex-1 px-4 py-2 outline-none"
            placeholder="Search products..."
          />
          <button class="bg-[#275c37] text-white px-4"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>

      <div
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6"
      >
        <ProductCard
          v-for="p in filteredProducts"
          :key="p.id"
          :product="p"
          @select="goToOrder"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../store/useCart'
import ProductCard from './ProductCard.vue'
import productsData from '../data/products.json'

const products = ref(productsData)
const search = ref('')
const selectedCategory = ref('')
const maxPrice = ref(5000)
const sortBy = ref('')

const categories = [...new Set(products.value.map(p => p.category))]

const router = useRouter()
const cart = useCartStore()

function goToOrder(product) {
  cart.selectProduct(product)
  router.push('/order')
}

const filteredProducts = computed(() => {
  let list = products.value

  list = list.filter(p =>
    p.title.toLowerCase().includes(search.value.toLowerCase())
  )

  if (selectedCategory.value)
    list = list.filter(p => p.category === selectedCategory.value)

  list = list.filter(p => p.price <= maxPrice.value)

  if (sortBy.value === 'price-low') list = [...list].sort((a, b) => a.price - b.price)
  else if (sortBy.value === 'price-high') list = [...list].sort((a, b) => b.price - a.price)

  return list
})
</script>

<style scoped>
/* For smooth layout */
@media (max-width: 1024px) {
  aside {
    position: relative;
    top: 0;
  }
}
</style>
