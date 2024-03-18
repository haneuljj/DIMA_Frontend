/* 반복문과 제어문 
    1) 반복문: while, do~while, for문
        - for문의 종류는 3가지
    2) 제어문: if, switch~case문
*/

// 1) for -1
let ary = [1, 2, 3, 4, 5];
for(let i=0; i<ary.length; ++i) {
    console.log(ary[i]);
}

console.log('----------------------------');
// 2) for~in 반복문
// for(변수 in iterable data)
// 값을 뽑아오는 것이 아니라 인덱스를 순회
for(let j in ary) {
    console.log(ary[j]);
}

console.log('----------------------------');
// 3) for~of 반복문
// iterable데이터의 값을 순회해서 뽑아옴 
let city =['서울', '대전', '대구', '부산'];
for(let k of city) {
    console.log(k);
}

console.log('----------------------------');
//(연습) 1~50 사이의 데이터 중 3의 배수 이거나 5의 배수인 경우만 출력하시오
for(let i=1; i<=50; ++i) {
    if(i%3==0 || i%5==0) console.log(i);
}

console.log('----------------------------');
let y = "10";
// let result = parseInt(y); // 10
let result = 10 / y; // 1

console.log(result); // autounboxing

let z = '10a';
let result2 = 10 / z;
console.log(result2); // NaN ==> false처럼 동작함

// Falsy로 평가되는 값
// null, NaN, undefined, 0, -0, 0n, ""
console.log('------ falsy 테스트 ------')
if(null) {
    console.log('실행될까?'); // 실행안됨
}
if(NaN) {
    console.log('실행될까?'); // 실행안됨
}
if("") {
    console.log('실행될까?'); // 실행안됨
}

// [], {}는 true ! 
if([]) {
    console.log('실행될까?'); // 실행됨 --> 참
}
if({}) {
    console.log('실행될까?'); // 실행됨 --> 참
}

// 연산 결과가 infinity인 것도 true !
let temp = 10/0; // 0.0
console.log(temp); // infinity

if(10/0) {
    console.log('실행될까?'); // 실행됨 --> 참
}


// ------------ 출력: alert() /
// ------------ 입력: prompt(), prompt("message"), prompt("message", 초기값)
// (연습) 키보드로부터 숫자를 입력받아 양수이면 "양수"로 아니면 "음수"로 경고창으로 출력하시오
// let data = prompt("숫자를 입력하세요!");

// console.log(isNaN(data)); // 숫자가 아닌 것만 true, 숫자인 건 false

// // 중첩if문
// // 숫자가 아닌 거 입력시 양수,음수 판별 안하도록
// if(!isNaN(data)){
//     if(data >= 0) alert("양수");
//     else alert("음수");
// }

//중첩for문
for(let i=0; i<5; ++i){
    for(let j=0; j<(i+1); ++j) 
        document.write('*');
    document.write('<br>');
}
