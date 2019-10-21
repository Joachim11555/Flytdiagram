//@ts-check

function setup() {

let divMain = document.getElementById("main")
let btnBox = document.getElementById("box")
let btnCircle = document.getElementById("circle")
let btnArrow = document.getElementById("arrow")

btnBox.addEventListener("click", create)

let box = [];

divMain.appendChild(btnBox);
box.push(btnBox);

function create() {
    let btnBox = document.createElement("div");
    btnBox.style.width = "100px";
    btnBox.style.height = "100px";
    btnBox.style.background = "red";
    btnBox.style.color = "white";
}

class Figur {
    div;
    x;
    y;
    w;
    h;
    tekst;
    type;
    constructor(div, x, y, w, h, tekst, type){
       this.div = div;
       this.x = 0;
       this.y = 0;
       this.w = 100;
       this.h = 100;
       this.tekst.innerHTML = "insert text";
       this.div.className = type;
    
    render() {
        let s = this.div.style;
        s.top = this.y + "px";
        s.left = this.x + "px";
        s.height = this.h + "px";
        s.width = this.w + "px";
    }

}
}

function create() {
    let btnBox = document.createElement("div");
    
}

function create() {
    let btnBox = document.createElement("div");
    
}

}