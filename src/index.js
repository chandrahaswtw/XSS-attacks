var errorProne = document.getElementById("errorProne");
var errorFree = document.getElementById("errorFree");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

var ul = document.querySelector("ul");

window.add1  = (e) => {
    e.preventDefault();
    var x = document.createElement("li");
    x.innerHTML = `<img src=${errorProne.value}>`
    ul.appendChild(x);
}

window.add2 = (e) => {
    e.preventDefault();
    var x = document.createElement("li");
    var y = document.createElement("img");
    y.setAttribute("src", errorFree.value);
    x.appendChild(y);
    ul.appendChild(x);
}

