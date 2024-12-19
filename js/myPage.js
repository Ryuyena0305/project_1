customerList = [
    {customerCode : 1, id : "test1", password : "1234", name : "유재석", birth : "831205", phone : "010-1111-1111", address : "인천 부평구", clause : true},
    {customerCode : 2, id : "test2", password : "4567", name : "강호동", birth : "800506", phone : "010-2222-2222", address : "인천 부평구", clause : false},
    {customerCode : 3, id : "test3", password : "7890", name : "신동엽", birth : "850712", phone : "010-3333-3333", address : "인천 부평구", clause : true},
];

bookingList = [
	{bookingCode : 1, customerCode : 1, roomCode : "A-1", checkIn : "2024-02-14", checkOut : "2024-02-16"},
	{bookingCode : 2, customerCode : 2, roomCode : "A-5", checkIn : "2024-03-15", checkOut : "2024-03-20"},
	{bookingCode : 3, customerCode : 1, roomCode : "A-2", checkIn : "2024-03-17", checkOut : "2024-03-18"},
	{bookingCode : 4, customerCode : 2, roomCode : "B-1", checkIn : "2024-03-20", checkOut : "2024-03-22"},
	{bookingCode : 5, customerCode : 3, roomCode : "A-7", checkIn : "2024-03-25", checkOut : "2024-03-28"},
	{bookingCode : 6, customerCode : 4, roomCode : "C-4", checkIn : "2024-03-27", checkOut : "2024-04-01"},
	{bookingCode : 7, customerCode : 2, roomCode : "B-3", checkIn : "2024-05-17", checkOut : "2024-05-20"},
	{bookingCode : 8, customerCode : 1, roomCode : "C-1", checkIn : "2024-06-06", checkOut : "2024-06-08"},
	{bookingCode : 9, customerCode : 1, roomCode : "B-1", checkIn : "2024-06-06", checkOut : "2024-06-07"},
	{bookingCode : 10, customerCode : 3, roomCode : "B-3", checkIn : "2024-10-10", checkOut : "2024-10-25"},
	{bookingCode : 11, customerCode : 3, roomCode : "C-2", checkIn : "2024-12-01", checkOut : "2024-12-05"},
];

roomList = [
	{roomCode : "A-1", roomName : "스탠다드 싱글", roomPrice : 210000, headCount : 1, roomNumber : 101},
	{roomCode : "A-2", roomName : "스탠다드 싱글", roomPrice : 210000, headCount : 1, roomNumber : 102},
	{roomCode : "A-3", roomName : "스탠다드 싱글", roomPrice : 210000, headCount : 1, roomNumber : 103},
	{roomCode : "A-4", roomName : "스탠다드 더블", roomPrice : 231000, headCount : 2, roomNumber : 104},
	{roomCode : "A-5", roomName : "스탠다드 더블", roomPrice : 231000, headCount : 2, roomNumber : 105},
	{roomCode : "A-6", roomName : "스탠다드 트윈", roomPrice : 231000, headCount : 2, roomNumber : 106},
	{roomCode : "A-7", roomName : "스탠다드 트리플", roomPrice : 286000, headCount : 3, roomNumber : 107},
	{roomCode : "B-1", roomName : "디럭스 더블", roomPrice : 275000, headCount : 2, roomNumber : 201},
	{roomCode : "B-2", roomName : "디럭스 더블", roomPrice : 275000, headCount : 2, roomNumber : 202},
	{roomCode : "B-3", roomName : "디럭스 트리플", roomPrice : 330000, headCount : 3, roomNumber : 203},
	{roomCode : "B-4", roomName : "디럭스 트리플", roomPrice : 330000, headCount : 3, roomNumber : 204},
	{roomCode : "C-1", roomName : "주니어 스위트", roomPrice : 385000, headCount : 2, roomNumber : 301},
	{roomCode : "C-2", roomName : "프리미어 스위트", roomPrice : 473000, headCount : 2, roomNumber : 302},
	{roomCode : "C-3", roomName : "이그제큐티브 스위트", roomPrice : 572000, headCount : 2, roomNumber : 303},
	{roomCode : "C-4", roomName : "아미드 스위트", roomPrice : 660000, headCount : 2, roomNumber : 304},
];

reviewList = [
    {reviewCode : 1, roomCode : "A-1", content : "방이 깔끔하고 좋아요", date : "2024-02-17", estimation : "5/5"},
    {reviewCode : 2, roomCode : "A-5", content : "좋아요. 침대가 푹신합니다.", date : "2024-03-21", estimation : "4/5"},
    {reviewCode : 3, roomCode : "C-4", content : "가격 대비 시설이 별로네요.", date : "2024-04-02", estimation : "2/5"},
    {reviewCode : 4, roomCode : "B-3", content : "자식들이 깔끔하고 좋다고 하네요.", date : "2024-05-21", estimation : "4/5"},
    {reviewCode : 5, roomCode : "B-1", content : "침구류가 깔끔해요.", date : "2024-06-08", estimation : "4/5"},
    {reviewCode : 6, roomCode : "C-2", content : "가격 대비 서비스가 별로이고 TV가 고장났는지 안켜져요.", date : "2024-12-06", estimation : "1/5"},
 ];
 
let changeState = true;

checkLogin();

function checkLogin() {
    let checking = getSessionStorage("login");
    // console.log(checking[0].customerCode);
    if(checking.customerCode > 0) {
        console.log("로그인");
        printBookingList(checking.customerCode);
    } else {
        console.log("비로그인");
        printBookingList(0);
    }
}

// 마이페이지 내용 전체를 출력하는 함수
function printBookingList(customerCode) {
    let getCustomerList = getLocalStorage("customer");
    let getbookingList = getLocalStorage("booking");
    let getroomList = getLocalStorage("room");
    let getreviewList = getLocalStorage("review");
    let getLoginState = getSessionStorage("login");
    console.log(getCustomerList);
    console.log(getbookingList);
    console.log(getroomList);
    console.log(getreviewList);
    console.log(getLoginState);
    // 로컬스토리지에 값을 넣는 부분 시작
    setLocalStorage("customer", customerList);
    setLocalStorage("booking", bookingList);
    setLocalStorage("room", roomList);
    setLocalStorage("review", reviewList);
    //setSessionStorage("login", {customerCode : 1, id : "test1", password : "1234", name : "유재석", birth : "831205", phone : "010-1111-1111", address : "인천 부평구", clause : true});
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
    let count = 1;
    if(customerCode != 0) {
        customerName.innerHTML = `<p>${getLoginState.name}님 반갑습니다.</p>`;
        customerPhone.value = getLoginState.phone;
        customerBirth.value = getLoginState.birth;
        customerAddress.value = getLoginState.address;
    } else {
        customerName.innerHTML = `<p>OOO님 반갑습니다.</p>`;
    }
    // 예약내역 테이블로 출력하기
    for(let index = 0; index < getbookingList.length; index++) {
        let bookingTemp = getbookingList[index];
        let customer;
        let room;
        if(customerCode == bookingTemp.customerCode) {
            let checkIn = bookingTemp.checkIn.split("-");
            let checkOut = bookingTemp.checkOut.split("-");
            for(let j = 0; j < getroomList.length; j++) {
                if(bookingTemp.roomCode == getroomList[j].roomCode) {
                    html += `
                    <tr>
                        <td style = "text-align : center;">${count}</td>
                        <td style = "text-align : center;">${getroomList[j].roomName}</td>
                        <td style = "text-align : center;">${getroomList[j].roomNumber}</td>
                        <td style = "text-align : center;">${bookingTemp.checkIn}</td>
                        <td style = "text-align : center;">${bookingTemp.checkOut}</td>
                    `;
                    if(checkOut[0] < year || checkOut[1] < month || checkOut[2] < day) {
                        html += `
                            <td style = "text-align : center;">
                                <button class = "cancelBtn">작성</button>
                            </td>
                            <td style = "text-align : center;">
                                <button class = "closeBtn" disabled>취소</button>
                            </td>
                        </tr>
                        `;
                    } else {
                        html += `
                            <td style = "text-align : center;">
                                <button class = "closeBtn" disabled>작성</button>
                            </td>
                            <td style = "text-align : center;">
                                <button class = "cancelBtn" onclick = "cancelBooking(${bookingTemp.bookingCode})">취소</button>
                            </td>
                        </tr>
                        `;
                    }
                }
            }
        }
        count++;
        setSessionStorage("login", getLoginState);
        booking.innerHTML = html;
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
    let getLoginState = getSessionStorage("login");
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
            customerName.innerHTML = `<label>이름</label><input type = "text" value = "${getLoginState.name}"/>`;
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
                if(getLoginState.customerCode == customer.customerCode) {
                    customer.phone = phoneValue;
                    customer.birth = birthValue;
                    customer.address = addressValue;
                    customer.name = nameValue;
                    getLoginState.name = nameValue;
                    // 회원수정이 완료되면 로그아웃 시키고 메인페이지로 넘어가기 구현
                    if(passwordValue != "" && passwordValue != customer.password) {
                        customer.password = passwordValue;
                        setSessionStorage("login", {customerCode : 0, id : "", password : "", name : "", birth : "", phone : "", address : "", clause : false});
                        setLocalStorage("customer", getCustomerList);
                        location.href = "./index.html";
                    } else {
                        setSessionStorage("login", getLoginState);
                        setLocalStorage("customer", getCustomerList);
                    }
                }
            }
            // console.log("변경 후 : " + btn);
            changeState = true;
        }
    }
}

// 예약을 삭제하는 함수
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
    let checking = getSessionStorage("login");
    printBookingList2(checking.customerCode);
}

//회원정보를 탈퇴하는 함수
function deleteCustomer() {
    let state = confirm("정말 탈퇴하시겠습니까?");
    if(state) {
        let getCustomerList = getLocalStorage("customer");
        let getLoginState = getSessionStorage("login");
        console.log(getCustomerList);
        for(let index = 0; index < getCustomerList.length; index++) {
            let temp = getCustomerList[index];
            console.log("temp : " + temp.customerCode);
            console.log("getLoginState : " + getLoginState.customerCode);
            if(temp.customerCode == getLoginState.customerCode) {
                console.log("실행");
                getCustomerList.splice(index, 1);
                console.log(getCustomerList);
                setLocalStorage("customer", getCustomerList);
                setSessionStorage("login", {customerCode : 0, id : "", password : "", name : "", birth : "", phone : "", address : "", clause : false});
                break;
            }
        }
        location.href = "./index.html";
    }
}