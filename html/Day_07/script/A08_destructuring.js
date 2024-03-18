// 구조분해 할당(배열)
let one = [10, 20, 30];

let a = one[0];
let b = one[1];
let c = one[2];
console.log(a, b, c);

// 1) 배열 요소를 각각 분해해서 변수에 저장하는 방법
let [a1, b1, c1] = one; // 자바스크립트와 자바sms =의 왼쪽에 변수가 하나만 와야함
console.log(a1, b1, c1);

// 2) 분해하는 방법; 필요한 요소만 추출하기
let [, , c2] = one; // 배열의 3번째(30)값만 가져오기
console.log(c2);

let [, b2] = one; // 배열의 2번째(20)값만 가져오기
console.log(b2);

let [a3, b3, c3, d3] = one;
console.log(d3); // undefined

// 3) 두 변수의 값 교환하기
let x = 10;
let y = 20;
[y, x] = [x, y];
console.log('두 변수의 데이터값 교환: ', x, y);

// 구조분해 할당(객체)
let objOne = {
    name: '손오공'
    , age: 29
};

// let name = obj['name'];
// -1
let {name, age} = objOne;
console.log('객체의 구조분해할당: ', name, age);

// -2 : 분해시 객체의 key이름과 분해하는 이름이 같아야함
// 다른 이름을 사용하고자 하면 별칭을 사용
let objTwo = {
    name: '저팔계'
    , age: 25
};

// 키이름 다르게 사용하기
let {name: nickName, age: hisAge} = objTwo;
console.log(nickName, hisAge);

// default parameter 사용하기
let {name:nm, age:ag, address='서울'} = objTwo;
console.log(nm, ag, address);