<script setup>

import NavBar from './components/Nav-bar.vue'


</script>

<template>
  <div class="bg-gray-100">
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped>
@media screen and (max-width: 600px) {
  div.example {
    display: none;
  }
}
</style>
