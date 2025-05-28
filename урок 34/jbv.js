let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Mo";
        break;
    case 2:
        dayName = "Tu";
        break;
    case 3:
        dayName = "We";
        break;
    case 4:
        dayName = "Th";
        break;
    case 5:
        dayName = "Fr";
        break;
    case 6:
        dayName = "Sa";
        break;
    case 7:
        dayName = "Su";
        break;
        befault:
        dayName = "In";
}
console.log(dayName);

// Циклы fоr
for (let i = 0; i < 5; i++) {
    console.log("Pезультат чикла for", i); // Output: 0, 1, 2, 3, 4
}
// Циклы while
let j = 0;
while (j < 5) {
    console.log("Pезультат чикла while", j); // Output: 0, 1, 2, 3, 4
    j++;
}

// Циклы do while
// do while выполняет тело цикла хотя бы один раз, даже если условие ложно
let i = 0;

do {
    console.log(i);
    i++;
}
while (i < 5);


let users = [
    {
        name: "Ivan Ivanov",
        status: "active",
        total_sum: 1500
    },
    {
        name: "Petr Petrov",
        status: "blocked",
        total_sum: 300
    },
    {
        name: "Anna Sidorova",
        status: "remote",
        total_sum: 750
    }
];
console.log(users);
console.log(users[0]);
console.log(users[0].name);


let highSpenders = [];
let blockedUsers = [];
let totalUsers = users.length;
for (user in users) {
    if (users[user].total_sum > 1000) {
    }
    highSpenders.push(users[user]);
    if (users[user].status == "blocked" || users[user].status == "remote") {
    }
}
blockedUsers.push(users[user]);
console.log("Пользователи которые потратили больше 1000 рублей:", highSpenders); console.log("зaблокированныеили удаленные:", blockedUsers);
console.log("Total users:", totalUsers);
console.log("Количество пользователей которые потратили больше 1000 рублей:", highSpenders.length);
console.log("Количество заблокированных пользователей:", blockedUsers.length);