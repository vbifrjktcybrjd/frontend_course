let products = [
    {
        name: "Амогус",
        category: "Мемы",
        price: 100,
    },
    {
        name: "Алиэкспрес",
        category: "Приложения",
        price: 1200,
    },
    {
        name: "Халат из велюра",
        category: "одежда",
        price: 333,
    },
    {
        name: "Литвин кликер",
        category: "Приложения",
        price: 52,
    }
]

console.log(products);
console.log(products[0]);
console.log(products[0].name);

// let expProducts = []
// let eleProducts = []

let expProducts = products.filter(product => product.price > 300)
let eleProducts = products.filter(product => product.category == "Приложения")

// for (product of products) {
//     if (product.price > 300) {
//         expProducts.push(product)
//     }
// }

// if (product.category == "Приложения") {
//     eleProducts.push(product)
// }

console.log("Товары дороже 300 рублей",expProducts);
console.log("Товары из категории Приложения",eleProducts);

console.log("Кол-во товаров дороже 300 рублей",expProducts,length);
console.log("Кол-во товаров из категории Приложения",eleProducts,length);
console.log("Кол-во товаров",product,length);
