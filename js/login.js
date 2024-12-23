// 로그인 함수
function login(){
    let loginId = document.querySelector('.id').value;
    let loginPw = document.querySelector('.pw').value;
    let state = false;

    let localInfo = getLocalStorage("customer");
    // console.log(localInfo);
    for(let index = 0; index <= localInfo.length-1; index++){
        let info = localInfo[index];
        // console.log(info);
        if(info.id == loginId && info.password == loginPw){
            state = true;
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
            break;
        }
    }
    if(state){
        location.href = "./index.html";
    } else{alert('아이디 또는 비밀번호를 확인해주세요')
        return;
    }
    
}

