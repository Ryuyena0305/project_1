 let changeState = true;
 let writeState = false;

checkLogin();

function checkLogin() {
    let checking = getSessionStorage("login");
    // console.log(checking[0].customerCode);
    if(checking.customerCode > 0) {
        console.log("로그인");
        printBookingList(checking.customerCode);
    } else {
        console.log("비로그인");
        printBookingList(checking.customerCode);
    }
}

// 마이페이지 내용 전체를 출력하는 함수
function printBookingList(customerCode) {
    let getCustomerList = getLocalStorage("customer");
    let getBookingList = getLocalStorage("booking");
    let getRoomList = getLocalStorage("room");
    let getReviewList = getLocalStorage("review");
    let getLoginState = getSessionStorage("login");
    /*
    console.log(getCustomerList);
    console.log(getBookingList);
    console.log(getRoomList);
    console.log(getReviewList);
    console.log(getLoginState);
    */
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
    let myReviews = [];
    for(let index = 0; index < getReviewList.length; index++) {
        if(getReviewList[index].customerCode == customerCode) {
            myReviews.push(getReviewList[index]);
        }
    }
    // 개인정보 출력부분
    if(customerCode != 0) {
        customerName.innerHTML = `<p>${getLoginState.name}님 반갑습니다.</p>`;
        customerPhone.value = getLoginState.phone;
        customerBirth.value = getLoginState.birth;
        customerAddress.value = getLoginState.address;
    } else {
        customerName.innerHTML = `<p>OOO님 반갑습니다.</p>`;
    }
    // 예약내역 테이블로 출력부분
    for(let index = 0; index < getBookingList.length; index++) {
        let bookingTemp = getBookingList[index];
        if(customerCode == bookingTemp.customerCode) {
            let checkIn = bookingTemp.checkIn.split("-");
            // let checkOut = bookingTemp.checkOut.split("-");
            let checkOut = new Date(bookingTemp.checkOut).getTime();
            // console.log("testValue1 : " + testValue1);
            let nowTime = new Date(`${year}-${month}-${day}`).getTime();
            // console.log("testValue2 : " + testValue2);
            let timeValue = nowTime - checkOut;
            // console.log("testValue3 : " + testValue3);
            for(let j = 0; j < getRoomList.length; j++) {
                if(bookingTemp.roomCode == getRoomList[j].roomCode) {
                    html += `
                    <tr>
                        <td style = "text-align : center;">${count}</td>
                        <td style = "text-align : center;">${getRoomList[j].roomName}</td>
                        <td style = "text-align : center;">${getRoomList[j].roomNumber}</td>
                        <td style = "text-align : center;">${bookingTemp.checkIn}</td>
                        <td style = "text-align : center;">${bookingTemp.checkOut}</td>
                    `;
                    // if(checkOut[0] <= year && checkOut[1] <= month && checkOut[2] <= day) {      
                    if(timeValue > 0) {      
                        html += `
                            <td style = "text-align : center;">
                                <button class = "closeBtn" disabled>취소</button>
                            </td>
                        `;
                    //     <td style = "text-align : center;">
                    //         <button class = "cancelBtn">작성</button>
                    //     </td>
                    // </tr>
                    } else {
                        html += `
                            <td style = "text-align : center;">
                                <button class = "cancelBtn" onclick = "cancelBooking(${bookingTemp.bookingCode})">취소</button>
                            </td>
                        `;
                        // <td style = "text-align : center;">
                        //     <button class = "closeBtn" disabled>작성</button>
                        // </td>
                        // </tr>
                    }
                    if(bookingTemp.reviewState) {
                        html += `
                                <td style = "text-align : center;">
                                    <button class = "closeBtn" disabled>작성</button>
                                </td>
                            </tr>
                        `;
                    } else {
                        html += `
                                <td style = "text-align : center;">
                                    <button class = "cancelBtn" onclick = "writeReviewBox('${bookingTemp.roomCode}')">작성</button>
                                </td>
                            </tr>
                        `;
                    }
                    count++;
                }
            }
        }
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
    checkLogin();
    // let checking = getSessionStorage("login");
    // printBookingList(checking.customerCode);
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

// 후기 작성 박스 열고 닫는 함수
function writeReviewBox(roomCode) {
    let writeReviewBox = document.querySelector("#writeReviewBox");
    let estimationNumber = document.querySelector("#checkEstimation > select");
    let writeContent = document.querySelector("#writeContent > input");
    let writeButton = document.querySelector("#writeButton");
    console.dir(writeReviewBox.style.display);
    if(writeReviewBox.style.display == "none") {
        writeReviewBox.style.display = "block";
        estimationNumber.value = "5";
        writeContent.value = "";
        writeState = true;
    } else {
        writeReviewBox.style.display = "none";
        writeState = false;
    }
    writeButton.innerHTML = `<button class = "normalBtn" onclick = "writeReview('${roomCode}')">저장</button>`;
}

// 후기를 작성하는 함수
function writeReview(roomCode) {
    // roomCode = "C-3";
    let now = new Date();
    let year = now.getFullYear(); let month = now.getMonth() + 1; let day = now.getDate();
    let getReviewList = getLocalStorage("review");
    let getLoginState = getSessionStorage("login");
    let checkEstimation = document.querySelector("#checkEstimation");
    let estimationNumber = document.querySelector("#checkEstimation > select");
    let writeContent = document.querySelector("#writeContent > input");
    let reviewTemp = {
        reviewCode: reviewCode, 
        customerCode: getLoginState.customerCode, 
        roomCode: roomCode, 
        content: writeContent.value, 
        date: `${year}-${month}-${day}`, 
        estimation : `${estimationNumber.value}/5`,
    };
    console.log(reviewTemp);
    getReviewList.push(reviewTemp);
    console.log(getReviewList);
    setLocalStorage("review", getReviewList);

}