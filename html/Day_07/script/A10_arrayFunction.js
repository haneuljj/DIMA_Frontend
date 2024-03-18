/* 
    배열을 처리하는 함수

    1) join(): 전달인자의 문자열을 구분자로 하여 배열을 문자열로 반환
    2) reverse(): 배열을 뒤집기
    3) slice(start, end): 배열의 일부분을 반환, 음수 -1은 마지막 데이터 의미
    4) splice(n[, m, ..x]): 부분배열로 추출하거나 다른 값으로 대체, n위치에서 m까지 추출/삭제, x로 대체 
    **slice는 원본에 영향을 주지 않지만 splice는 원본에 영향을 미침
    5) sort(): 오름차순 정렬
    6) concat(...item): 여러 배열을 하나로 합친다. 
    7) push(item), pop(): 배열의 끝에 데이터를 삽입하거나 추출, 원본에 영향을 미침, Stack자료 구조처럼 동작
    8) unshift(item), shift(): 배열의 앞에 데이터를 삽입하거나 추출, ... 
    9) toString(): 배열을 문자열로 반환

    문자열도 배열처럼 []로 사용가능, 하지만 immutable이기때문에 배열처럼 중간의 값 수정 불가능
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.join("/")); 
// console.log(arr.reverse()); // 원본을 뒤집는다.

let temp = arr.slice(2, 7);
console.log(temp);

// temp[0] = 22;
arr[2] = 30;
console.log(arr); // 원본
console.log(temp);

temp = arr.slice(0, -2); // 마지막 데이터 전까지 복사본을 가져옴
console.log('부분배열의 결과: ' + temp);

//splice()
/*
Array<string>.splice(start: number, deleteCount: number, ...items: string[]): string[]
*/
let color = ['빨', '주', '노', '초', '파', '남', '보'];
temp = color.splice(4); // 인덱스4 부터 끝까지 슬라이스
console.log(temp); // ['파', '남', '보']
console.log(color); // 원본이 잘림, ['빨', '주', '노', '초']

// 특정 위치의 데이터 잘라내기
color = ['빨', '주', '노', '초', '파', '남', '보'];
temp = color.splice(2, 1); // 2번 인덱스부터 1개를 잘라서 temp에 반환 
console.log(temp);
console.log(color); // '노' 삭제됨

color = ['빨', '주', '노', '초', '파', '남', '보'];
color.splice(2, 1, 'Yello', '노랑'); 
console.log(color); // '노'가 삭제되고 'Yello', '노랑'가 그 위치에 삽입됨

// concat()
let food = ['라볶이', '뼈해장국', '파스타'];
let drink = ['물', '주스', '커피'];
let fruit = ['사과', '포도', '딸기'];

let lunch = food.concat(drink);
console.log(lunch);

lunch = food.concat(drink, fruit);
console.log(lunch);

// toString()
console.log(lunch.toString()); // 배열을 문자열로 변환

// push(), pop()
let data = '짜장면';
food.push(data); // 배열에 데이터 추가
console.log(food);

data = food.pop(); //마지막값 꺼냄, 원본에서는 삭제됨
console.log(food);
console.log(data);
// 더이상 꺼낼 값이 없는데 꺼내려고 한다면? undefined

// shift(), unshift(item)
drink = ['물', '주스', '커피'];
data = drink.shift(); // 배열의 맨 앞의 값 꺼냄, 원본에서는 삭제됨
console.log(data);

drink.unshift('맥주'); //  배열의 앞에 추가
console.log(drink);

// --------
let aryTemp = [];
