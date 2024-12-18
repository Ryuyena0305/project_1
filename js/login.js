

let customerList = [
    {customerCode : 1, id : "test1", password : "1234", name : "유재석", birth : "831205", phone : "010-1111-1111", address : "인천 부평구", clause : true},
    {customerCode : 2, id : "test2", password : "4567", name : "강호동", birth : "800506", phone : "010-2222-2222", address : "인천 계양구", clause : false},
    {customerCode : 3, id : "test3", password : "7890", name : "신동엽", birth : "791125", phone : "010-3333-3333", address : "서울 종로구", clause : true},
    {customerCode : 4, id : "test4", password : "1234", name : "홍길동", birth : "920505", phone : "010-4444-4444", address : "부산 해운대구", clause : false},
 ];
// 현재 로그인 상태( 0이면 비로그인, 0이상이면 로그인)
let loginState = {customerCode : 0};



// 로그인 함수
function login(){
    
    let loginId = document.querySelector('.id').value
    let loginPw = document.querySelector('.pw').value

    let localInfo = getLocalStorage("customerList");
    console.log(localInfo);
    // console.log(localInfo);
    for(let index = 0; index <= localInfo.length-1; index++){
        let info = localInfo[index];
        console.log(info);
        if(info.id == loginId && info.password == loginPw){
            alert('로그인 성공');
            return;
        }
    }
    alert('아이디 또는 비밀번호를 확인해주세요')
    // location.href = "./index.html";

    if(localInfo.customerCode < 0){
        sessionStorage.setItem('loginState', JSON.stringify(loginState));
    }




    return;
}
