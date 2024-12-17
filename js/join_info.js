let customer = [
    { customerCode : 1, name : "유재석", birth : 831205, phone : "010-1111-1111", address : "인천 부평구", clause : true },
    { customerCode : 2, name : "강호동", birth : 800506, phone : "010-2222-2222", address : "인천 계양구", clause : false }
]

let customerCode = 3;
// 회원가입 함수
function join(){
    let name = document.querySelector('.name').value
    let birth = document.querySelector('.birth').value
    let phone = document.querySelector('.phone').value
    let address = document.querySelector('.address').value
    let id = document.querySelector('.id').value
    let pw = document.querySelector('.pw').value

    let info = {
        customerCode : customerCode,
        name : name,
        birth : birth,
        phone : phone,
        address : address,
        clause : true,
        id : id,
        pw : pw
    }
    // console.log(info);
    

    if(name == "" || birth == "" || phone == "" || address == "" ||
        id == "" || pw == ""){
        alert('입력 정보를 확인해주세요.')
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

    customer.push(info);

} // func end



