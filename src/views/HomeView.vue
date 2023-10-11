<script setup>
import { RouterView } from 'vue-router'
import Cards from '../components/p-card.vue'
import { useCartStore } from '../stores/Cart.js'

import { onMounted } from 'vue'
const cart_store = useCartStore()

onMounted(() => cart_store.IntoLocal())

</script>

<template>
  <Cards />
  <RouterView />
</template>

<style scoped>

</style>
