
// 선언적 함수
function one(x, y) {
    return x - y;
}
let oneResult = one(12, 10);
console.log(oneResult);

// 표현적 함수 : 함수 리터러를 변수에 대입
let two = function(x, y) {
    return x - y;
}; // function literal
console.log(two(43, 12));

// 화살표 함수: 함수 리터럴 방식 변경
// 1) function 키워드 삭제
// 2)  ) { 사이에 => 삽입 
// 3) { }안에 구문이 하나뿐이면 {} 생략하고 return 삭제가능
let three = (x, y) => x - y;
console.log(three(50, 33));

// 표현적 함수를 화살표 함수로 바꾸기
let four = function(x, y) {
    console.log(`${x} + ${y} = ${x+y}`);
};

let arrowFour = (x,y) => console.log(`${x} + ${y} = ${x+y}`);
arrowFour(10, 20);

// 4) 매개변수가 1개밖에 없으면 () 생략가능
// 5) 매개변수가 없으면 생략 불가능
let five = x => {
    const result = x ** 2;
    console.log(`${x}의 제곱은 ${result}이다.`);
}
five(3);

let six = () => console.log('전달인자가 없음');
six();

// 6) 함수의 매개변수 위치에 디폴트값을 설정할 수 있다.
//    디폴트값은 오른쪽에서부터 채워야한다. 매개변수 순서대로 입력값이 전달됨
let seven = (x, y=0) => console.log(`${x} + ${y} = ${x+y}`); // y의 디폴트값 설정, 값전달하지 않으면 기본값으로
seven(5);
seven(5, 6);

// 동일 표현 방식
setInterval(function() {
    //
}, 1000)

setInterval(() => {
    //
}, 1000);

