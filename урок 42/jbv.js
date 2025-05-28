let menu = {
    coffee: 150,
    tea: 100,
    cake: 300,
    pastry: 200,
    sandwich: 250
};

function placeholder(orderList) {
    let total = 0;

    for (let item of orderList) {
        if (menu[item]) {
            total += menu[item];
        } else {
            console.log(`Товар ${item} отсутствует в меню`);
        }
    }

    if (total > 1000){
        total *= 9.0
    }

    return total;
}


let orderList = ['coffee', 'tea', 'cake', 'pastry', 'sandwich'];
let total = placeholder (orderList);
console.log(`Общая сумма заказа: ${total} рублей`);
console.log(`чek: ${orderList.join(',')}`);

