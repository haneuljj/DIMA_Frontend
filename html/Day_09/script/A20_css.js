// 1) 문서의 데이터에 접근하여 읽어오기

document.getElementById('change').addEventListener('click', change);

function change() {
    let song = document.getElementById('song');
    song.style.color = 'white'; // HTML요소.style.css의 속성명 
    song.style.backgroundColor = 'black';
    song.style.fontSize = '1.2em';
};

// 사라졌던 것 나타나게 하기
document.getElementById('view').addEventListener('click', function() {
    let box = document.getElementsByClassName('box')[0];
    box.style.visibility = 'visible';
});

// 1초에 한번씩 색 바꾸기
document.getElementById('changeColor').addEventListener('click', changeColor)

let timer;
function changeColor() {
    let box = document.getElementsByClassName('box')[0];
    box.style.visibility = 'visible';
    timer = setInterval(() => {
        
        box.style.backgroundColor 
        = `rgb(${Math.trunc(Math.random()*256)},${Math.trunc(Math.random()*256)},${Math.trunc(Math.random()*256)})`;
    }, 1000);

};

document.getElementById('stopChangeColor').addEventListener('click', function() {
    clearInterval(timer);
});