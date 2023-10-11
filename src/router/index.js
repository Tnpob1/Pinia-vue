 import { createRouter, createWebHistory } from 'vue-router'

 import HomeView from '../views/HomeView.vue'
 import CartList from '../views/CartList.vue'

 const routes = [
   {
     path: '/',
     name: 'Home',
     component : HomeView
   },
   {
    path: '/cart',
    name: 'Cart',
    component : CartList
  }
 ];

 const router = createRouter({
   history: createWebHistory(),
   routes,
 });

 export default router;