let target = document.getElementById('target');
let content = document.getElementById('content');

// content html 객체의 클래스 목록 가져오기
document.getElementById('get').addEventListener('click', function() {
    let data = '';
    data = content.classList;
    output(data); // classList의 value값 출력됨
    console.log(data); //DOMTokenList(2) ['red', 'visible', value: 'red visible'] ; 순회가능한 배열, value값
});

// add(): 클래스 추가, 기존에 클래스가 존재해야함, 한개 이상 추가 가능
document.getElementById('add').addEventListener('click', function() {
    content.classList.add('info', 'blue');
});

// remove(): 클래스 삭제, 한개 이상 삭제 가능
document.getElementById('remove').addEventListener('click', function() {
    content.classList.remove('info');
});

// replace(): 클래스 교체, 교체할 대상이 존재해야함
document.getElementById('replace').addEventListener('click', function() {
    content.classList.replace('red', 'green');
});

// contains(): class존재 여부 확인, true/false 반환
document.getElementById('contains').addEventListener('click', function() {
    let result = content.classList.contains('danger');
    output(result);
});

// toggle(): 클릭하면 생기고 또 클릭하면 사라짐
document.getElementById('toggle').addEventListener('click', function() {
    content.classList.toggle('visible');
});


function output(data) {
    target.innerHTML = data;
};
