// let customerList = [
//     {customerCode : 1, id : "test1", password : "1234", name : "유재석", birth : "831205", phone : "010-1111-1111", address : "인천 부평구", clause : true},
//     {customerCode : 2, id : "test2", password : "4567", name : "강호동", birth : "800506", phone : "010-2222-2222", address : "인천 계양구", clause : false},
//     {customerCode : 3, id : "test3", password : "7890", name : "신동엽", birth : "791125", phone : "010-3333-3333", address : "서울 종로구", clause : true},
//     {customerCode : 4, id : "test4", password : "1234", name : "홍길동", birth : "920505", phone : "010-4444-4444", address : "부산 해운대구", clause : false},
//  ];

// 로그인 함수
function login(){
    let loginId = document.querySelector('.id').value;
    let loginPw = document.querySelector('.pw').value;
    // let code = '';
    let state = false;

    let localInfo = getLocalStorage("customer");
    // console.log(localInfo);
    for(let index = 0; index <= localInfo.length-1; index++){
        let info = localInfo[index];
        // console.log(info);
        if(info.id == loginId && info.password == loginPw){
            // code = info.customerCode;
            state = true;
            // 추가한 내용 시작
            let loginState = getSessionStorage("login");
            loginState.customerCode = localInfo[index].customerCode;
            loginState.id = localInfo[index].id;
            loginState.password = localInfo[index].password;
            loginState.name = localInfo[index].name;
            loginState.birth = localInfo[index].birth;
            loginState.phone = localInfo[index].phone;
            loginState.address = localInfo[index].address;
            loginState.clause = localInfo[index].clause;
            setSessionStorage("login", loginState);
            // 추가한 내용 끝
            break;
        }
    }
    if(state){
        alert('로그인 성공');
    } else{alert('아이디 또는 비밀번호를 확인해주세요')
        return;
    }
    

    // console.log(code);
    // 현재 로그인 상태( 0이면 비로그인, 0이상이면 로그인)
    // let loginState = {customerCode : 0, id : "", password : "", name : "", birth : "", phone : "", address : "", clause : false}

    // for(let index = 0; index <= localInfo.length-1; index++){
    //     if(localInfo[index].customerCode == code){
    //         loginState = {
    //                         customerCode : localInfo[index].customerCode,
    //                         id : localInfo[index].id,
    //                         password : localInfo[index].password,
    //                         name : localInfo[index].name,
    //                         birth : localInfo[index].birth,
    //                         phone : localInfo[index].phone,
    //                         address : localInfo[index].address,
    //                         clause : true
    //                     };
    //     }
    // }

    // sessionStorage.setItem('login', JSON.stringify(loginState));

    // location.href = "./index.html";
}
