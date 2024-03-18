let javaHTML = document.getElementById('java');
let oracleHTML = document.getElementById('oracle');
let frontHTML = document.getElementById('front');
let backHTML = document.getElementById('back');
let project1HTML = document.getElementById('project1');
let project2HTML = document.getElementById('project2');
let attendenceHTML = document.getElementById('attendence');
let check = document.getElementById('check');

check.addEventListener('click', validation);

function validation() {
    let java = javaHTML.value;
    let oracle = oracleHTML.value;
    let front = frontHTML.value;
    let back = backHTML.value;
    let project1 = project1HTML.value;
    let project2 = project2HTML.value;
    let attendence = attendenceHTML.value;

    if(java<0 || java>100) {
        alert('올바른 숫자가 아닙니다 !');
        javaHTML.select();
        return;
    }

    if(oracle<0 || oracle>100) {
        alert('올바른 숫자가 아닙니다 !');
        oracleHTML.select();
        return;
    } 
    if(front<0 || front>100) {
        alert('올바른 숫자가 아닙니다 !');
        frontHTML.select();
        return;
    } 
    
    if(back<0 || back>100) {
        alert('올바른 숫자가 아닙니다 !');
        backHTML.select();
        return;
    }

    if(project1<0 || project1>100) {
        alert('올바른 숫자가 아닙니다 !');
        project1HTML.select();
        return;
    } 
    
    if(project2<0 || project2>100) {
        alert('올바른 숫자가 아닙니다 !');
        project2HTML.select();
        return;
    } 

    if(attendence<0 || attendence>100) {
        alert('올바른 숫자가 아닙니다 !');
        attendenceHTML.select();
        return;
    }

    let result = (java*0.1 + oracle*0.1 + front*0.1 + back*0.1 + project1*0.2 + project2*0.2 + attendence*0.2);
    document.getElementById('avg').innerHTML = result;
}

