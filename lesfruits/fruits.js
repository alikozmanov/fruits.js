let fruits = [{ name: "Orange", image: "orange.jpg" }, { name: "Kiwi", image: "kiwi.jpg" }, { name: "Banane", image: "banane.jpg" }, { name: "Peche", image: "peche.jpg" }, { name: "Cerise", image: "cerise.jpg" }];

const fruitsHtml = document.querySelector("#fruits");
const imageTochange = document.querySelector('#imageFruit');
let imageSelected = "all-fruits.jpg";

fruits.forEach(fruit => {
    const Fruit = new Fruits(fruit.name, fruit.image);
    fruitsHtml.appendChild(Fruit.getHTML);
   
});

