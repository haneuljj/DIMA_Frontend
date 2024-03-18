let arr = [10, 11, 100, 101, 1000];
console.log('arr의 크기: ' + arr.length);

let total = 0;

// 반환해도 안됨, 밖에서 변수를 선언하여 forEach안에서 처리하여 가져가기
// 1) forEach: 배열의 개수만큼 순환하는 함수
arr.forEach(function(item, index, ary){
    //console.log(item, index, ary); // arr배열의 각 요소, 인덱스, 배열
    total += item;
    // return total;
}); 
console.log('배열의 총합-1: ' + total);
//console.log('result: ' + result); // undefined


// 2) forEach의 내부함수를 화살표함수로 변경
total = 0;
// 모든 전달인자를 받을 필요는 없음
arr.forEach(item => total += item); //위의 forEach의 익명함수와 동일
console.log('배열의 총합-2: ' + total);


console.log('----------------------------');
/* 
    map(): 배열의 요소를 받아서 각 요소를 변경 가능
    - 배열 요소 전체를 순환하면서 결과값으로 새로운 배열을 만들어 반환한다.
    - 원본 배열의 값은 변경하지 않는다.
*/
let result = arr.map(item => item*2);
console.log('map 함수 처리 결과' + result);
console.log('원본 배열' + arr);


console.log('----------------------------');
/*
    filter(): 배열의 요소를 필터링(삭제)
    - 배열 요소 전체를 순환하면서 내부 연산 결과가 true가 반환되면
      true인 요소들로 새로운 배열을 만들어 반환한다.
    - 원본 배열의 값은 변경하지 않는다.
*/
result = arr.filter(item => {
    if(item % 2 === 0) return true; // boolean값이 반환되도록 함수 처리
    else return false; 
});
console.log('filter 함수 처리 결과' + result);
console.log('원본 배열' + arr);

// callback함수: 매개변수로 함수 객체를 전달해서 호출 함수 내에서 매개변수 함수를 실행하는 것
// 
