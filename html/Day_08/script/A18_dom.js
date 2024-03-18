// 1) input 데이터 처리
document.getElementById('calc1').addEventListener('click', calcBMI);

function calcBMI() {
    let height = document.getElementById('height');
    let weight = document.getElementById('weight');

    // 입력하지 않거나 문자가 포함되게 입력할 경우
    if(height.value.trim().length == 0 || isNaN(height.value.trim())) {
        alert('키를 정확히 입력하세요 !');
        height.select();
        return;
    }

    if(weight.value.trim().length == 0 || isNaN(weight.value.trim())) {
        alert('몸무게를 정확히 입력하세요 !');
        weight.select();
        return;
    }

    let bmi = weight.value / ((height.value*0.01)**2);
    let result = `당신의 키는 ${height.value}cm, 몸무게는 ${weight.value}kg, BMI는 ${Math.round(bmi*100)/100}입니다.`
    document.getElementById('target1').innerHTML = result;
};

// 2) select 데이터 처리
let language = document.getElementById('language'); // select box
let calc2 = document.getElementById('calc2');       // 버튼
let target2 = document.getElementById('target2');

// 버튼에 걸리는 클릭 이벤트
calc2.addEventListener('click', function() {
    let value = language.value;
    let result = `선택한 언어는 ${value}입니다.`;
    target2.innerHTML = result;
});

// select box에 걸리는 change 이벤트
language.addEventListener('change', function(){ // 선택상자에서 상태가 변화되면 함수 처리
    let value = this.value; // this: 이벤트가 걸려있는 것, 함수를 호출한 주체
    let result = `선택한 언어는 ${value}입니다.`;
    target2.innerHTML = result;
});


// 3) 연습문제 - 사칙연산
let selector = document.getElementById('operator'); // 연산자 선택상자 객체 가져오기
let getResult = document.getElementById('calculate'); // '=' 버튼 객체 가져오기 

getResult.addEventListener('click', function() {
    let first = document.getElementById('first'); // 첫번째 입력 숫자 
    let firstValue = first.value.trim();
    let second = document.getElementById('second'); // 두번째 입력 숫자
    let secondValue = second.value.trim();

    // 아무것도 입력안하면 경고창 띄우기
    if(firstValue.length == 0 || secondValue.length == 0) {
        alert('올바른 숫자를 입력하세요!')
        first.select();
        return;
    }

    let operateValue = selector.value; // 연산자 객체의 값 가져오기

    // 입력된 숫자를 실수형으로 바꾸기
    firstValue = parseFloat(firstValue);
    secondValue = parseFloat(secondValue);

    // 결과값 처리하기
    let myResult = 0;
    if(operateValue == 'plus') myResult = firstValue + secondValue;
    if(operateValue == 'minus') myResult = firstValue - secondValue;
    if(operateValue == 'multiply') myResult = firstValue * secondValue;
    if(operateValue == 'divide') myResult = firstValue / secondValue;
    
    // 결과값을 결과 입력창에 넣기
    document.getElementById('result').value = myResult;

    
});

// Clear 버튼 클릭시 입력상자의 데이터 삭제
document.getElementById('clear').addEventListener('click', function() {
    let first = document.getElementById('first');
    let second = document.getElementById('second');
    let result = document.getElementById('result');

    first.value = '';
    second.value = '';
    result.value = '';
});

// 4) 라디오 버튼 데이터 처리
document.getElementById('calc4').addEventListener('click', function() {
    // querySelector: 하나만 가져올 수 있음; 라디오버튼 - 하나만 선택가능
    // 현재 페이지에 라디오 버튼이 여러개 있다면, '.gender:checked' - 같은 클래스끼리에서
    let gender = document.querySelector('input[type="radio"]:checked'); // 체크된 데이터 읽어오기
    let genderTemp = gender.value;

    document.getElementById('target4').innerHTML = genderTemp;
});

// 5) 체크 박스 데이터 처리
document.getElementById('calc5').addEventListener('click', function() {
    let drama = document.querySelectorAll('input[type="checkbox"]:checked'); // 배열
    let dramaTemp = '';
    for(let i=0; i<drama.length; ++i){
        dramaTemp += drama[i].value + ' / ';
    }

    document.getElementById('target5').innerHTML = dramaTemp;
});

// 6) textarea에 입력된 글자 처리 

// 키보드를 눌렀다 떼는 동작 시 처리, 글자수 세기
document.getElementById('textbox').addEventListener('keyup', function() {
    let count = this.value.length // 입력된 글자수 저장하는 변수
    document.getElementById('count').innerText = `글자 수: ${count}`;
});

// textarea 글자를 읽어와서 h3 위치에 넣기
document.getElementById('calc6').addEventListener('click', function() {
    let text = document.getElementById('textbox');
    document.getElementById('target6').innerHTML = text.value;
});

// 7) input태그의 color, date타입 처리
document.getElementById('calc7').addEventListener('click', function() {
    let color = document.getElementById('color').value;
    let date = document.getElementById('date').value;

    document.getElementById('target7').innerHTML = `
        색깔 정보: <span style = "color:${color};">${color}</span><br>
        날짜 정보: <span style = "color:${color};">${date}</span>
    `;
});