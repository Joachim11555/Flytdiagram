//@ts-check

let btnBox = document.getElementById("box")
let btnCircle = document.getElementById("circle")
let btnArrow = document.getElementById("arrow")

btnBox.addEventListener("click", create)

function create() {
    let btnBox = document.createElement("div");
    btnBox.style.width = "100px";
    btnBox.style.height = "100px";
    btnBox.style.background = "red";
    btnBox.style.color = "white";

document.getElementById("main").appendChild(div);
}