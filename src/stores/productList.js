import { defineStore } from "pinia";
import { ref, computed } from 'vue'
import PCard from '../components/p-card.vue'

export const useProductStore = defineStore('useProductStore', () => {
    const products = ref([PCard])
    const input = ref('')

    const list_products = computed(() => products.value)

    const load_products = computed(() => products.value.length > 0)

    const fetch_products = () => {
        products.value = PCard
    }

    const search_products = computed(() => {
        if(input.value.length < 3) return products.value

        return products.value.filter((prd) => {
            if(prd.title.toLowerCase().includes(input.value.toLowerCase()) == false) {
                return false
            } else {
                return prd.title.toLowerCase().includes(input.value.toLowerCase())
            }
        })
    })

    return { products, fetch_products, list_products, load_products, input, search_products }
})