customerList = [
    {customerCode : 1, id : "test1", password : "1234", name : "유재석", birth : "831205", phone : "010-1111-1111", address : "인천 부평구", clause : true},
    {customerCode : 2, id : "test2", password : "4567", name : "강호동", birth : "800506", phone : "010-2222-2222", address : "인천 부평구", clause : false},
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

printBookingList(1);
function printBookingList(code) {
    let getCustomerList = getLocalStorage("customer");
    let getbookingList = getLocalStorage("booking");
    let getroomList = getLocalStorage("room");
    let d = getLocalStorage("login");
    let e;
    console.log(getCustomerList);
    console.log(getbookingList);
    console.log(getroomList);
    console.log(d);
    // 로컬스토리지에 값을 넣는 부분 시작
    // setLocalStorage("customer", customerList);
    // setLocalStorage("booking", bookingList);
    // setLocalStorage("room", roomList);
    // setLocalStorage("login", d);
    // 로컬스토리지에 값을 넣는 부분 끝
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let booking = document.querySelector("#HistoryTable > tbody");
    let customerName = document.querySelector("#customerName");
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
                e = {customerCode : code, id : customerTemp.id, password : customerTemp.password, name : customerTemp.name};
                setLocalStorage("login", e);
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
            console.log(temp);
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
    customerPhone.value = login.phone;
    customerBirth.value = login.birth;
    customerAddress.value = login.address;
    customerName.innerHTML = `<p>${login.name}님 반갑습니다.</p>`;
}

function changeInfo() {
    let customerPhone = document.querySelector("#customerPhone");
    let customerBirth = document.querySelector("#customerBirth");
    let customerAddress = document.querySelector("#customerAddress");
    let phoneValue = document.querySelector("#customerPhone > input").value;
    let birthValue = document.querySelector("#customerBirth > input").value;
    let addressValue = document.querySelector("#customerAddress > input").value;
    let btn = document.querySelector("#changeInfo");
    console.log(btn);
    console.log("변경 전 : " + btn.innerHTML);
    if(changeState) {
        customerPhone.innerHTML = `<label>전화번호</label><input type = "text" value = "${phoneValue}"/>`;
        customerPhone.className = "customerClassOpen";
        customerBirth.innerHTML = `<label>생년월일</label><input type = "text" value = "${birthValue}"/>`;
        customerBirth.className = "customerClassOpen";
        customerAddress.innerHTML = `<label>주소</label><input type = "text" value = "${addressValue}"/>`;
        customerAddress.className = "customerClassOpen";
        btn.innerHTML = "수정완료";
        console.log("변경 후 : " + btn);
        changeState = false;
    } else {
        customerPhone.innerHTML = `<label>전화번호</label><input type = "text" value = "${phoneValue}" disabled/>`;
        customerPhone.className = "customerClassClose";
        customerBirth.innerHTML = `<label>생년월일</label><input type = "text" value = "${birthValue}" disabled/>`;
        customerBirth.className = "customerClassClose";
        customerAddress.innerHTML = `<label>주소</label><input type = "text" value = "${addressValue}" disabled/>`;
        customerAddress.className = "customerClassClose";
        btn.innerHTML = "회원수정";
        console.log("변경 후 : " + btn);
        changeState = true;
    }
}

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