let afterend = document.getElementById('afterend');
let afterbegin = document.getElementById('afterbegin');
let beforeend = document.getElementById('beforeend');
let beforebegin = document.getElementById('beforebegin');

let list = document.getElementById('list');
let data = '<li>콩나물 국밥</li>';

afterend.addEventListener('click', afterendFunc);
afterbegin.addEventListener('click', afterbeginFunc);
beforeend.addEventListener('click', beforeendFunc);
beforebegin.addEventListener('click', beforebeginFunc);

function afterendFunc() {
    // list.innerHTML = data; // 기존의 데이터를 날리고 넣음
    list.insertAdjacentHTML('afterend', data); // 기존 ul태그 밖에 붙는다, 타겟점 끝에 붙음
};

function afterbeginFunc() {
    list.insertAdjacentHTML('afterbegin', data);
};

function beforeendFunc() {
    list.insertAdjacentHTML('beforeend', data);
};

function beforebeginFunc() {
    list.insertAdjacentHTML('beforebegin', data);
};
