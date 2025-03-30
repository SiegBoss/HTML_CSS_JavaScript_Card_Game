// Obtener todas las cartas | Get all the cards
let images = Array.from(document.querySelectorAll('.container-image'));
let flippedCards = [];
let lockBoard = false;

// Mostrar todas las cartas al inicio del juego | 
window.onload = () => {
    showAllCardsTemporarily();
};

// Voltear carta al hacer clic | Flip card on click
function flipImage(cardElement) {
    if (lockBoard || cardElement.classList.contains('is-flipped')) return;

    cardElement.classList.add('is-flipped');
    flippedCards.push(cardElement);

    if (flippedCards.length === 2) {
        lockBoard = true;

        const [card1, card2] = flippedCards;
        const img1 = card1.querySelector('.container-show').src;
        const img2 = card2.querySelector('.container-show').src;

        if (img1 === img2) {
            flippedCards = [];
            lockBoard = false;

            // Verificar si todas están volteadas | Check if all are flipped
            if (document.querySelectorAll('.is-flipped').length === images.length) {
                showWinMessage();
                setTimeout(() => {
                    resetGame();
                }, 2000);
            }
        } else {
            // No coinciden → voltearlas de nuevo | Not matching → flip them back
            setTimeout(() => {
                card1.classList.remove('is-flipped');
                card2.classList.remove('is-flipped');
                flippedCards = [];
                lockBoard = false;
            }, 1000);
        }
    }
}

// Mostrar todas las cartas por 1 segundo | Show all cards for 1 second
function showAllCardsTemporarily() {
    images.forEach(card => card.classList.add('is-flipped'));
    setTimeout(() => {
        images.forEach(card => card.classList.remove('is-flipped'));
    }, 1000);
}

// Mezclar cartas | Shuffle cards
function shuffleImages() {
    // Revolver las cartas aleatoriamente | Shuffle cards randomly
    images = images.sort(() => Math.random() - 0.5);

    // Reinsertar en el DOM | Reinsert in the DOM
    const container = document.querySelector('.main-container');
    images.forEach(card => {
        card.classList.remove('is-flipped');
        container.appendChild(card);
    });

    // Mostrar por 1 segundo después de mezclar | Show for 1 second after shuffling
    setTimeout(() => {
        showAllCardsTemporarily();
    }, 100);

    // Reiniciar estados | Reset states
    flippedCards = [];
    lockBoard = false;
}

// Reiniciar todo el juego (después de ganar) | Reset the game (after winning)
function resetGame() {
    images.forEach(card => card.classList.remove('is-flipped'));
    shuffleImages();
}

//Mensaje de victoria | Win message
function showWinMessage() {
    const winDiv = document.getElementById("win-message");
    winDiv.classList.remove("win-hidden");

    // Ocultar después de 2 segundos | Hide after 2 seconds
    setTimeout(() => {
        winDiv.classList.add("win-hidden");
    }, 2000);
}