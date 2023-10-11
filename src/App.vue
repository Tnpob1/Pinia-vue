<script setup>
import { useCartStore } from './stores/Cart.js'

import { onMounted } from 'vue'

import NavBar from './components/Nav-bar.vue'
const cart_store = useCartStore()

onMounted(() => cart_store.IntoLocal())

</script>

<template>
  <div class="bg-gray-100">
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped></style>
