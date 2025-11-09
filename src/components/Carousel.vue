<template>
    <section class="py-10 bg-[#fffff9]">
        <h2 class="text-3xl font-bold text-center mb-8">✨ Trending Products</h2>

        <swiper :modules="[Autoplay, Pagination, EffectCoverflow]" effect="coverflow" grabCursor="true"
            centeredSlides="true" slidesPerView="auto" :coverflowEffect="{
                rotate: 40,
                stretch: 0,
                depth: 150,
                modifier: 1,
                slideShadows: true,
            }" :autoplay="{ delay: 2000, disableOnInteraction: false, reverseDirection: true, }" :loop="true"
            class="w-full max-w-6xl mx-auto overflow-hidden">
            <swiper-slide v-for="(product, index) in products" :key="index"
                class="!w-[260px] transition-transform duration-500 hover:scale-105 overflow-hidden">
                <div class="bg-white rounded-2xl shadow-md hover:shadow-xl duration-300 overflow-hidden">
                    <img :src="product.thumbnail" class="w-full h-48 object-contain bg-[#f4f9f4]" />
                    <div class="p-4 text-center">
                        <h3 class="text-lg font-semibold mb-1">{{ product.title }}</h3>
                        <p class="text-gray-500 text-sm mb-2 truncate">{{ product.description }}</p>
                        <div class="text-green-700 font-bold text-lg mb-2">
                            ${{ product.price }}
                        </div>
                        <button @click="addToCart(product)"
                            class="bg-[#275c37] hover:bg-[#388e3c] text-white px-3 py-1 rounded-full text-xs transition duration-300">
                            Buy Now
                        </button>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { ref } from 'vue'
import productsData from '../data/products.json'
import { useCartStore } from '../store/useCart'
import { toast } from 'vue3-toastify'

const products = ref(productsData)
const cart = useCartStore()
const addToCart = (product) => {
    cart.selectProduct(product, 1)
    toast.success("Added to Cart")
}
</script>

<style>
.swiper {
    padding-bottom: 40px;
}
</style>
