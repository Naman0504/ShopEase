<template>
  <section
    class="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 flex flex-col items-center justify-center px-6 py-12"
  >
    <transition name="fade-slide">
      <div
        class="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-10 w-full max-w-lg border border-green-100"
        key="form"
      >
        <h2 class="text-3xl font-bold text-center text-green-700 mb-8">
          Get in Touch 💬
        </h2>

        <form @submit.prevent="submit" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Name</label>
            <input
              v-model="form.name"
              required
              class="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400 transition-all"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400 transition-all"
              placeholder="example@gmail.com"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Subject</label>
            <input
              v-model="form.subject"
              class="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400 transition-all"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Message</label>
            <textarea
              v-model="form.message"
              rows="5"
              class="w-full border border-gray-200 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400 transition-all"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-green-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
          >
            Send Message <i class="fa-solid fa-envelope"></i>
          </button>
        </form>

        <p class="text-center text-sm text-gray-500 mt-8">
          Prefer email? Reach us at
          <a
            href=""
            class="text-green-600 hover:underline font-medium"
            >support@shopease.com</a
          >
        </p>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { toast } from 'vue3-toastify'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

function submit() {
  toast.success(`Thanks, ${form.name}! We’ve received your message ✨`)
  
  Object.keys(form).forEach(k => (form[k] = ''))
}
</script>

<style scoped>
.fade-slide-enter-active {
  transition: all 0.8s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px); 
}
</style>
