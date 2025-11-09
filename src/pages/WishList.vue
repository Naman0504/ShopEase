<template>
  <div class="container mx-auto px-6 py-10 min-h-screen">
    <h2 class="text-3xl font-bold text-[#275c37] mb-6 flex items-center gap-2">
      <i class="fa-solid fa-heart text-[#f2c94c]"></i>
      My Wishlist
    </h2>

    <div v-if="wishlist.length === 0" class="text-center py-20 text-gray-500">
      <i class="fa-solid fa-heart-crack text-4xl mb-3"></i>
      <p>No items in your wishlist yet.</p>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="item in wishlist"
        :key="item.id"
        class="bg-[#f9f9f9] rounded-xl shadow-md hover:shadow-lg transition p-5 relative"
      >
        <button
          @click="remove(item.id)"
          class="absolute top-3 right-3 text-red-500 hover:text-red-700 text-xl"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>

        <img
          :src="item.image"
          :alt="item.title"
          class="h-48 w-full object-cover rounded-lg mb-4"
        />

        <h3 class="font-semibold text-lg text-[#275c37] mb-1 truncate">
          {{ item.title }}
        </h3>
        <p class="text-gray-600 text-sm mb-2 line-clamp-2">{{ item.description }}</p>
        <p class="text-[#275c37] font-bold text-lg mb-3">${{ item.price }}</p>

        <button
          @click="addToCart(item)"
          class="w-full bg-[#275c37] text-white py-2 rounded-lg hover:bg-[#1f4b2c] transition"
        >
          <i class="fa-solid fa-cart-plus mr-2"></i> Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/useCart'
import { computed } from 'vue'
import { toast } from 'vue3-toastify'
const cart = useCartStore()


const wishlist = computed(() => cart.wishlist)

const remove = (id) => {
  cart.removeFromWishlist(id)
  toast.success('Removed from wishlist 💔')
}

const addToCart = (product) => {
  cart.selectProduct(product)
  cart.removeFromWishlist(product.id)
  toast.success('Added to cart 🛒')
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
