/*
    실행 위치에 따른 결과
    - 자바스크립트를 실행 시 코드가 HTML의 head위치에 포함되어 있을 경우
        : HTML 파싱 도중에 Javascript fectch --> execute --> 남은 HTML parsing
            파싱 시간에 공백이 발생 --> JS에서 에러 발생 가능
    - async 키워드 사용: HTML parsing과 JS fetch를 동시에함, execute할 때 parsing을 멈춤, 전체 실행 시간 단축 가능
    - defer 키워드 사용: HTML parsing과 JS fetch를 동시에하고, JS execute를 HTML parsing이후로 미룸, 오류 발생 가능x
                        window.onload 이벤트 거는 것과 유사하게 동작
                        
*/

//1) 이벤트에 익명함수 걸기, 윈도우가 로드가 끝나고(돔구조가 완성되면) 나면 익명함수 실행하기
//window.onload = function() {  }


let data = '';

for(let i=0; i<5; ++i){
    for(let j=0; j<(i+1); ++j) 
        data += '*';
    data += '<br>';
}

let result = document.getElementById("result"); // HTML object
console.log(result); // null --> js 불러오는 게 body에 있는 result 아이디를 가진 태그를 만나는 것보다 먼저
result.innerHTML = data; // result가 html 객체 여야함
