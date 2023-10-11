<script setup>
const PCard = [
  {
    id: '1',
    name: 'Boston Fern',
    img: 'https://hips.hearstapps.com/hmg-prod/images/boston-fern-6in-pdp-01-1200x-6488ad58cc341.jpeg?crop=1xw:1xh;center,top&resize=980:*',
    price: '39',
    amout: ''
  },
  {
    id: '2',
    name: 'Hoya Carnosa',
    img: 'https://hips.hearstapps.com/hmg-prod/images/screenshot-2023-06-13-at-1-52-12-pm-6488ad58e6ee6.png?crop=1xw:1xh;center,top&resize=980:*',
    price: '68',
    amout: ''
  },
  {
    id: '3',
    name: 'Olive Tree',
    img: 'https://hips.hearstapps.com/hmg-prod/images/screenshot-2023-06-13-at-1-52-33-pm-6488ad58e5c82.png?crop=1xw:1xh;center,top&resize=980:*',
    price: '74',
    amout: ''
  },
  {
    id: '4',
    name: 'Pothos',
    img: 'https://hips.hearstapps.com/hmg-prod/images/pothos-indoor-plant-1662666398.png?crop=0.719xw:0.894xh;0.105xw,0.106xh&resize=980:*',
    price: '49',
    amout: ''
  },
  {
    id: '5',
    name: 'Succulents',
    img: 'https://hips.hearstapps.com/hmg-prod/images/44396406-095-b-1635270433.jpg?crop=1xw:1xh;center,top&resize=980:*',
    price: '20',
    amout: ''
  },
  {
    id: '6',
    name: 'ZZ Plant',
    img: 'https://hips.hearstapps.com/hmg-prod/images/concept-of-home-gardening-zamioculcas-in-flowerpot-royalty-free-image-1580854121.jpg?crop=0.833xw:0.833xh;0.107xw,0.167xh&resize=980:*',
    price: '23',
    amout: ''
  },
  {
    id: '7',
    name: 'Juniper Bonsai',
    img: 'https://hips.hearstapps.com/hmg-prod/images/bonsai-1635270151.jpg?crop=0.733xw:1.00xh;0.165xw,0&resize=980:*',
    price: '29',
    amout: ''
  },
  {
    id: '8',
    name: 'Pilea',
    img: 'https://hips.hearstapps.com/hbu.h-cdn.co/assets/17/27/1499286008-chinese-money-plant.jpg?crop=1.0xw:1xh;center,top&resize=980:*',
    price: '16',
    amout: ''
  },
  {
    id: '9',
    name: 'Snake Plant',
    img: 'https://hips.hearstapps.com/hbu.h-cdn.co/assets/15/30/1437667747-snake-plant.jpg?crop=0.9277777777777777xw:1xh;center,top&resize=980:*',
    price: '30',
    amout: ''
  },
  {
    id: '10',
    name: 'Air Plant',
    img: 'https://hips.hearstapps.com/hmg-prod/images/tillandsia-air-plant-royalty-free-image-931339332-1553272896.jpg?crop=0.889xw:1.00xh;0.111xw,0&resize=980:*',
    price: '17',
    amout: ''
  },
  {
    id: '11',
    name: 'Asparagus Fern',
    img: 'https://hips.hearstapps.com/hmg-prod/images/beautiful-asparagus-fern-plant-in-a-basket-royalty-free-image-972247932-1553271995.jpg?crop=0.779xw:0.771xh;0.221xw,0.229xh&resize=980:*',
    price: '20',
    amout: ''
  },
  {
    id: '12',
    name: 'Aloe Plant',
    img: 'https://hips.hearstapps.com/hmg-prod/images/close-up-of-aloe-vera-plant-against-wall-royalty-free-image-746098999-1553269788.jpg?crop=1xw:0.99953xh;center,top&resize=980:*',
    price: '21',
    amout: ''
  }
]

import { useCartStore } from '../stores/Cart.js'


const cart_store = useCartStore();




</script>

<template>
  <div class="min-h-screen flex flex-wrap justify-center gap-6 p-10">
    <div
      v-for="(item, index) in PCard"
      :key="index"
      class="gap-6 container mx-auto p-5 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
    >
      <img class="rounded-xl w-full h-72 object-cover" :src="item.img" alt="" />
      <div class="flex justify-between items-center">
        <div>
          <h1 class="mt-5 text-2xl font-semibold">{{ item.name }}</h1>
          <p class="mt-2">price : ${{ item.price }}</p>
        </div>
        <div>
          <button
            @click="cart_store.add_cart(item.id,item.price)"
            class="text-white text-md font-semibold bg-green-400 py-2 px-3 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
