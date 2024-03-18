// 회원가입 검증
document.getElementById('join').addEventListener('click', function() {
    // 1) 아이디 길이 체크
    let useridHTML = document.getElementById('userid');
    let userid = useridHTML.value.trim();
    if(userid.length<3 || userid.length>5) {
        alert('아이디는 3~5글자여야 합니다 !');
        useridHTML.select();
        return;
    }

    // 2) 비밀번호 길이 체크
    let pwdHTML = document.getElementById('pwd');
    let pwd = pwdHTML.value.trim();
    if(pwd.length<3 || pwd.length>5) {
        alert('비밀번호는 3~5글자여야 합니다 !');
        pwdHTML.select();
        return;
    }

    // 3) 비밀번호와 비밀번호 확인란 일치 여부 체크
    let pwdcheckHTML = document.getElementById('pwdcheck');
    let pwdcheck = pwdcheckHTML.value.trim();
    if(pwd != pwdcheck) {
        alert('비밀번호는 재입력된 비밀번호와 같아야 합니다 !');
        pwdcheckHTML.select();
        return;
    }

    // 이름
    let usernameHTML = document.getElementById('username');
    let username = usernameHTML.value.trim();
    if(username.length == 0) {
        alert('이름을 입력하세요 !');
        usernameHTML.select();
        return;
    }

    // 성별
    let gender = document.querySelector('.gender:checked').value;

    // 취미
    let hobby = document.querySelectorAll('.hobby:checked');
    let hobbyTemp = '';
    for(let i=0; i<hobby.length; ++i){
        hobbyTemp += (hobby[i].value + ' / ');
    }
    // console.log(hobbyTemp)

    // 전화번호
    let tel1 = document.getElementById('tel1').value;
    let tel2HTML = document.getElementById('tel2');
    let tel2 = tel2HTML.value.trim();

    if(isNaN(tel2) || tel2.length != 8) {
        alert('전화번호를 정확히 입력하세요 !');
        tel2HTML.select();
        return;
    }

    alert(
        `회원가입 완료 ! 
         id: ${userid},
         pw: ${pwd},
         name: ${username},
         gender: ${gender},
         hobby: ${hobbyTemp},
         tel: ${tel1 + tel2}
         `
    );
});

document.getElementById('clear').addEventListener('click', function(){
    // let userid = document.getElementById('userid');
    // let pwd = document.getElementById('pwd');
    // let pwdcheck = document.getElementById('pwdcheck');
    // let username = document.getElementById('username');
    // //let gender = document.querySelector('.gender')
    // let tel2 = document.getElementById('tel2');

    // userid.value = '';
    // pwd.value = '';
    // pwdcheck.value = '';
    // username.value = '';
    // tel2.value = '';
    document.getElementById('joinform').reset();
});