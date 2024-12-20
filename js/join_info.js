// let customerList = [
//     {customerCode : 1, id : "test1", password : "1234", name : "유재석", birth : "831205", phone : "010-1111-1111", address : "인천 부평구", clause : true},
//     {customerCode : 2, id : "test2", password : "4567", name : "강호동", birth : "800506", phone : "010-2222-2222", address : "인천 계양구", clause : false},
//     {customerCode : 3, id : "test3", password : "7890", name : "신동엽", birth : "791125", phone : "010-3333-3333", address : "서울 종로구", clause : true},
//     {customerCode : 4, id : "test4", password : "1234", name : "홍길동", birth : "920505", phone : "010-4444-4444", address : "부산 해운대구", clause : false},
//  ];
 


let customerInfo = [];
let customerCode;
// 회원가입 함수
function join(){
    let customerList = getLocalStorage("customer");
    // setLocalStorage('customer', customerList);
    let code = customerList[customerList.length-1].customerCode+1

    let name = document.querySelector('.name').value
    let birth = document.querySelector('.birth').value
    let phone = document.querySelector('.phone').value
    let address = document.querySelector('.address').value
    let id = document.querySelector('.id').value
    let password = document.querySelector('.pw').value

    let info = {
        customerCode : code,
        id : id,
        password : password,
        name : name,
        birth : birth,
        phone : phone,
        address : address,
        clause : true,
    }
    // console.log(info);
    

    if(name == "" || birth == "" || phone == "" || address == "" ||
        id == "" || password == ""){
        alert('입력 정보를 확인하세요.')
        document.querySelector('.name').value = ``;
        document.querySelector('.birth').value = ``;
        document.querySelector('.phone').value = ``;
        document.querySelector('.address').value = ``;
        document.querySelector('.id').value = ``;
        document.querySelector('.pw').value = ``;
        return;
    }else{
        alert('회원가입이 완료되었습니다.')
        customerCode++;
    }
    // 변경한 코드 --> 위에있는 고객리스트 대신 로컬 스토리지에 있는 고객리스트값을 사용했습니다.
    getCustomerList.push(info);
    //

    // console.log(customerList);
    localStorage.setItem('customer', JSON.stringify(customerList));
    location.href = "./index.html";
    // 인덱스로 넘어가면 로컬에 저장은 되지만 덮어쓰기 됨
    
    return;
} // func end
