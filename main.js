const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ],
            sizes: [
                { id: 3334, label: 'xs' },
                { id: 3335, label: 's' },
                { id: 3336, label: 'm' },
                { id: 3337, label: 'l' },
                { id: 3338, label: 'xl' }
            ]
        }
    }
})
