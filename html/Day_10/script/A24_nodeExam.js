// preventDefault(): submit 기능 잃도록 함
document.getElementById('addmember').addEventListener('click', function(event) {
    console.log(event);
    event.preventDefault();
})

let memberList = document.getElementById('memberlist');

document.getElementById('addmember').addEventListener('click', function() {
    let name = document.getElementById('name').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let email = document.getElementById('email').value.trim();

    if(isNaN(phone) || phone.length != 11) {
        alert('올바르지 않은 전화번호 입력입니다');
        document.getElementById('phone').select();
        return;
    }
    
    let data = `<tr>
                    <td>${name}</td>
                    <td>${phone}</td>
                    <td>${email}</td>
                </tr>`;

    memberList.insertAdjacentHTML('beforeend', data);

    document.getElementById('member').reset();
});

// 길이 체크 함수 - 수정필요
function lengthCheck(obj) {
    if(obj.length == 0) {
        alert('정보를 입력하세요! ')
        flag = false;
        return;
    }
    flag = true;
};

// 