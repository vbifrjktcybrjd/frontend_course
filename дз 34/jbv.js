const products = [
    { name: "Laptop", category: "electronics", price: 1000 },
    { name: "T-Shirt", category: "clothes", price: 300 },
    { name: "Book", category: "books", price: 150 },
    { name: "Smartphone", category: "electronics", price: 800 },
    { name: "Jeans", category: "clothes", price: 600 },
    { name: "Headphones", category: "electronics", price: 200 },
];

console.log("Весь массив products:", products);
console.log("Первый элемент массива:", products[0]);
console.log("Название первого товара:", products[0].name);

const expensiveProducts = [];
const electronicsProducts = [];

for (const index in products) {
    const product = products[index];

    if (product.price > 500) {
        expensiveProducts.push(product);
    }

    if (product.category === "electronics") {
        electronicsProducts.push(product);
    }
}

console.log("Товары дороже 500 рублей:", expensiveProducts);
console.log("Товары из категории 'electronics':", electronicsProducts);
console.log("Общее количество товаров:", products.length);
console.log("Количество товаров дороже 500 рублей:", expensiveProducts.length);
console.log("Количество товаров из категории 'electronics':", electronicsProducts.length);