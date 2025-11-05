// stores/agents.ts
import { defineStore } from 'pinia'

export const useAgentsStore = defineStore('agents', () => {
    const agents = ref([
        {
            id: 1,
            name: 'Дмитрий Хитрый',
            avatar: '',
            verified: true,
            rating: 4.3,
            reviews: 19,
            description: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текс...'
        },
        {
            id: 2,
            name: 'Апполинарий Землеперекопский',
            avatar: '',
            verified: true,
            rating: 4.3,
            reviews: 0,
            description: 'Помог справиться с потерей и организовать похороны для 126 семей.'
        },
        {
            id: 3,
            name: 'Фёдор Сумкин',
            avatar: '',
            verified: false,
            rating: 4.3,
            reviews: 19,
            description: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания...'
        },
        {
            id: 4,
            name: 'Василий Копущин',
            avatar: '',
            verified: true,
            rating: 4.3,
            reviews: 19,
            description: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания...'
        },
        {
            id: 5,
            name: 'Феофан Кусакин',
            avatar: '',
            verified: false,
            rating: 4.3,
            reviews: 19,
            description: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания...'
        },
        {
            id: 6,
            name: 'Василиса Землеперекопская',
            avatar: '',
            verified: true,
            rating: 4.3,
            reviews: 19,
            description: 'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания...'
        }
    ])

    const loading = ref(false)

    return { agents, loading }
})