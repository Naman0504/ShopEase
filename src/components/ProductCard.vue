<template>
  <div class="relative bg-gradient-to-r from-[#f3f3f3c5] to-[#f0ededde] rounded-lg shadow-xs hover:shadow-sm p-3 md:p-6">
    <img :src="product.thumbnail" :alt="product.name" class="h-28 md:h-40 drop-shadow-2xl w-full object-contain rounded mb-3 mt-3 md:mt-0" />
    <div class="flex flex-col flex-grow justify-between">
      <div class="flex flex-col justify-between">
        <h3 class="font-semibold text-sm md:text-xl my-1 md:my-2 line-clamp-1">{{ product.title }}</h3>
        <p class="text-[11px] md:text-sm text-gray-600 mb-2 line-clamp-2 my-1 md:my-2">
          {{ product.description }}
        </p>
      </div>

      <div class="flex items-center justify-between py-2">
        <div class="text-gray-600 text-sm text-md font-bold">
          ${{ product.price.toFixed(2) }}
        </div>
        <button @click="addToCart(product)" class="bg-[#275c37] text-white px-3 py-1 rounded-full text-[10px] md:text-sm">
          Buy Now
        </button>
      </div>
    </div>
    <div class="h-6 w-6 md:h-8 md:w-8 flex justify-center items-center absolute right-2 top-2 rounded-full bg-[#f3f3f3c5] shadow"  @click="toggleHeart">
      <div class="text-gray-300 flex justify-center items-center text-[11px] md:text-sm"><i class="fa-solid fa-heart" :class="isActive ? 'text-[#5aaa72]' : 'text-gray-300'" ></i></div>
    </div>
    <div class="h-6 md:h-8 px-2 flex justify-center items-center absolute left-0 top-2 rounded-r-full bg-[#f3f3f3c5] shadow"  @click="toggleHeart">
      <div class="text-gray-400 text-[11px] md:text-sm flex justify-center items-center">{{ product.category }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../store/useCart'

import { toast } from 'vue3-toastify'
defineProps({ product: Object })
const isActive = ref(false)
const cart = useCartStore()

const toggleHeart = () => {
  isActive.value = !isActive.value
}

const addToCart = (product) => {
  cart.selectProduct(product, 1)
  toast.success("Added to Cart")
}
</script>
