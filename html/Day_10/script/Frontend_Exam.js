// 기능 처리
let score = document.getElementsByClassName('subjectScore');
let total = 0;

// 점수 입력하는 input상자에 이벤트 설정
for(let i=0; i<score.length; ++i){
    score[i].addEventListener('keyup', scoreInput); // 키보드 입력되면 함수 실행
}

// confirm 버튼에 이벤트 설정
document.getElementById('confirm').addEventListener('click', finalResult);

function scoreInput() {
    let subjectScore = this.value;
    if((subjectScore < 0 || subjectScore > 100) || isNaN(subjectScore)) {
        alert('각 과목당 점수는 0~100점 사이로 입력해주세요 !')
        this.select();
        return;
    }
    
    total += parseFloat(this.value);
};


function finalResult() {
    let totalScore = 0;
     // 각 과목점수 조회
    let subjects = document.getElementsByClassName('sub');
    for(let i=0; i<subjects.length; ++i){
        totalScore += parseFloat(subjects[i].value)*0.1; // parseFloat() 필수는 아님, + 연산할 때 문제 발생가능
    }

     // 각 프로젝트 점수 조회
    let projects = document.getElementsByClassName('project');
    for(let i=0; i<projects.length; ++i){
        totalScore += parseFloat(projects[i].value)*0.2;
    }

    // 출석점수 조회
    let attend = document.getElementsByClassName('attendence')[0];
    totalScore += attend.value*0.2;

    let finalData = `<b style="background-color: yellow; font-weight:bold;">${totalScore}</b>`;

    document.getElementById('avg').innerHTML = finalData;
};
