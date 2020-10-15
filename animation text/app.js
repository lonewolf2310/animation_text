const text = document.querySelector('.color');
const strTxt = text.textContent;
const splitText = strTxt.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++){
    text.innerHTML += "<span class='black'>" + splitText[i] + "</span>"
}

let char = 0;
let timer = setInterval(colorAni, 50);

function colorAni() {
    const span = text.querySelectorAll('span')[char];
    span.classList.remove('black');
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
        finish();
        char = 0;
        timer = setInterval(colorAni2,50);
    }
}

function colorAni2() {
    const span = text.querySelectorAll('span')[char];
    span.classList.remove('fade');
    span.classList.add('black');
    char++;
    if (char === splitText.length) {
        finish();
        char = 0;
        timer = setInterval(colorAni, 50);
        return;
    } 
}
function finish(){
    clearInterval(timer);
    timer = null;
}