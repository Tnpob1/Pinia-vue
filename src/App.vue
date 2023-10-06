<script setup>
import NavBar from './components/Nav-bar.vue'
import Cards from './components/Cafe-card.vue'
</script>

<template>
  <div class="bg-gray-100">
    <NavBar />
    <Cards />
    <RouterView />
  </div>
</template>

<style scoped></style>
