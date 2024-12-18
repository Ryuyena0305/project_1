customerList = [
    {customerCode : 1, id : "test1", password : "1234", name : "유재석", birth : "831205", phone : "010-1111-1111", address : "인천 부평구", clause : true},
    {customerCode : 2, id : "test2", password : "4567", name : "강호동", birth : "800506", phone : "010-2222-2222", address : "인천 부평구", clause : false},
    {customerCode : 3, id : "test3", password : "7890", name : "신동엽", birth : "850712", phone : "010-3333-3333", address : "인천 부평구", clause : true},
];

bookingList = [
    {bookingCode : 1, customerCode : 1, roomCode : 1, checkIn : "2024-08-02", checkOut : "2024-08-05"},
    {bookingCode : 2, customerCode : 2, roomCode : 2, checkIn : "2024-11-11", checkOut : "2024-11-12"},
    {bookingCode : 3, customerCode : 1, roomCode : 3, checkIn : "2024-12-23", checkOut : "2024-12-24"},
    {bookingCode : 4, customerCode : 1, roomCode : 2, checkIn : "2024-05-23", checkOut : "2024-05-24"},
    {bookingCode : 5, customerCode : 1, roomCode : 2, checkIn : "2024-06-23", checkOut : "2024-06-24"},
    {bookingCode : 6, customerCode : 1, roomCode : 3, checkIn : "2024-07-23", checkOut : "2024-07-24"},
];

roomList = [
    {roomCode : 1, roomName : "스탠다드 싱글", roomPrice : 250000, headCount : 1, roomNumber : 101},
    {roomCode : 2, roomName : "스탠다드 더블", roomPrice : 275000, headCount : 2, roomNumber : 202},
    {roomCode : 3, roomName : "스탠다드 트리플", roomPrice : 319000, headCount : 3, roomNumber : 303},
];
let changeState = true;

// printBookingList(1);
checkLogin();

function checkLogin() {
    let checking = getLocalStorage("login");
    // console.log(checking[0].customerCode);
    if(checking[0].customerCode > 0) {
        printBookingList(checking[0].customerCode);
    } else {
        printBookingList(0);
    }
}

// 마이페이지 내용 전체를 출력하는 함수
function printBookingList(code) {
    let getCustomerList = getLocalStorage("customer");
    let getbookingList = getLocalStorage("booking");
    let getroomList = getLocalStorage("room");
    let getLoginState = getLocalStorage("login");
    console.log(getCustomerList);
    console.log(getbookingList);
    console.log(getroomList);
    console.log(getLoginState);
    // 로컬스토리지에 값을 넣는 부분 시작
    setLocalStorage("customer", customerList);
    setLocalStorage("booking", bookingList);
    setLocalStorage("room", roomList);
    // setLocalStorage("login", d);
    // 로컬스토리지에 값을 넣는 부분 끝
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let booking = document.querySelector("#HistoryTable > tbody");
    let customerName = document.querySelector("#cName");
    let customerPhone = document.querySelector("#customerPhone > input");
    let customerBirth = document.querySelector("#customerBirth > input");
    let customerAddress = document.querySelector("#customerAddress > input");
    let html = ``;
    let login;
    let count = 1;
    for(let index = 0; index < getbookingList.length; index++) {
        let bookingTemp = getbookingList[index];
        let customer;
        let room;
        for(let j = 0; j < getCustomerList.length; j++) {
            let customerTemp = getCustomerList[j];
            if(bookingTemp.customerCode == customerTemp.customerCode) {
                customer = customerTemp;
            }
            if(code == customerTemp.customerCode) {
                let newLogin = [{customerCode : code, id : customerTemp.id, password : customerTemp.password, name : customerTemp.name}];
                setLocalStorage("login", newLogin);
                login = customerTemp;
            }
        }
        for(let k = 0; k < getroomList.length; k++) {
            let roomTemp = getroomList[k];
            if(bookingTemp.roomCode == roomTemp.roomCode) {
                room = roomTemp;
            }
        }
        if(bookingTemp.customerCode == code) {
            let temp = bookingTemp.checkOut.split("-");
            // console.log(temp);
            html += `<tr>
                <td style = "text-align : center;">${count}</td>
                <td style = "text-align : center;">${room.roomName}</td>
                <td style = "text-align : center;">${room.roomNumber}</td>
                <td style = "text-align : center;">${bookingTemp.checkIn}</td>
                <td style = "text-align : center;">${bookingTemp.checkOut}</td>`;
            if(temp[0] < year || temp[1] < month || temp[2] < day) {
                html += `<td style = "text-align : center;">
                    <button class = "CloseBtn" disabled>취소</button>
                    </td>
                </tr>`;
            } else {
                html += `<td style = "text-align : center;">
                    <button class = "cancelBtn" onclick = "cancelBooking(${bookingTemp.bookingCode})">취소</button>
                    </td>
                </tr>`;
            }
            count++;
            booking.innerHTML = html;
                
        }
    }
    let loginState = getLocalStorage("login");
    if(code != 0) {
        customerName.innerHTML = `<p>${login.name}님 반갑습니다.</p>`;
        customerPhone.value = login.phone;
        customerBirth.value = login.birth;
        customerAddress.value = login.address;
    } else {
        customerName.innerHTML = `<p>OOO님 반갑습니다.</p>`;
    }
}

// 회원정보를 수정하는 함수
function changeInfo() {
    let customerPhone = document.querySelector("#customerPhone");
    let customerBirth = document.querySelector("#customerBirth");
    let customerAddress = document.querySelector("#customerAddress");
    let customerName = document.querySelector("#customerName");
    let customerPassword = document.querySelector("#customerPassword");
    let cName = document.querySelector("#cName");
    let phoneValue = document.querySelector("#customerPhone > input").value;
    let birthValue = document.querySelector("#customerBirth > input").value;
    let addressValue = document.querySelector("#customerAddress > input").value;
    let nameValue = document.querySelector("#customerName > input").value;
    let passwordValue = document.querySelector("#customerPassword > input").value;
    let btn = document.querySelector("#changeInfo");
    let getCustomerList = getLocalStorage("customer");
    let getLoginState = getLocalStorage("login");
    // console.log(btn);
    // console.log("변경 전 : " + btn.innerHTML);
    if(changeState) {
        let state = confirm("회원정보를 수정하시겠습니까?");
        if(state) {
            customerPhone.innerHTML = `<label>전화번호</label><input type = "text" value = "${phoneValue}"/>`;
            customerPhone.className = "customerClassOpen";
            customerBirth.innerHTML = `<label>생년월일</label><input type = "text" value = "${birthValue}"/>`;
            customerBirth.className = "customerClassOpen";
            customerAddress.innerHTML = `<label>주소</label><input type = "text" value = "${addressValue}"/>`;
            customerAddress.className = "customerClassOpen";
            customerName.innerHTML = `<label>이름</label><input type = "text" value = "${getLoginState[0].name}"/>`;
            customerName.className = "customerClassAppear";
            customerPassword.innerHTML = `<label>비밀번호</label><input type = "text"/>`;
            customerPassword.className = "customerClassAppear";
            btn.innerHTML = "수정완료";
            // console.log("변경 후 : " + btn);
            changeState = false;
        }
    } else {
        let state = confirm("수정된 정보를 저장하시겠습니까?");
        if(state) {
            customerPhone.innerHTML = `<label>전화번호</label><input type = "text" value = "${phoneValue}" disabled/>`;
            customerPhone.className = "customerClassClose";
            customerBirth.innerHTML = `<label>생년월일</label><input type = "text" value = "${birthValue}" disabled/>`;
            customerBirth.className = "customerClassClose";
            customerAddress.innerHTML = `<label>주소</label><input type = "text" value = "${addressValue}" disabled/>`;
            customerAddress.className = "customerClassClose";
            customerName.innerHTML = `<label>이름</label><input type = "text" value = ""/>`;
            customerName.className = "customerClassDisappear";
            customerPassword.innerHTML = `<label>비밀번호</label><input type = "text"/>`;
            customerPassword.className = "customerClassDisappear";
            cName.innerHTML = `<p>${nameValue}님 반갑습니다.</p>`;
            btn.innerHTML = "회원수정";
            for(let index = 0; index < getCustomerList.length; index++) {
                // 이후 작성 : 회원정보수정을 하면 수정한 값을 로컬스토리지에 넣기
                let customer = getCustomerList[index];
                if(getLoginState[0].customerCode == customer.customerCode) {
                    customer.phone = phoneValue;
                    customer.birth = birthValue;
                    customer.address = addressValue;
                    customer.name = nameValue;
                    getLoginState[0].name = nameValue;
                    // 회원수정이 완료되면 로그아웃 시키고 메인페이지로 넘어가기 구현
                    if(passwordValue != "" && passwordValue != customer.password) {
                        customer.password = passwordValue;
                        setLocalStorage("login", [{customerCode : 0,  id : "", password : "", name : ""}]);
                        setLocalStorage("customer", getCustomerList);
                        location.href = "./index.html";
                    } else {
                        setLocalStorage("login", getLoginState);
                        setLocalStorage("customer", getCustomerList);
                    }
                }
            }
            // console.log("변경 후 : " + btn);
            changeState = true;
        }
    }
}

// 예약 을 삭제하는 함수
function cancelBooking(bookingCode) {
    let state = confirm("정말 취소하시겠습니까?");
    if(state) {
        let getBookingList = getLocalStorage("booking");
        for(let index = 0; getBookingList.length; index++) {
            let temp = getBookingList[index];
            if(bookingCode == temp.bookingCode) {
                getBookingList.splice(index, 1);
                setLocalStorage("booking", getBookingList);
                break;
            }
        }
    }
    printBookingList(1);
}

//회원정보를 탈퇴하는 함수
function deleteCustomer() {
    let state = confirm("정말 탈퇴하시겠습니까?");
    if(state) {
        let getCustomerList = getLocalStorage("customer");
        let getLoginState = getLocalStorage("login");
        console.log(getCustomerList);
        for(let index = 0; index < getCustomerList.length; index++) {
            let temp = getCustomerList[index];
            console.log("temp : " + temp.customerCode);
            console.log("getLoginState : " + getLoginState[0].customerCode);
            if(temp.customerCode == getLoginState[0].customerCode) {
                console.log("실행");
                getCustomerList.splice(index, 1);
                console.log(getCustomerList);
                setLocalStorage("customer", getCustomerList);
                setLocalStorage("login", [{customerCode : 0, id : "", password : "", name : ""}]);
                break;
            }
        }
        location.href = "./index.html";
    }
}