let students = [
    {
        name: "Алексей",
        age: "18",
        grade: 4,
    },
    {
        name: "Мария",
        age: "17",
        grade: 5,
    },
    {
        name: "Иван",
        age: "18",
        grade: 3,
    },
    {
        name: "София",
        age: "16",
        grade: 2,
    }
]

console.log(students);
console.log(students[0]);
console.log(students[0].name);

let excellentStudents = []
let adultStudents = []

let excellentStudent = students.filter(student => student.grade == 5)
let adultStudent = students.filter(student => student.age > 17)

console.log("Отличники",excellentStudents);
console.log("Совершеннолетние ученики",adultStudents);

console.log("Кол-во совершеннолетних учеников",adultStudents,length);
console.log("Кол-во отличников",excellentStudents,length);
console.log("Кол-во учеников",students,length);