import { defineStore } from 'pinia'

export const useAdsStore = defineStore('ads', () => {
    const ads = ref<any[]>([])
    const categories = ref(['Все товары и услуги', 'Авто', 'Музыка', 'Недвижимость', 'Техника', 'Спорт', 'Другое'])
    const selectedCategory = ref('Все товары и услуги')
    const searchQuery = ref('')
    const loading = ref(false)

    // Реальные товары
    const products = [
        {
            title: 'Hyundai Sonata 2021',
            price: 3285000,
            image: 'https://via.placeholder.com/400x300/1f2937/ffffff?text=Hyundai+Sonata',
            category: 'Авто',
            description: 'Пробег 38 000 км, один владелец, полный комплект документов. Состояние отличное.',
            promoted: true,
            hidden: false
        },
        {
            title: 'Пианино Clavia Nord Stage 3',
            price: 450600,
            image: 'https://via.placeholder.com/400x300/dc2626/ffffff?text=Clavia+Nord',
            category: 'Музыка',
            description: 'Профессиональное сценическое пианино. 88 клавиш, взвешенная механика, 2 ГБ памяти.',
            promoted: false,
            hidden: false
        },
        {
            title: 'Квартира 2-комн., 62 м², Центр',
            price: 12500000,
            image: 'https://via.placeholder.com/400x300/7c3aed/ffffff?text=Квартира+Центр',
            category: 'Недвижимость',
            description: 'Евроремонт, 10 этаж, вид на реку. Метро 5 мин пешком. Все документы готовы.',
            promoted: true,
            hidden: false
        },
        {
            title: 'Барабанная установка Pearl Export',
            price: 89000,
            image: 'https://via.placeholder.com/400x300/16a34a/ffffff?text=Pearl+Export',
            category: 'Музыка',
            description: 'Комплект 5 барабанов + тарелки Zildjian. Состояние нового. Идеально для студии.',
            promoted: false,
            hidden: false
        },
        {
            title: 'Мотоцикл BMW R1250GS 2022',
            price: 2190000,
            image: 'https://via.placeholder.com/400x300/0f766e/ffffff?text=BMW+R1250GS',
            category: 'Авто',
            description: 'Пробег 4 200 км, ABS, круиз-контроль, подогрев ручек. Полный пакет опций.',
            promoted: true,
            hidden: false
        },
        {
            title: 'Монитор Dell UltraSharp 32" 4K',
            price: 89000,
            image: 'https://via.placeholder.com/400x300/1e40af/ffffff?text=Dell+U3223QE',
            category: 'Техника',
            description: 'IPS, 4K, 98% DCI-P3, USB-C 90W, KVM. Для дизайнеров и видеомонтажа.',
            promoted: false,
            hidden: true
        },
        {
            title: 'Вертолёт Robinson R44 (б/у)',
            price: 28500000,
            image: 'https://via.placeholder.com/400x300/991b1b/ffffff?text=R44+Raven',
            category: 'Другое',
            description: 'Налёт 1800 ч, капитальный ремонт 2023. Полный пакет документов. Готов к полётам.',
            promoted: true,
            hidden: false
        },
        {
            title: 'Пылесос Dyson V15 Detect',
            price: 68900,
            image: 'https://via.placeholder.com/400x300/7c2d12/ffffff?text=Dyson+V15',
            category: 'Техника',
            description: 'Лазерная подсветка пыли, авторегулировка мощности, HEPA-фильтр. Новый.',
            promoted: false,
            hidden: false
        },
        {
            title: 'Морковь свежая, 10 кг',
            price: 890,
            image: 'https://via.placeholder.com/400x300/f59e0b/ffffff?text=Морковь+10кг',
            category: 'Другое',
            description: 'Своё хозяйство, без химии. Сорт "Шантане". Доставка по городу бесплатно.',
            promoted: true,
            hidden: false
        }
    ]

    const fetchAds = async () => {
        loading.value = true

        await new Promise(resolve => setTimeout(resolve, 500))

        ads.value = products.map((item, i) => {
            const views = Math.floor(Math.random() * 900) + 100
            const daysAgo = Math.floor(Math.random() * 25) + 1

            return {
                id: i + 1,
                ...item,
                price: item.price.toLocaleString('ru-RU'),
                views,
                daysAgo,
                daysLabel: daysAgo === 1 ? 'день' : daysAgo < 5 ? 'дня' : 'дней',
                date: daysAgo === 0 ? 'Сегодня' : `${daysAgo} ${daysAgo === 1 ? 'день' : daysAgo < 5 ? 'дня' : 'дней'} назад`
            }
        })

        loading.value = false
    }

    const filteredAds = () => {
        let filtered = ads.value 

        if (searchQuery.value) {
            const q = searchQuery.value.toLowerCase()
            filtered = filtered.filter(ad =>
                ad.title.toLowerCase().includes(q) ||
                ad.description.toLowerCase().includes(q) ||
                ad.category.toLowerCase().includes(q)
            )
        }

        if (selectedCategory.value && selectedCategory.value !== 'Все товары и услуги') {
            filtered = filtered.filter(ad => ad.category === selectedCategory.value)
        }

        return filtered.sort((a, b) => (b.promoted ? 1 : 0) - (a.promoted ? 1 : 0))
    }

    return {
        ads,
        categories,
        selectedCategory,
        searchQuery,
        loading,
        fetchAds,
        filteredAds
    }
})