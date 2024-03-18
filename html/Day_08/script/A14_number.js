// Number 클래스는 숫자를 다루는 클래스

// 문자열을 숫자로 변환
console.log("----------- Number()");
let data = "2.5";
let temp = Number(data);

console.log(temp);

// 문자열을 숫자로 변환
data = "2.5a7";
temp = Number(data);

console.log(temp); // NaN, 변환 불가; 문자열 전체 평가


// 변환하는 다른 방법
console.log("----------- parseInt()");
console.log(parseInt(data)); // 2; 변환가능한 부분까지 변환
console.log("----------- parseFloat()");
console.log(parseFloat(data)); 2.5

console.log(`float형 최댓값: ${Number.MAX_VALUE}`);
console.log(`float형 최댓값: ${Number.MIN_VALUE}`);
