var watermelon = document.getElementById("container__div-watermelon");
var watermelon2 = document.getElementById("container__div-watermelon-2");
var apple = document.getElementById("container__div-apple");
var apple2 = document.getElementById("container__div-apple-2");
var avocado = document.getElementById("container__div-avocado");
var avocado2 = document.getElementById("container__div-avocado-2");
var banana = document.getElementById("container__div-banana");
var banana2 = document.getElementById("container__div-banana-2");

let images = [watermelon, watermelon2, apple, apple2, avocado, avocado2, banana, banana2];


function flipImage(val) {
    

    let i = 0;

    if (val == "watermelon_disguise") {
        watermelon.toggle('is-flipped');
    }
    else if (val == "watermelon_disguise_2") {
        watermelon2.toggle('is-flipped');
    }
    
    if(val == "apple_disguise"){
        apple.classList.toggle('is-flipped');
    }
    else if(val == "apple_disguise_2"){
        apple2.classList.toggle('is-flipped');
    }
    
    if(val == "avocado_disguise"){
        avocado.classList.toggle('is-flipped');
    }
    else if(val == "avocado_disguise_2"){
        avocado2.classList.toggle('is-flipped');
    }

    if(val == "banana_disguise"){
        banana.classList.toggle('is-flipped');
    }
    else if(val == "banana_disguise_2"){
        banana2.classList.toggle('is-flipped');
    }
    
}

    

function shuffleImages() {
    
    let positions = [
        {left: "140px", top: "100px"},
        {left: "240px", top: "100px"},
        {left: "340px", top: "100px"},
        {left: "440px", top: "100px"},
        {left: "140px", top: "250px"},
        {left: "240px", top: "250px"},
        {left: "340px", top: "250px"},
        {left: "440px", top: "250px"}
    ];

    positions.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 8; i++) {
        images[i].style.left = positions[i].left;
        images[i].style.top = positions[i].top;
        images[i].classList.add("transicion");
    }
}