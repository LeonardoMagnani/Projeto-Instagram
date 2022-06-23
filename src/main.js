// Elemento HTML da imagem
let phoneImage = document.getElementById('insta-phone');

// Array de diretório das imagens
let imagePath = ['C:/Users/leoma/Desktop/Internet Explorer/Study/Bootcamp Santander/Projeto Instagram/src/img/insta_page_1.png', 'C:/Users/leoma/Desktop/Internet Explorer/Study/Bootcamp Santander/Projeto Instagram/src/img/insta_page_2.png', 'C:/Users/leoma/Desktop/Internet Explorer/Study/Bootcamp Santander/Projeto Instagram/src/img/insta_page_3.png'];

// Setando imagem para não iniciar sem nenhuma
phoneImage.src = imagePath[2];

// Variável global de apoio para função
let imageCounter = 0;

function changePhone () {
    switch (imageCounter) {
        case 0:
            phoneImage.src = imagePath[0];
        break;
        case 1:
            phoneImage.src = imagePath[1];
        break;
        case 2:
            phoneImage.src = imagePath[2];
        break;
    }

    if (imageCounter < 2) {
        imageCounter++;
    } else {
        imageCounter = 0;
    }
}

setInterval (changePhone, 3000);