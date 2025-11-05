import { 
    Home, Users, PlusCircle, MessageCircle, User, LayoutGrid, ShoppingBag,
    CheckCircle, Star, ChevronDown, MapPin, Menu, 
    X, Search, Heart, Eye, Truck 
} from 'lucide-vue-next'

export default defineNuxtPlugin((nuxtApp) => {
    const icons = { 
        Home, Users, PlusCircle, MessageCircle, User, LayoutGrid, ShoppingBag,
        CheckCircle, Star, ChevronDown, MapPin, Menu, 
        X, Search, Heart, Eye, Truck 
    }
    Object.entries(icons).forEach(([name, component]) => {
        nuxtApp.vueApp.component(name, component)
    })
})