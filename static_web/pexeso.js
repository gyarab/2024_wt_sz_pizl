let karty = [
    { src: 'https://www.pazitka.cz/data_2/4619normal.jpg' },
    { src: 'https://cdn.myshoptet.com/usr/www.dokliberec.cz/user/shop/big/2457_pulka-chleba-pz.jpg?62f376c2' },
    { src: 'https://media.istockphoto.com/id/1445244618/cs/vektor/design-postavy-chleba-chl%C3%A9b-na-b%C3%ADl%C3%A9m-pozad%C3%AD.webp?s=2048x2048&w=is&k=20&c=LMEbKU1qLBTAb0K6unPMIFWPF1DImu-WjPJuIgmjk7M=' },
    { src: 'https://media.istockphoto.com/id/2152496442/cs/vektor/avok%C3%A1dov%C3%BD-toast-roztomil%C3%A1-a-kreslen%C3%A1-postavi%C4%8Dka-se-%C5%A1%C5%A5astn%C3%BDmi-emocemi-j%C3%ADdlo-vektorov%C3%BD-znak.webp?s=2048x2048&w=is&k=20&c=iUQP9vX3PC-Pmuc0Cd5IwR32Eo6OwdNagMwNNrs9sTI=' },
    { src: 'https://media.istockphoto.com/id/1455962852/cs/vektor/kreslen%C3%BD-kraj%C3%ADc-chleba-s-obli%C4%8Dejem.webp?s=2048x2048&w=is&k=20&c=vB3UyvDbVk-zxSu6pRptjKRPvnujRap5dnleS_DNnDE=' },
    { src: 'https://www.receptyonline.cz/wp-content/uploads/2019/05/Bio-kv%C3%A1skov%C3%BD-chl%C3%A9b2.jpg' },
    { src: 'https://media.istockphoto.com/id/1043825406/cs/vektor/roztomil%C3%A9-kreslen%C3%A9-pl%C3%A1tky-chleba.webp?s=2048x2048&w=is&k=20&c=KiIz6Hzqzqor_tWcClLZ1Md034B3QojOblD1tXKSeLQ=' },
    { src: 'https://media.istockphoto.com/id/1645863800/cs/vektor/roztomil%C3%BD-vektor-pe%C4%8Den%C3%BD-chl%C3%A9b-ikona-ilustrace-maskot.webp?s=2048x2048&w=is&k=20&c=x9BPyBhj8tPn6QATx370okMeEFcUJQf4kMn3ecI-1rQ=' }
];

let shuffledCards = karty.concat(karty).sort(() => Math.random() - 0.5);

let flippedCards = [];
let matchedCards = 0;
let canFlip = true;

let el = document.getElementById('pexeso');
el.innerHTML = "";

function createCards(cards) {
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('data-id', index);

        const frontFace = document.createElement('div');
        frontFace.classList.add('front');
        const backFace = document.createElement('div');
        backFace.classList.add('back');
        backFace.innerHTML = '<img src="' + card.src + '" alt="Card Image">';
        cardElement.appendChild(frontFace);
        cardElement.appendChild(backFace);

        el.appendChild(cardElement);

        cardElement.addEventListener('click', flipCard);
    });
}

createCards(shuffledCards);

function resetPexeso() {
    shuffledCards = karty.concat(karty).sort(() => Math.random() - 0.5); // Reshuffle cards
    let el = document.getElementById('pexeso');
    el.innerHTML = "";  // Clear the existing cards
    flippedCards = [];  // Clear the flipped cards

    createCards(shuffledCards);  // Recreate the cards
}

document.getElementById('resetButton').addEventListener('click', resetPexeso);

function flipCard() {
    if (!canFlip) return;
    const clickedCard = this;

    if (flippedCards.length < 2 && !clickedCard.classList.contains('flipped')) {
        clickedCard.classList.add('flipped');
        flippedCards.push(clickedCard);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    canFlip = false;
    const [firstCard, secondCard] = flippedCards;
    const firstCardId = firstCard.getAttribute('data-id');
    const secondCardId = secondCard.getAttribute('data-id');

    if (shuffledCards[firstCardId].src === shuffledCards[secondCardId].src) {
        matchedCards++;
        flippedCards = [];

        if (matchedCards === karty.length) {
            setTimeout(() => alert("Congratulations! You've matched all the cards!"), 500);
        }
        canFlip = true;
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            flippedCards = [];
            canFlip = true;
        }, 1000);
    }
}
