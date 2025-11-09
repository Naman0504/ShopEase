<template>
  <header class="shadow">
    <nav class="container mx-auto px-6 py-4 flex items-center justify-between">
      <div class="text-xl font-bold">ShopEase</div>
      <ul class="gap-10 font-semibold hidden md:flex">
        <li><router-link to="/"
            class="hover:bg-[#ebface91] hover:text-black px-3 py-1 hover:rounded-full duration-300">Home</router-link>
        </li>
        <li><router-link to="/products"
            class="hover:bg-[#ebface91] hover:text-black px-3 py-1 hover:rounded-full duration-300 ">Products</router-link>
        </li>
        <li><router-link to="/contact"
            class="hover:bg-[#ebface91] hover:text-black px-3 py-1 hover:rounded-full duration-300">Contact</router-link>
        </li>
      </ul>
      <div class="flex gap-4 items-center text-lg">

        
        <router-link to="/order" class="cart-link"><i class="fa-solid fa-cart-shopping relative"><span
              class="absolute h-4 w-4 bg-green-600 flex justify-center items-center -right-[7px] -top-2 text-[10px] text-white rounded-full">{{
                cart.selectedProduct.length
              }}</span></i></router-link>

        <button class="md:hidden text-2xl focus:outline-none" @click="toggleMenu">
          <i :class="isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
        </button>
      </div>
    </nav>


    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <ul v-if="isOpen" class="flex flex-col items-center gap-5 bg-[#275c37] text-white py-6 md:hidden shadow-md">
        <li>
          <router-link @click="closeMenu" to="/" class="hover:text-[#ebface91]">Home</router-link>
        </li>
        <li>
          <router-link @click="closeMenu" to="/products" class="hover:text-[#ebface91]">Products</router-link>
        </li>
        <li>
          <router-link @click="closeMenu" to="/contact" class="hover:text-[#ebface91]">Contact</router-link>
        </li>
      </ul>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '../store/useCart';

const cart = useCartStore()
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<style scoped>
.router-link-active {
  @apply bg-[#275c37] text-white rounded-full;
}

.cart-link.router-link-active {
  background: transparent !important;
  color: inherit !important;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(10px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>