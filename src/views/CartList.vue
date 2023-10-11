<template>
  <div class="p-4 max-w-xl mx-auto mt-16 h-max">
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="flex items-center justify-between px-4 py-3 bg-gray-200">
        <h1 class="text-lg font-bold">Shopping Cart</h1>
      </div>
      <div class="p-4">
        <!-- วนลูปแสดงสินค้าในรถเข็น -->
        <div v-for="(product, index) in cart" :key="index" class="flex items-center mb-4">
          <img
            class="h-16 w-16 object-contain rounded-lg mr-4"
            :src="product.img"
            :alt="product.title"
          />
          <div class="flex-1">
            <h2 class="text-lg font-bold">{{ product.name }}</h2>
            <span class="text-gray-600">{{ product.price }}</span>
          </div>
          <button @click="removeFromCart(index)" class="text-gray-600 hover:text-red-500">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M19 13H5v-2h14v2z" />
            </svg>
          </button>
        </div>
        <div class="px-4 py-3 bg-gray-200">
          <div class="flex justify-between items-center">
            <span class="font-bold text-lg">Total:</span>
            <span class="font-bold text-lg"></span>
          </div>
          <button
            class="block w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      cart: [],
    };
  },
  created() {
    const cartData = localStorage.getItem('cart');
    
    if (cartData) {
      this.cart = JSON.parse(cartData);
    }
  },
  methods: {
    addToCart(product) {
      this.cart.push(product)
      this.saveCart()
    },
    removeFromCart(index) {
      this.cart.splice(index, 1)
      this.saveCart()
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
  }
}
</script>
