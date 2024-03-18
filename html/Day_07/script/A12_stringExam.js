let check = document.getElementById('check'); // 버튼 가져오기
let userid = document.getElementById('userid') // 아이디 가져오기
let birthday = document.getElementById('birthday') // 생년월일 가져오기

// 이벤트 걸기 (이벤트, 이벤트 실행시 호출될 함수)
check.addEventListener('click', validation);

function validation () {
    let id = userid.value;
    if(!(id.trim().length>=5 && id.trim().length<=10)){
        alert('5~10사이의 문자를 입력하세요!');
        userid.select(); // 아이디 입력란에 입력했던 문자열이 선택됨
        return;
    }

    let birth = birthday.value;
    // 8자리가 아니고 숫자가 아닌경우
    if(birth.trim().length != 8 || isNaN(birth)) {
        alert('올바른 입력이 아닙니다!');
        birthday.select(); // select()는 html객체에만 사용가능
        return;
    }

    alert("입력 완료");
};
