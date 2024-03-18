/*
    Math 객체는 수학과 관련된 값이나 함수를 제공
    1) 값: PI(원주율), E(오일러 상수)
        Math.PI
    2) 함수
*/

// Math에 선언된 상수 출력
console.log(`원주율: ${Math.PI}`);
console.log(`원주율: ${Math.E}`);

// abs(n): 절대값 반환
// JS의 Falsy값: undefined, null, 0, '', ...
//      Truely값: [], 비어있지 않은 문자열, 0이 아닌 숫자들 ...
console.log('------------ abs()');
console.log(Math.abs(-1));
console.log(Math.abs('-2'));      // 2
console.log(Math.abs(null));      // 0
console.log(Math.abs(''));        // 0
console.log(Math.abs(' '));       // 0
console.log(Math.abs('Korea'));   // NaN
console.log(Math.abs(undefined)); // NaN
console.log(Math.abs());          // NaN
console.log(Math.abs([]));        // 0
console.log(Math.abs([1, -1]));   // NaN

// ceil(n): 주어진 숫자보다 큰 쪽으로 가까운 정수 
console.log('------------ ceil()');
console.log(Math.ceil(0.95));     // 1
console.log(Math.ceil(5.00001));  // 6
console.log(Math.ceil(5));        // 5
console.log(Math.ceil(-0.95));    // -0
console.log(Math.ceil(-5.00001)); // -5

// floor(n): 주어진 숫자보다 작은쪽으로 가까운 정수
console.log('------------ floor()');
console.log(Math.floor(0.95));     // 0
console.log(Math.floor(5.00001));  // 5
console.log(Math.floor(5));        // 5
console.log(Math.floor(-0.95));    // -1
console.log(Math.floor(-5.00001)); // -6

// trunc(n): 소수점이하 절삭
console.log('------------ trunc()');
console.log(Math.trunc(0.95));     // 0
console.log(Math.trunc(5.00001));  // 5
console.log(Math.trunc(5));        // 5
console.log(Math.trunc(-0.95));    // -0
console.log(Math.trunc(-5.00001)); // -5

// round(n): 반올림; 소수점 이하 n번째 자리 반올림을 직접 제어불가
console.log('------------ round()');
console.log(Math.round(0.95));     // 1
console.log(Math.round(5.00001));  // 5
console.log(Math.round(5));        // 5
console.log(Math.round(-0.95));    // -1
console.log(Math.round(-5.00001)); // -5
console.log(Math.round(-5.6));     // -6
console.log(Math.round(-5.5));     // -5
console.log(Math.round(-5.51));    // -6
console.log(Math.round(5.5));      // 6
console.log(Math.round(5.3));      // 5

// 참고
console.log('------------ NaN, Infinity');
console.log(0 / 0);     // NaN     
console.log(10 / 0);    // Infinity
console.log(10 / -0);   // -Infinity

// min(n), max(n): 최소값, 최댓값
console.log('------------ max()');
console.log(Math.max(1, 5, 3));     
console.log(Math.max(-1, -5, -3));  
console.log(Math.max()); // -Infinity
console.log(Math.max(-0.95)); 

console.log('------------ min()');
console.log(Math.min(1, 5, 3));     
console.log(Math.min(-1, -5, -3));  
console.log(Math.min()); // Infinity
console.log(Math.min(-0.95));

// 배열에 저장된 최댓값, 최소값 구하기
let ary = [1, 5, 3];
console.log(Math.min(...ary));
console.log(Math.max(...ary));

// pow(n1, n2): 거듭제곱 구하는 연산자
console.log('------------ pow()');
console.log(Math.pow(5, 3)); // 5**3
console.log(5**3);
console.log(Math.pow(4, 0.5));  // 2
console.log(4**0.5);
console.log(Math.pow(4, -2)); // 0.0625
console.log(4**-2);

console.log(Math.pow(-5, 3));
console.log((-5)**3); // 연산자 우선순위때문에 괄호가 없으면 오류 발생 

console.log(Math.pow(-4, -2)); // 0.0625
console.log(Math.pow(-4, -0.5)); // NaN

// random(): 난수 발생 (0이상 ~ 1미만)
console.log('------------ random()');
for(let i=0; i<5; ++i) {
    console.log(Math.random());
}

console.log('------------ 0~50');
// 0~50까지(50포함 정수)를 5번 출력하시오
for(let i=0; i<5; ++i) {
    console.log(Math.floor(Math.random() * 51));
}