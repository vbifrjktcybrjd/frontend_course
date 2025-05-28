
let myButton = document.getElementById("myButton");
myButton.addEventListener("click", function () {
    alert("Спасибо что нажали");
});

function handleClick() {
    alert("Спасибо огромное")
}


myButton2.addEventListener("click", function () {
    alert("Спасибо что нажали ещё раз");
});



const lightButton = document.getElementById("light");
const blackButton = document.getElementById("black");
lightButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
})
blackButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
})
