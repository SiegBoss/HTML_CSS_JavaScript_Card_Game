//Declare variables de las cartas | Declare cards variables
var watermelon  = document.getElementById("container-watermelon");
var watermelon2 = document.getElementById("container-watermelon-2");
var apple       = document.getElementById("container-apple");
var apple2      = document.getElementById("container-apple-2");
var avocado     = document.getElementById("container-avocado");
var avocado2    = document.getElementById("container-avocado-2");
var banana      = document.getElementById("container-banana");
var banana2     = document.getElementById("container-banana-2");

//Declarando las variables de ayuda | Declare help variables
var images = [watermelon, watermelon2, apple, apple2, avocado, avocado2, banana, banana2];
var fruits = [0, 0, 0, 0, 0, 0, 0, 0];
var move = 0;
var x = 0;
var pulse = 0;

//Funcion para voltear las cartas | Function to flip the cards
function flipImage(val) {

    //Si ya se voltearon 2 cartas, no se puede voltear otra | If 2 cards are already flipped, you can't flip another one
    move++;

    if (move > 2) {

        move = 2;

        return;
    }

    //Detecta que carta se volteo | Detect which card was flipped
    if (move <= 2) {

        //Carta Sandia | Watermelon Card
        if (val == "watermelon-disguise" && fruits[0] == 0) {

            watermelon.classList.toggle('is-flipped');
            fruits[0]++;

        }
        else if (val == "watermelon-disguise-2" && fruits[1] == 0) {

            watermelon2.classList.toggle('is-flipped');
            fruits[1]++;

        }

        //Carta Manzana | Apple Card
        if (val == "apple-disguise" && fruits[2] == 0) {

            apple.classList.toggle('is-flipped');
            fruits[2]++;

        }
        else if (val == "apple-disguise-2" && fruits[3] == 0) {

            apple2.classList.toggle('is-flipped');
            fruits[3]++;

        }

        //Carta Aguacate | Avocado Card
        if (val == "avocado-disguise" && fruits[4] == 0) {

            avocado.classList.toggle('is-flipped');
            fruits[4]++;

        }
        else if (val == "avocado-disguise-2" && fruits[5] == 0) {

            avocado2.classList.toggle('is-flipped');
            fruits[5]++;
    
        }

        //Carta Platano | Banana Card
        if (val == "banana-disguise" && fruits[6] == 0) {

            banana.classList.toggle('is-flipped');
            fruits[6]++;

        }
        else if (val == "banana-disguise-2" && fruits[7] == 0) {

            banana2.classList.toggle('is-flipped');
            fruits[7]++;

        }
    }

    //Si se voltearon 2 cartas, se espera 1 segundo para voltearlas de nuevo | If 2 cards are flipped, wait 1 second to flip them back
    setTimeout(function () {

        if (move == 2) {

            x = 0;

            //Si las cartas son iguales, se mantienen volteadas si no, se voltean de nuevo | If the cards are the same, they stay flipped, if not, they flip back
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

    //Si todas las cartas estan volteadas, se reinicia el juego | If all cards are flipped, the game restarts
    if (fruits[0] == 1 && fruits[1] == 1 && fruits[2] == 1 && fruits[3] == 1 && fruits[4] == 1 && fruits[5] == 1 && fruits[6] == 1 && fruits[7] == 1) {

        setTimeout(function () {

            pulse = 0;
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
            pulse = 0;

        }, 1000);
    }
}

//Funcion para revolver las cartas | Function to shuffle the cards
function shuffleImages() {

    let positions = [];

    //Si ya se revolvieron las cartas, no se puede revolver otra vez | If the cards are already shuffled, you can't shuffle them again
    if (pulse == 1) {
        return;
    }

    //Posiciones de las cartas | cards positions
    if (screen.width < 600) {

        positions = [

            { left: "20px",  top: "10px"  },
            { left: "20px",  top: "120px" },
            { left: "20px",  top: "230px" },
            { left: "20px",  top: "340px" },
            { left: "150px", top: "10px"  },
            { left: "150px", top: "120px" },
            { left: "150px", top: "230px" },
            { left: "150px", top: "340px" }

        ];

    } else {

        positions = [

            { left: "20px",  top: "10px"  },
            { left: "160px", top: "10px"  },
            { left: "300px", top: "10px"  },
            { left: "440px", top: "10px"  },
            { left: "20px",  top: "200px" },
            { left: "160px", top: "200px" },
            { left: "300px", top: "200px" },
            { left: "440px", top: "200px" }

        ];
    }

    //Revuelve las posiciones | shuffle positions
    positions.sort(() => Math.random() - 0.5);

    //Asigna las nuevas posiciones | assign new positions
    for (let i = 0; i < 8; i++) {

        images[i].style.left = positions[i].left;
        images[i].style.top = positions[i].top;
        images[i].classList.add("transicion");

    }

    //Voltea las cartas durante 1 segundo | flip the cards for 1 second
    setTimeout(function () {

        watermelon.classList.toggle('is-flipped');
        watermelon2.classList.toggle('is-flipped');
        apple.classList.toggle('is-flipped');
        apple2.classList.toggle('is-flipped');
        avocado.classList.toggle('is-flipped');
        avocado2.classList.toggle('is-flipped');
        banana.classList.toggle('is-flipped');
        banana2.classList.toggle('is-flipped');

    }, 1000);

    //Regresa las cartas a su posicion original | return the cards to their original position
    
    watermelon.classList.toggle('is-flipped');
    watermelon2.classList.toggle('is-flipped');
    apple.classList.toggle('is-flipped');
    apple2.classList.toggle('is-flipped');
    avocado.classList.toggle('is-flipped');
    avocado2.classList.toggle('is-flipped');
    banana.classList.toggle('is-flipped');
    banana2.classList.toggle('is-flipped');

    pulse++;
}