////
////        CARD IMAGES
////

class CardImage {

    constructor() {


    }


}

async function fetchData() {

    const data = await fetch('playingCards.json');
    const response = await data.json();

    return response;
}

async function createImage() {

    let data = await fetchData();

    let fetchedCardsImg = {

        hearts      : [],
        clubs       : [],
        diamonds    : [],
        spades      : [],
        back        : []
    }

    for (let image in data) {

        Object.keys(data[image]).forEach((val) => {

            const imageObj = { key: undefined, image: undefined, imageSrc: undefined };
            const im = new Image();
            im.src = data[image][val];

            if (data[image][val].includes(image) && fetchedCardsImg.hasOwnProperty(image)) {

                imageObj.key        = image.concat("-" + val);
                imageObj.image      = im;
                imageObj.imageSrc   = im.src;
                fetchedCardsImg[image].push(imageObj);
            }

        });    
    }
    return fetchedCardsImg;
}

//const board = document.getElementById('game-board');

async function renderCard() {

    //cardImages.hearts[0].key
    
    const cardImages = await createImage()
    const cardSizes = { width: 140, height: 210 };

    try {

        /*
        const img = document.createElement('img');
        img.width = cardSizes.width;
        img.height = cardSizes.height;
        img.src = cardImages.hearts[0].imageSrc;
        document.getElementById('game-board').appendChild(img)
        */

        for (let card in cardImages) {

            const img = document.createElement('img');
            img.width = cardSizes.width;
            img.height = cardSizes.height;
            //img.src =
            
            Object.keys(card).forEach((val) => {

                console.log(cardImages[card][val].key)

                ////// TBD!!
            })
        }
    }
    catch (error) {

        console.error(error)
    }


}

renderCard();
