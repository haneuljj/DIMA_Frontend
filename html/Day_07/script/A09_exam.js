// 서버에서 아래와 같은 형태의 데이터를 전송받았다.
// 적절히 조합해서 html 문서에 표형태로 출력하시오

let receivedData = [
    {id:'001', 'name':'홍길동', license:'정보처리기사'}
    , {id:'002', 'name':'임꺽정', license:'빅데이터분석기사'}
    , {id:'003', 'name':'전우치', license:'ADsP'}
    , {id:'004', 'name':'손오공'}
    , {id:'005', 'name':'사오정', license:'운전면허증'}
];

let data = `
<table>
<tr>
    <th>아이디</th>
    <th>이름</th>
    <th>자격증</th>
</tr>
`;

// 데이터 처리
`<tr>
    <td>${id}</td>
    <td>${name}</td>
    <td>${license}</td>
</tr>
` // 반복처리

data += `</table>`

// 완성된 data를 html 코드에 넣기