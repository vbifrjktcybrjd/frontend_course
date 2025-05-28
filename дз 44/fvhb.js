
function handleClick() {
    alert("Добро пожаловать!")
}

const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

red.addEventListener('click', function () {
    document.body.style.backgroundColor = 'red';
    document.body.style.color = 'white';
})
green.addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'white';
})
blue.addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'white';
})