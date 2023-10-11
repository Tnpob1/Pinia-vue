<template>
    <div class="min-h-screen flex flex-wrap justify-center gap-6 p-10">
      <div
        v-for="(item, index) in cart"
        :key="index"
        class="gap-6 container mx-auto p-5 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl transition duration-300"
      >
        <img class="rounded-xl w-full h-72 object-cover" :src="item.img" alt="" />
        <div class="flex justify-between items-center">
          <div>
            <h1 class="mt-5 text-2xl font-semibold">{{ item.name }}</h1>
            <p class="mt-2">Price: ${{ item.price }}</p>
            <p class="mt-2">Amount: {{ item.amount }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const { cart } = defineProps(['cart']);
  </script>