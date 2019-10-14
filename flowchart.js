//@ts-check

let btnBox = document.getElementById("box")
let btnCircle = document.getElementById("circle")
let btnArrow = document.getElementById("arrow")

btnBox.addEventListener("click", create)

function create() {
    let div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "grey";
    div.style.color = "white";

document.getElementById("main").appendChild(div);
}