<template>
  <div class="bg-white  h-28 flex items-center gap-5 p-4">

    <div class="text-2xl relative ">

      <i :class="icon" class="z-10 relative text-3xl"> <span class="absolute h-8 w-8 -z-10 -right-2  bg-yellow-300 rounded-full"></span></i>
    </div>

    <div>
      <h5 class="font-semibold text-lg">{{ title }}</h5>
      <p class="text-gray-500 text-sm">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: String,
  title: String,
  description: String
})
</script>
