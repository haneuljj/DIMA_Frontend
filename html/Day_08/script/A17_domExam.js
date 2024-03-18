let images = ['../images/smile1.png', '../images/smile2.png', '../images/smile3.png',
                '../images/smile4.png', '../images/smile5.png', '../images/smile6.png'];

let eventSource = document.getElementsByTagName('span')[0];
let eventTarget = document.getElementsByTagName('img')[0];

let i=1; // img 배열의 인덱스
let timer;
eventSource.addEventListener('mouseenter',function() {
    timer = setInterval(() => {
        let myImg = images[i++]; // i++, 
        eventTarget.setAttribute('src', myImg);
        if(i>5) i=0;
    }, 500);
});
eventSource.addEventListener('mouseleave', function() {
    clearInterval(timer);
});