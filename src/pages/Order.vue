<template>
  <section class="p-4 sm:p-6 md:p-10">

    <div v-if="cart.selectedProduct?.length" class="flex flex-col lg:flex-row gap-6">
      <div class="w-full max-h-[50vh] md:max-h-[70vh] overflow-y-scroll px-2 md:px-4 flex flex-col gap-3">
        <div v-for="item in cart.selectedProduct" :key="item.id"
          class="bg-white p-2 md:p-4 border-b shadow-sm border-gray-50 w-full flex h-40 gap-5 relative">

          <div class="h-full w-24 sm:w-28 md:w-40 bg-[#f3f3f3c5] ">

            <img :src="item.thumbnail || item.images" :alt="item.title" class="w-full h-full object-contain  mb-4" />
          </div>
          <div class="flex-1">
            <h3 class="text-md md:text-xl font-semibold mb-2">{{ item.title }}</h3>

            <p class="text-gray-500 text-xs line-clamp-2 md:line-clamp-none md:text-sm mb-1">{{ item.description }}</p>
            <div class="flex gap-10 items-center mt-2">

              <div class="flex w-full justify-between items-center gap-3 md:gap-5 pt-1">
                <div class="flex gap-5 items-center">
                  <p class="font-semibold text-lg">${{ item.price }}</p>
                  <div class="flex items-center gap-2 md:gap-3">
                    <button @click="cart.decrement(item.id)"
                      class="bg-[#275c37] h-5 w-5 md:h-6 md:w-6 rounded-full flex justify-center items-center text-white"><i
                        class="fa-solid fa-minus text-xs md:text-sm"></i></button>
                    <span class="font-semibold">{{ item.quantity }}</span>
                    <button @click="cart.increment(item.id)"
                      class="bg-[#275c37] h-5 w-5 md:h-6 md:w-6 rounded-full flex justify-center items-center text-white"><i
                        class="fa-solid fa-plus text-xs md:text-sm"></i></button>

                  </div>
                </div>

                <p @click="removeItem(item.id)" class="text-[#275c37] flex items-center justify-center"><i
                    class="fa-solid fa-trash cursor-pointer"></i></p>
              </div>

            </div>

          </div>
        </div>





      </div>


      <div class="bg-[#f2fddb7e] rounded-lg p-4 shadow-sm pt-14 w-full sm:w-full md:w-1/3 h-fit relative">
        <h4 class="text-lg font-semibold mb-2 absolute bg-yellow-400 px-4 left-0 top-4 rounded-r-full">Price Summary
        </h4>
        <div class="flex justify-between mb-2">
          <span>Price</span>
          <span>${{ price.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span>Quantity</span>
          <span>{{ qty }}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${{ subtotal.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span>GST (18%)</span>
          <span>${{ gst.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between font-bold text-lg mt-4">
          <span>Total</span>
          <span>${{ total.toFixed(2) }}</span>
        </div>

        <button class="mt-6 w-full bg-green-600 text-white py-2 rounded-full" @click="placeOrder"> <i
            class="fa-solid fa-truck-fast"></i> Place Order</button>
      </div>
    </div>

    <div v-else class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
      <p>No product selected. Please choose a product from <router-link to="/products"
          class="underline">Products</router-link>.</p>
    </div>
  </section>
</template>

<script setup>

import { ref, computed } from 'vue'
import {  useRouter } from 'vue-router'

import { useCartStore } from '../store/useCart'
import { toast } from 'vue3-toastify'


const cart = useCartStore()

const router = useRouter()

const qty = computed(() =>
  cart.selectedProduct.reduce((sum, item) => sum + (item.quantity || 1), 0)
)

const price = computed(() =>
  cart.selectedProduct.reduce((sum, item) => sum + item.price, 0)
)

const subtotal = computed(() =>
  cart.selectedProduct.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
)

const gst = computed(() => subtotal.value * 0.18)
const total = computed(() => subtotal.value + gst.value)

function placeOrder() {
  if (!cart.selectedProduct.length) {
    toast.error('Your cart is empty!')
    return
  }

  toast.success(`Order placed!\nItems: ${cart.selectedProduct.length}\nTotal: $${total.value.toFixed(2)}`)
  
  router.push('/')
}

function removeItem(id){
      cart.removeProduct(id)
      toast.success('Product removed successfully.!!!')
}
</script>

