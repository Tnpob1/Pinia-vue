import { defineStore } from 'pinia';

import {ref} from 'vue'

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

export const useCartStore = defineStore('useCartStore',()=>{
    const cart = ref([])

    const add_cart = (id, price, amout = 1) =>{
        const data = {
            id,
            price,
            amout
        }

        const findID = cart.value.find(e => e.id === data.id)

        if(findID){
            alert_add_cart_fail()
        }else{
            cart.value.push(data)
            
            alert_add_cart()
            IntoLocal()
            
        }

        console.log(cart.value)
    }
    const IntoLocal = () =>{
        CartLocal.setItem('cart', JSON.stringify(cart.value))
    }

    const CartLocal = () => {
        if(CartLocal.getItem('cart')){
            cart.value = JSON.parse (CartLocal.getItem('cart'))
        }
    }

    const alert_add_cart = () =>{
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Add To Cart Complete',
            showConfirmButton: false,
            timer: 1500
          })
    }
    const alert_add_cart_fail = () =>{
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'You Already Add To Cart',
            showConfirmButton: false,
            timer: 1500
          })
    }

    return {add_cart, IntoLocal}
})