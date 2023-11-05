var watermelon = document.getElementById("container__div-watermelon");
var watermelon2 = document.getElementById("container__div-watermelon-2");
var apple = document.getElementById("container__div-apple");
var apple2 = document.getElementById("container__div-apple-2");
var avocado = document.getElementById("container__div-avocado");
var avocado2 = document.getElementById("container__div-avocado-2");
var banana = document.getElementById("container__div-banana");
var banana2 = document.getElementById("container__div-banana-2");

var images = [watermelon, watermelon2, apple, apple2, avocado, avocado2, banana, banana2];
var fruits = [0, 0, 0, 0, 0, 0, 0, 0];
var move = 0;
var x = 0;

function flipImage(val) {

    move++;

    if (move > 2) {
        move = 2;
        return;
    }

    if (move <= 2) {

        if (val == "watermelon_disguise" && fruits[0] == 0) {
            watermelon.classList.toggle('is-flipped');
            fruits[0]++;


        }
        else if (val == "watermelon_disguise_2" && fruits[1] == 0) {
            watermelon2.classList.toggle('is-flipped');
            fruits[1]++;


        }

        if (val == "apple_disguise" && fruits[2] == 0) {
            apple.classList.toggle('is-flipped');
            fruits[2]++;


        }
        else if (val == "apple_disguise_2" && fruits[3] == 0) {
            apple2.classList.toggle('is-flipped');
            fruits[3]++;


        }

        if (val == "avocado_disguise" && fruits[4] == 0) {
            avocado.classList.toggle('is-flipped');
            fruits[4]++;

        }
        else if (val == "avocado_disguise_2" && fruits[5] == 0) {
            avocado2.classList.toggle('is-flipped');
            fruits[5]++;


        }

        if (val == "banana_disguise" && fruits[6] == 0) {
            banana.classList.toggle('is-flipped');
            fruits[6]++;


        }
        else if (val == "banana_disguise_2" && fruits[7] == 0) {
            banana2.classList.toggle('is-flipped');
            fruits[7]++;

        }
    }

    setTimeout(function () {
        if (move == 2) {

            x = 0;

            while (x < 8) {

                if (fruits[x] == 1 && fruits[x + 1] == 1) {
                    x += 2;
                    continue;
                }
                else if (fruits[x] == 1 && fruits[x + 1] == 0) {
                    fruits[x] = 0;
                    images[x].classList.toggle('is-flipped');
                }
                else if (fruits[x] == 0 && fruits[x + 1] == 1) {
                    fruits[x + 1] = 0;
                    images[x + 1].classList.toggle('is-flipped');
                }

                x += 2;

            }

            move = 0;

        }

    }, 1000);

    if (fruits[0] == 1 && fruits[1] == 1 && fruits[2] == 1 && fruits[3] == 1 && fruits[4] == 1 && fruits[5] == 1 && fruits[6] == 1 && fruits[7] == 1) {
        setTimeout(function () {
            alert("You win!");
            shuffleImages();
            fruits = [0, 0, 0, 0, 0, 0, 0, 0];
            watermelon.classList.toggle('is-flipped');
            watermelon2.classList.toggle('is-flipped');
            apple.classList.toggle('is-flipped');
            apple2.classList.toggle('is-flipped');
            avocado.classList.toggle('is-flipped');
            avocado2.classList.toggle('is-flipped');
            banana.classList.toggle('is-flipped');
            banana2.classList.toggle('is-flipped');

        }, 2000);
    }
}

function shuffleImages() {

    let positions = [
        { left: "140px", top: "100px" },
        { left: "240px", top: "100px" },
        { left: "340px", top: "100px" },
        { left: "440px", top: "100px" },
        { left: "140px", top: "250px" },
        { left: "240px", top: "250px" },
        { left: "340px", top: "250px" },
        { left: "440px", top: "250px" }
    ];

    positions.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 8; i++) {
        images[i].style.left = positions[i].left;
        images[i].style.top = positions[i].top;
        images[i].classList.add("transicion");
    }

}