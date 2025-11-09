<template>
  <section class="w-full">

    <!--  this is hero section  -->
    <div class="bg-gradient-to-r bg-[#ebface6b] text-white pt-8 px-5 md:px-12 sm:pt-8">
      <div class="container mx-auto flex flex-col md:flex-row gap-8 md:gap-6">
        <div class="flex-1 pt-5 px-5 sm:pt-12 sm:px-12 md:pt-20 md:px-16">
          <p class="bg-white shadow-sm px-4 py-1 my-2 rounded-full text-[black] w-fit"><i
              class="fa-solid fa-bag-shopping pe-3 text-yellow-400"></i><span>The Best Online Store</span></p>
          <h1 class="text-4xl md:text-6xl text-[#000] font-bold my-5 ">Shop <span
              class="text-4xl md:text-6xl text-[#275c37]">Everything You
              Love</span> in One Click</h1>

          <p class="mb-4 text-gray-600">From daily essentials to luxury picks — everything you need, all in one place.
          </p>
          <router-link to="/products" class="bg-[#275c37] px-4 py-2 rounded-full flex gap-2 items-center w-fit">Shop
            Now <i class="fa-solid fa-arrow-right-long"></i></router-link>

          <div class="inline-flex mt-5 items-center gap-3 bg-whitew p-3 rounded-lg">

            <div class="flex -space-x-3">
              <img class="w-8 h-8 md:w-10 md:h-10  rounded-full border-2 border-white object-cover"
                src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 1" />
              <img class="w-8 h-8 md:w-10 md:h-10  rounded-full border-2 border-white object-cover"
                src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 2" />
              <img class="w-8 h-8 md:w-10 md:h-10  rounded-full border-2 border-white object-cover"
                src="https://randomuser.me/api/portraits/men/52.jpg" alt="User 3" />
              <img class="w-8 h-8 md:w-10 md:h-10  rounded-full border-2 border-white object-cover"
                src="https://randomuser.me/api/portraits/women/26.jpg" alt="User 4" />

              <div
                class="w-8 h-8 md:w-10 md:h-10  flex items-center justify-center bg-yellow-400 text-black font-semibold rounded-full border-2 border-white text-sm">
                +</div>
            </div>

            <div class="flex flex-col leading-tight">
              <span class="font-semibold text-gray-900 text-sm">4.5 Ratings+</span>
              <span class="text-xs text-gray-500">Trusted by 5k+ Customers</span>
            </div>
          </div>

        </div>
        <div class="w-[100%] h-[300px] md:w-[400px] md:h-[550px] ">

          <img src="/src/assets/banner-image.png" alt="banner"
            class="w-full object-contain md:object-none rounded h-full" />
        </div>
      </div>
    </div>

    <!-- About section  -->
    <div class="max-w-6xl mx-auto px-3 md:px-6 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
      
      <div class="text-center md:text-left">
        <h2 class="text-2xl md:text-3xl font-bold text-[#275c37] mb-4">About Us</h2>
        <p class="text-gray-600 leading-relaxed mb-6">

          "At <span class="font-semibold text-gray-800">ShopEase</span>, we’re redefining the way people shop online.
          What started as a simple idea — to make quality
          products accessible and affordable — has grown into a trusted marketplace loved by thousands.

          We’re passionate about bringing together innovation, authenticity, and trust, connecting customers directly
          with brands they love.

          From fashion and lifestyle to home essentials, every product on ShopEase is carefully curated to ensure style,
          quality, and sustainability.

          Our mission is to create a seamless shopping experience that’s not only easy but also enjoyable — empowering
          customers to shop smarter, live better, and feel confident in every purchase."
        </p>
        <button class="bg-[#275c37] text-white px-6 py-2 rounded-full hover:bg-[#1f472b] transition duration-300">
          Discover Our Journey
        </button>
      </div>

      <div class="flex justify-center items-center gap-4">
        <div
          class="w-28 h-48 md:w-32 md:h-56 rounded-xl overflow-hidden shadow-md transform transition duration-500 hover:-rotate-3 hover:scale-105">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600" alt="ecommerce products"
            class="w-full h-full object-cover" />
        </div>
        <div
          class="w-28 h-64 md:w-32 md:h-72 rounded-xl overflow-hidden shadow-md transform transition duration-500 hover:rotate-3 hover:scale-105 mt-6">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" alt="ecommerce"
            class="w-full h-full object-cover" />
        </div>
        <div
          class="w-28 h-48 md:w-32 md:h-56 rounded-xl overflow-hidden shadow-md transform transition duration-500 hover:-rotate-2 hover:scale-105 mt-3">
          <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600" alt="shopping bag"
            class="w-full h-full object-cover" />
        </div>
      </div>
    </div>


    <!-- This is category section -->
    <Cateory />


   <!-- //cateory sectionn -->
    <div>
      <Carousel />
    </div>


    <div class="flex flex-col sm:flex-col md:flex-row justify-normal md:justify-around items-center px-8 md:px-12 py-8">
      <Services icon="fa-solid fa-truck-fast" title="Free Shipping"
        description="Get free delivery on all orders above ₹999." />
      <Services icon="fa-solid fa-credit-card" title="Secure Payment"
        description="Your payment information is processed securely." />
      <Services icon="fa-solid fa-headset" title="24x7 Support"
        description="Return your product within 7 days hassle-free." />

    </div>




    <Testimonial />


  </section>
</template>

<script setup>
import Carousel from '../components/Carousel.vue';
import Cateory from '../components/Cateory.vue';
import Services from '../components/Services.vue';
import Testimonial from '../components/Testimonial.vue';

</script>
