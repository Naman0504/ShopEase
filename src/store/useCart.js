// src/stores/cart.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    selectedProduct: JSON.parse(localStorage.getItem('cart')) || [], 

    
  }),

  

  actions: {
    selectProduct(product, qty = 1) {
      const existing = this.selectedProduct.find(p => p.id === product.id)
      if (existing) {
        existing.quantity += qty
      } else {
        this.selectedProduct.push({ ...product, quantity: qty })
        
      }
      this.saveCart()
    },

    increment(productId) {
      const item = this.selectedProduct.find(p => p.id === productId)
      if (item) {
        item.quantity++
      }
      this.saveCart()
    },

    decrement(productId) {
      const item = this.selectedProduct.find(p => p.id === productId)
      if (item && item.quantity > 1) {
        item.quantity--
      }
      this.saveCart()
    },

    removeProduct(productId) {
      this.selectedProduct = this.selectedProduct.filter(p => p.id !== productId)
      this.saveCart()
    },
  

    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.selectedProduct))
    },

    
  }
})
