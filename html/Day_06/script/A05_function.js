// 함수의 정의: 나머지 연산자를 이용
// 1) 함수 내부에서 arguments라는 배열 객체를 이용하여 정확한 인자의 개수를 전달받도록 제어 가능
// 2) 매개변수 위치에서 ... 연산자를 이용해서 배열의 형태로 모두 전달 받기 가능
function add1(a, b) {
    // console.log('인자의 개수: ' + arguments.length); // arguments; 배열 객체
    if(arguments.length != 2) return 0; // exception 처리하는 게 바람직 
    return a + b;
}

let result = add1(10, 11);
console.log(result);

result = add1(10);
console.log(result); // NaN; 전달되지 않은 b에 undefined값이 들어감, 10 + undefined ==> NaN

console.log(add1(1,2,3,4,5));

console.log('------------------');
function add2(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c); // [3, 4, 5], 배열
    return a + b;
}

add2(1, 2, 3, 4, 5);

// ...이 스프레드 연산자로 사용됐을 때 
// let x, y, z = ...[1, 2, 3];
console.log(...[1, 2, 3]); // 1, 2, 3 각각 분리

console.log('------------------');
// --- 함수 반환하기
function temp() {
    return function() {
        console.log(2 * 3);
    } // 함수를 리턴
}

let x = temp();
x();

temp()(); // 반환되는 함수를 받아서 실행

console.log(typeof x); // function

// --- 함수 반환하기 -2
function temp2(a, b) {
    let result = a * b; // result: 지역변수
    console.log(result);
    return function() {
        return result; // 지역변수 반환
    }
}

console.log(temp2(5, 7)()); // 함수를 반환하면 지역변수를 반환가능, 자바스크립트의 클로저