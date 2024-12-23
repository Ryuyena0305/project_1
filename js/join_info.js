// 회원가입 함수
let customerCode;

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
    customerList.push(info);
    
    // console.log(customerList);
    localStorage.setItem('customer', JSON.stringify(customerList));
    location.href = "./index.html";

    return;
} // func join end


// 아이디중복확인
function idCheck(){
    let get = getLocalStorage("customer");
    // console.log(get);
    let id = document.querySelector('.id').value

    let state = true;
    // get의 index 번째의 id 값 가져와서 input value랑 비교
    for(let index = 0; index <= get.length-1; index++){
        if(get[index].id == id){
            alert('사용할 수 없는 아이디입니다.');
            document.querySelector('.id').value = ``;
            state = false;
        }
    }

    // input value값이 공백이면
    if(id == ""){
        alert("아이디를 입력해주세요.");
        state = false;
        return ;
    }
    // state가 true이면
    if(state){
        alert('사용 가능한 아이디입니다.')
    }

} // func idCheck end
