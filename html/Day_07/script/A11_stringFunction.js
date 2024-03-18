/*
    문자열 관련 메소드
    - 시퀀스 객체이기때문에 인덱스 사용가능
    - immutable한 타입이기떄문에 수정 불가
    1) charAt(index), at(index): 인덱스에 위치한 문자 한 개 반환
    2) startsWith(str), endsWith(str), includes(str), search(str)
    3) replace(m, n): 문자열 m을 찾아서 n으로 변경 
    4) slice(index1, index2): 부분 문자열 반환 (index1 ~ index2-1)
    5) substr(), substring(): 부분 문자열 반환 (ES5 이후에는 substr() 사용 비권장)
*/

let data = 'abcdefg';

// charAt() / at()
console.log(data.charAt(3));
console.log(data.at(3));

data = 'Hello, world! Welcome to the Javascript~';
console.log(data.endsWith('~')); 
console.log(data.startsWith('Hello'));
console.log(data.includes('world')); // boolean 반환

console.log(data.search('world')); // 문자열의 시작 인덱스값 반환
console.log(data.search('earth')); // -1 반환; 문자열을 찾지 못할 경우

// replace(m, n)
let text = data.replace('Hello', 'Hi');
console.log('원본: ' + data); // 원본에 영향 미치지 않음
console.log('변경본: ' + text);

// slice()
console.log(data.slice(5, 10));
console.log(data.slice(10, 5)); // 앞 < 뒤 여야함, 추출 못함
console.log(data.slice(-5, -1)); // 음수 인덱스 사용가능
console.log(data.slice(-1, -5));

// substr(n, m) : 인덱스 n부터 m개 가져오기 , 비권장
console.log('substr(): ' + data.substr(5, 10));

// substring(n, m): 부분문자열 추출, 인덱스 n부터 m-1까지
data = 'Hello, world! Welcome to the Javascript~';
console.log('substring(): ' + data.substring(5, 10));
console.log('substring(10, 5): ' + data.substring(10, 5)); // 추출가능, 앞 < 뒤 규칙없음
console.log('substring(-3, 2): ' + data.substring(-3, 2)); //He, 음수 사용 불가, 0~(2-1)위치 반환됨

// split(str): 구분 문자열을 전달하여 구분문자열 기준으로 배열로 쪼개기
let arr = data.split(' ')
console.log('split된 데이터 arr의 타입: ' + typeof arr);
console.log('반환된 배열의 길이: ' + arr.length);
// forEach함수로 배열 요소 출력
arr.forEach((item) => console.log(item));

// find(): 
// console.log(arr.find();

// trim(): 좌우 공백 제거
data = 'Hello ~       '
console.log('문자열의 길이' + data.length);
console.log('좌우 공백을 제거한 문자열의 길이: ' + data.trim().length);

// 