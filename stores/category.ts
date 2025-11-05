export const useCategoryStore = defineStore('category', () => {
    const categoryGroups = [
        {
            title: 'Категория 1',
            items: [
                { label: 'Гробы', value: 'groby', count: 5 },
                { label: 'Урны', value: 'urny', count: 12 }
            ]
        },
        {
            title: 'Категория 2',
            items: [
                { label: 'Тапки', value: 'tapki', count: 2 },
                { label: 'Покрывало', value: 'pokryvalo', count: 1 }
            ]
        }
    ]

    return { categoryGroups }
})