<template>
  <section class="relative bg-gradient-to-br from-green-50 to-yellow-50 py-16 px-6 md:px-16 overflow-hidden">
    <h2 class="text-4xl font-bold text-center text-green-700 mb-12">
      What Our Customers Say
    </h2>

    <div class="relative max-w-7xl mx-auto">
      <Swiper
        :modules="[Autoplay, Pagination, FreeMode]"
        :slides-per-view="'auto'"
        :space-between="24"
        :loop="true"
        :free-mode="true"
        :autoplay="{ delay: 2500, disableOnInteraction: false, reverseDirection: true }"
        :speed="1000"
        grab-cursor
        class="pb-10 overflow-hidden"
      >
        <SwiperSlide
          v-for="(t, i) in testimonials"
          :key="i"
          class="!w-[280px] sm:!w-[320px] bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 p-5 flex flex-col gap-3 border border-green-100"
          :style="{
            height: t.height + 'px',
            transform: 'rotate(' + t.tilt + 'deg)',
          }"
        >
          <div class="flex items-center gap-3">
            <img
              :src="t.image"
              :alt="t.name"
              class="w-14 h-14 rounded-full border-4 border-yellow-400 shadow-sm object-cover"
            />
            <div class="text-left">
              <h3 class="text-lg font-semibold text-green-700">{{ t.name }}</h3>
              <span class="text-gray-500 text-sm">{{ t.role }}</span>
            </div>
          </div>
          <p class="text-gray-700 italic mt-2 leading-snug">
            "{{ t.feedback }}"
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Customer",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    feedback:
      "This site makes online shopping fun and super easy. Love the eco-friendly vibe!",
    height: 220,
    tilt: -1.8,
  },
  {
    name: "Rahul Mehta",
    role: "Lifestyle Blogger",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=200&h=200&fit=crop",
    feedback:
      "Absolutely love their fragrance collection. It feels so premium!",
    height: 260,
    tilt: 1.2,
  },
  {
    name: "Aisha Khan",
    role: "Frequent Buyer",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&h=200&fit=crop",
    feedback:
      "Quick delivery and beautiful packaging! The groceries are always fresh.",
    height: 210,
    tilt: -1,
  },
  {
    name: "Rohit Verma",
    role: "Beauty Enthusiast",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&h=200&fit=crop",
    feedback:
      "The UI is smooth, and the checkout is instant. Highly recommended!",
    height: 240,
    tilt: 0.8,
  },
  {
    name: "Rohan Kapoor",
    role: "Influencer",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&h=200&fit=crop",
    feedback:
      "So aesthetic and reliable! Their organic section is my personal favorite.",
    height: 230,
    tilt: 0.6,
  },
];
</script>

<style scoped>
.swiper {
  overflow: hidden !important; /* Prevent overflow affecting layout */
}
.swiper-slide {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.swiper-slide:hover {
  transform: scale(1.05) rotate(0deg);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
</style>
