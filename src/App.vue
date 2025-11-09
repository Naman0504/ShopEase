<template>

  <div class="min-h-screen flex flex-col">
    <!-- Header / Nav -->
       <Header/>
    

    <!-- Router outlet -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-50 border-t">
      <div class="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
        © ShopEase - Demo project. All prices are for demo only.
      </div>
    </footer>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
</script>

<style>
/* any global component styles */
</style>
