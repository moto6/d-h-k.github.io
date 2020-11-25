const body = document.querySelector("body");
//HTML 문서의 바디객체를 변수에 저장해놓음

const IMG_NUMBER = 3;


//입력받은 번호의 이미지를 출력해 주는 함수
function paintImage(imgNumber) {
    const image = new Image();
    // JS에서 제공하는 Image라는 객체를 생성해서 image라는 변수에 저장해놓음
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    
    body.prepend(image);
    //prepend : 앞에 추가

}


function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();