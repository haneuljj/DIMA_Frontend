// window 객체가 제공해주는 메소드
// alert(), confirm(), prompt()

let btn_01 = document.getElementById('btn_01');
let btn_02 = document.getElementById('btn_02');
let btn_03 = document.getElementById('btn_03');
let result = document.getElementById('result');

btn_01.addEventListener('click', function() {
    alert('경고창 입니다.');
    result.innerHTML = '<span style="color: red">경고창 클릭됨</span>';
    //result.innerText = '<span style="color: red">경고창 클릭됨</span>';
    //태그 해석 안됨, 텍스트만 넣을때 사용
});

btn_02.addEventListener('click', function() {
    let check = confirm('확인창 입니다.');
    //result.innerHTML = check;
    // 확인 누르면 true, 취소 누르면 false
    if(check)
        result.innerHTML = '<span style="color: blue">확인 클릭됨</span>';
    else
        result.innerHTML = '<span style="color: blue">취소 클릭됨</span>';
});

btn_03.addEventListener('click', function() {
    let data = prompt('이름을 입력하세요.');

    result.innerHTML = `<span>당신의 이름은 <span style="background-color:yellow">${data}</span></span>`;
    
});


// 새창열기
let btn_04 = document.getElementById('btn_04');
btn_04.addEventListener('click', function() {
    // (열려고하는 창의 url, 새롭게 열린창의 이름, 새 창의 옵션(브라우저에 따라 안될 수 있음))
    window.open('./gongji.html', 'win', 'height=600px, left=100px, width=400px, menubar=no')
});

