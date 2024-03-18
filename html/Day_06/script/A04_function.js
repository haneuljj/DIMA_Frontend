/* 
    함수의 정의 (선언적 함수)

    function 함수명(파라미터 선언부) {
        실행문;
        [return 반환값]; 
    }
*/

// JS Hoisting: 정의부를 실행문보다 위로 올리는 것
// 코드의 순서가 달라고 자바 스크립트 해석기는 정의문을 실행문보다 위로 올려서 실행함

// 1) 함수의 정의 (선언적 함수)
function add(a,b) {
    let result = a + b;
    return result;
}

// 함수의 실행
let c = add(10,20);
console.log(c);


// 2) 함수의 정의(표현적 함수): JS의 함수는 literal이르모 변수에 넣거나 반환할 수 있음을 전제로 만들어짐
let func = function() {
    console.log("표현함수");
}; // 표현식!
// 익명함수-> 한 번 호출하고 여러 번 호출할 필요가 없을 때

func(); // 익명함수 호출방법
// 선언 함수처럼 호출을 표현함수 정의 전에 호출 시, 호출불가
// 표현함수의 정의는 선언이 아니므로 호이스팅이 안됨

function subtract(a,b) {
    return a - b;
}

// 파라미터x가 받는 값은 함수!
function myfunction(x) {
    console.log('x의 타입은? ' + typeof x);
    let result = x(1, 2);
    console.log('myfunction 결과: ' + result);
}

myfunction(subtract);

/* setInterval() */
// setInterval(function() {
//     console.log('a')
// }, 1000); // (함수, 지속 시간), 1초마다 함수 실행; 지속시간이 다 될때까지


//--- Clock 처리
let clock = document.getElementById('clock'); // target
let start = document.getElementById('start'); // 이벤트가 실행될 버튼 (Event Source)
let stop = document.getElementById('stop');  // 이벤트가 실행될 버튼

//--- 시스템 시간 얻어온 후 HTML 문서에 출력
function makeHour() {
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let second = now.getSeconds();

    let data = `${hour} : ${min} : ${second} `;

    clock.innerHTML = data;
}
makeHour();

let timer = '';

start.addEventListener('click', function() {
    timer = setInterval(function() {
        makeHour();
    }, 1000);
}); // (이벤트, 이벤트 실행되면 해야할 일)

stop.addEventListener('click', function() {
    clearInterval(timer); // setInterval 멈추기
});



