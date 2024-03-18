/* 
    자바 스크립트 연산자
    
    1)산술연산자: + - * / % **
    2)증감연산자: ++ --
    3)관계연산자: == (===) != (!==) >  <  >=  <=
    4)논리연산자: &&  ||  !(단항)
    5)삼항연산자: 조건연산자, (조건식) ? 참 : 거짓  ==> 참, 거짓 위치에 실행문 넣을 수 있음
    6)typeof : 단항연산자, 오른쪽의 데이터(변수)의 타입을 알려줌
    7)비트연산자: >>  <<  ~(1의 보수)
    8)대입연산자: LV = RV
    9)복합대입연산자: += 등등
    
    # 새롭게추가된 연산자
    전개연산자(spread operator): ...
        배열, 객체에 포함된 요소들을 펼치는 연산자
        함수의 파라미터에서 사용되는 경우
        대입연산자에서 사용되는 경우
*/
let a = 3;
console.log('3의 3제곱 결과: ' + a**3);

let x = '3';
console.log(x == 3); // true, ==: 동등연산자, auto unboxing해서 같은값이면 같은 값으로
console.log(x === 3); // ===: 일치연산자, 데이터의 타입도 고려

let y = 10;
console.log(8 < y < 20); // true, 1) 8 < y 연산 --> t/f결과 f면 0, t면 1  2) true(1) < 20 --> true
// y가 8~20 사이의 숫자인지 확인하려면
console.log(y > 8 && y < 20);

/* Short circuit(단축평가) 
    - 왼쪽 연산의 결과에 따라 오른쪽 연산을 할 것인지 말것인지 결정하는 기능
    - 논리연산자에서 사용됨

    &&
    T && ? ==> ?
    F && ? ==> F

    ||
    T || ? ==> T
    F || ? ==> ?
*/

let b = 1;

b > 1 || console.log('출력될까요?'); // 왼쪽이 false이므로 오른쪽을 실행해봄
b == 1 || console.log('출력될까요?'); // 왼쪽이 true이므로 오른쪽을 실행안함

// 삼항연산자
let c = 5;
let d = 3;
c > d ? console.log(`${c}가 ${d}보다 크다.`) : console.log(`${c}가 ${d}보다 작다.`)


// 스프레드 연산자: ... 껍데기를 벗기는 연산자
let obj1 = {name : '홍길동'};
let obj2 = {name : '임꺽정'};

let obj = [obj1, obj2];
console.log(obj);

let tmp = [...obj]; // obj처럼 배열을 하나로 묶을 때 사용 가능
console.log(tmp);
console.log(obj);

let test1 = {...obj1, ...obj2}; // 오류 아님, {}
// let test2 = [...obj1, ...obj2]; // 오류임, []

// 안됨
let obj3 = {name: '손오공'};
let obj4 = {age: 30};
// obj = [...obj3]; 
// console.log('손오공 객체를 펼침: ' + obj) 오류, iterable 데이터가 아님

// obj = [...obj3, ...obj4]; // 오류, iterable 데이터만 펼칠 수 있음


// ------------------
let ary1 = [1, 2, 3, 4, 5];
let ary2 = [11, 12, 13, 14, 15];

let ary = [...ary1, ...ary2];
console.log(ary); // [1, 2, 3, 4, 5, 11, 12, 13, 14, 15]

