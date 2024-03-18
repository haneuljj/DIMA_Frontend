/* DOM에 접근해서 객체를 받아오는 방법 */
// 1) getElementById('아이디명')
console.log('---------------- getElementsById()')
let id = document.getElementById('writer');
console.log(id);

// 2) getElementsByTagName('태그명')
console.log('---------------- getElementsByTagName()')
let tags = document.getElementsByTagName('p');
console.log(tags.length);
console.log(tags);

// 4) getElementByClassName('클래스명')
console.log('---------------- getElementsByClassName()')
let poem = document.getElementsByClassName('poem');
console.log(poem.length);
console.log(poem);

/* CSS의 선택자를 이용하여 객체를 받아오는 방법 */
// querySelector('CSS 선택자')
// 선택자에 해당하는 데이터 중 첫번째 데이터만 반환
console.log('---------------- querySelector()')
let poem2 = document.querySelector('.poem');
console.log('length: ' + poem2.length); // undefined
console.log('poem2: ' + poem2); // 첫번째것만 가져옴

// querySelectorAll('CSS 선택자')
// 선택자에 해당하는 모든 데이터를 배열로 반환 
console.log('---------------- querySelectorAll()')
let poem3 = document.querySelectorAll('.poem');
console.log('length: ' + poem3.length); 
console.log('poem3: ' + poem3);

// +) getElementByClassName: HTMLCollections 타입으로 반환
//    querySelectorAll: nodeList타입으로 반환


/* HTML 요소의 특정 속성을 조회하거나 치환하는 메소드 */
// 조회: HTMLObject.getAttribute(속성명)
// 치환: HTMLObject.setAttribute(속성명, 값)

// [연습] 변경 버튼을 누르면 꽃의 이미지 수정
document.getElementById('change').addEventListener('mouseenter', function() {
    let alt = document.getElementById('image').getAttribute('alt');
    console.log(alt);
    document.getElementById('image').setAttribute('src', '../images/pic2.jpg');
});

document.getElementById('change').addEventListener('mouseleave', function() {
    document.getElementById('image').setAttribute('src', '../images/flower_image.jpg');
});