let app = new Vue({
    el: "#app",
    data: {
        products: [
            {
                id: 1,
                title: "Product",
                price: "93",
            },
            {
                id: 2,
                title: "Product",
                price: "33",
            },
            {
                id: 3,
                title: "Product",
                price: "230",
            },
            {
                id: 4,
                title: "Product",
                price: "15",
            },
            {
                id: 5,
                title: "Product",
                price: "977",
            },
        ],
        sortParam: "",
        sortOptions: [
            {
                title: "По умолчанию",
                value: "",
            },
            {
                title: "Цена: по возрастанию",
                value: "price:asc",
            },
            {
                title: "Цена: по возрастанию",
                value: "price:desc",
            },
        ],
    },
    methods: {
        sortByPrice() {
            console.log(this.sortParam);
            if (this.sortParam === "price:asc") {
                return this.products.sort(function (a, b) {
                    return a.price - b.price;
                });
            } else if (this.sortParam === "price:desc") {
                return this.products.sort(function (a, b) {
                    return b.price - a.price;
                });
            } else {
                return this.products.sort(function (a, b) {
                    return a.id - b.id;
                });
            }
        },
    },
});
