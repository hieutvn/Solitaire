const board = document.getElementById('game-board');


document.addEventListener('DOMContentLoaded', () => {

    startGame();
}); 


function startGame() {

    createBoard();

}

function createBoard() {

    let cardDeck = createDeck();

    /*
    let card = { suit: undefined, value: undefined };

    let faceDown_deck       = [];
    let faceUp_card         = faceDown_deck[faceDown_deck.length[0]];  
    let finished_deck       = [[], [], [], []]; // 0 = HEART, 1 = CLUB, 2 = DIAMONDS, 3 = SPADES
    */

    let board = [
                    [1, 2, 2, 2, 2, 2, 2],
                    [0, 1, 2, 2, 2, 2, 2],
                    [0, 0, 1, 2, 2, 2, 2],
                    [0, 0, 0, 1, 2, 2, 2],
                    [0, 0, 0, 0, 1, 2, 2],
                    [0, 0, 0, 0, 0, 1, 2],
                    [0, 0, 0, 0, 0, 0, 1]

                    // 0 = NO CARD, 1 = FACE UP, 2 = FACE DOWN
    ];

    const newBoard = fillBoard(board, cardDeck)

}

function fillBoard(board,cardDeck) {

    let index = 0;
    for (let row = 0; row < board.length; row++) {

        for (let column = 0; column < board[row].length; column++) {

            //console.log("Row " + row, "Column " + column, board[row][column]);

            if (board[row][column] === 1 || board[row][column] === 2) {

                board[row][column] = cardDeck[index];
                cardDeck[index] = undefined;
                index++;
            }
        }
    }


    return board;
}

function drawCard(faceDown_deck, faceUp_card) {


}


function createDeck() {

    const tiers         = ["Ace" ,"King", "Queen", "Jack"];
    const numbers       = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    const suits         = ["Heart", "Clubs", "Diamonds", "Spades"];
    
    //let cardDeck        = new Array(52);
    let cardDeck = [];
    
    // ADDING CARDS
    for (let suit in suits) {

        for (let i = 2; i <= 10; i++) {
            
            let card = { suit: undefined, value: undefined };
           
            card.suit = suits[suit];
            card.value = i;

            cardDeck.push(card)
            
        }
    }

    for (let suit in suits) {

        for (let tier in tiers) {
            
            let card = { suit: undefined, value: undefined };
           
            card.suit = suits[suit];
            card.value = tiers[tier];

            cardDeck.push(card)
            
        }
    }

    // MIX CARDDECK
    const newDeck = mixDeck(cardDeck);
    
    return newDeck;
}


function mixDeck(cardDeck) {


    for (let i = 0; i < cardDeck.length; i++) {
        let randomIndex = Math.floor(Math.random() * 52);

        let temp = cardDeck[i];
        cardDeck[i] = cardDeck[randomIndex];
        cardDeck[randomIndex] = temp;
    }
        
    return cardDeck;
}