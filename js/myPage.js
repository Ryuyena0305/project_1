let changeState = true;
let writeState = false;
// true : 보임, false : 안보임, default : 안보임
let visibilityState = false;
// true : 보임, false : 안보임, default : 안보임
let cancelReviewState = false;

checkLogin();

// 로그인 여부를 체크하고 출력하는 함수
function checkLogin() {
    let checking = getSessionStorage("login");
    if(checking.customerCode > 0) {
        console.log("로그인");
        printBookingList(checking.customerCode);
    } else {
        console.log("비로그인");
        // printBookingList(checking.customerCode);
        alert("로그인부터 해주세요");
        location.href = "../login.html";
    }
}

// 마이페이지 내용 전체를 출력하는 함수
function printBookingList(customerCode) {
    let getCustomerList = getLocalStorage("customer");
    let getBookingList = getLocalStorage("booking");
    let getRoomList = getLocalStorage("room");
    let getReviewList = getLocalStorage("review");
    let getLoginState = getSessionStorage("login");
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
    // 개인정보 출력부분
    if(customerCode != 0) {
        customerName.innerHTML = `<p>[ ${getLoginState.name}님 반갑습니다. ]</p>`;
        customerPhone.value = getLoginState.phone;
        customerBirth.value = getLoginState.birth;
        customerAddress.value = getLoginState.address;
    } else {
        customerName.innerHTML = `<p>[ OOO님 반갑습니다. ]</p>`;
    }
    // 예약내역 테이블로 출력부분
    for(let index = 0; index < getBookingList.length; index++) {
        let bookingTemp = getBookingList[index];
        if(customerCode == bookingTemp.customerCode) {
            let checkIn = bookingTemp.checkIn.split("-");
            let checkOut = new Date(bookingTemp.checkOut).getTime();
            let nowTime = new Date(`${year}-${month}-${day}`).getTime();
            // 현재날짜 - 퇴실날짜
            let timeValue = nowTime - checkOut;
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
                    // #region 예약 취소 버튼 생성 부분   
                    if(timeValue > 0) {      
                        html += `
                            <td style = "text-align : center;">
                                <button class = "closeBtn" disabled>취소</button>
                            </td>
                        `;
                    } else {
                        html += `
                            <td style = "text-align : center;">
                                <button class = "cancelBtn" onclick = "cancelBooking(${bookingTemp.bookingCode})">취소</button>
                            </td>
                        `;
                    }
                    // #endregion 예약 취소 버튼 생성 부분

                    // #region 후기 작성 버튼 생성 부분
                    if(bookingTemp.reviewState) {
                        html += `
                                <td style = "text-align : center;">
                                    <button class = "closeBtn" disabled>작성</button>
                                </td>
                            </tr>
                        `;
                    } else if((checkOut - nowTime) > 0) {
                        // 퇴실날짜 - 현재날짜
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
                    // #endregion 후기 작성 버튼 생성 부분
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
    if(changeState) {
        let state = confirm("회원정보를 수정하시겠습니까?");
        if(state) {
            customerPhone.innerHTML = `<label>전화번호</label><input type = "text" placeholder = "${phoneValue}" value = "${phoneValue}"/>`;
            customerPhone.className = "customerClassOpen";
            customerBirth.innerHTML = `<label>생년월일</label><input type = "text" placeholder = "${birthValue}" value = "${birthValue}"/>`;
            customerBirth.className = "customerClassOpen";
            customerAddress.innerHTML = `<label>주소</label><input type = "text" placeholder = "${addressValue}" value = "${addressValue}"/>`;
            customerAddress.className = "customerClassOpen";
            customerName.innerHTML = `<label>이름</label><input type = "text" placeholder = "${getLoginState.name}" value = "${getLoginState.name}"/>`;
            customerName.className = "customerClassAppear";
            customerPassword.innerHTML = `<label>비밀번호</label><input id = "pwInput" type = "password"/><span id = "visibility" onclick = "changeVisibility()"></span>`;
            customerPassword.className = "customerClassAppear";
            btn.innerHTML = "수정완료";
            changeState = false;
        }
    } else {
        let state = confirm("수정된 정보를 저장하시겠습니까?");
        if(state) {
            let newPhone = phoneValue.trim();
            let newBirth = birthValue.trim();
            let newAddress = addressValue.trim();
            let newName = nameValue.trim();
            let newPassword = passwordValue.trim();
            if(newPhone != "" && newBirth != "" && newAddress != "" && newName != "") {
                customerPhone.innerHTML = `<label>전화번호</label><input type = "text" value = "${newPhone}" disabled/>`;
                customerPhone.className = "customerClassClose";
                customerBirth.innerHTML = `<label>생년월일</label><input type = "text" value = "${newBirth}" disabled/>`;
                customerBirth.className = "customerClassClose";
                customerAddress.innerHTML = `<label>주소</label><input type = "text" value = "${newAddress}" disabled/>`;
                customerAddress.className = "customerClassClose";
                customerName.innerHTML = `<label>이름</label><input type = "text" value = ""/>`;
                customerName.className = "customerClassDisappear";
                customerPassword.innerHTML = `<label>비밀번호</label><input id = "pwInput" type = "password"/>`;
                customerPassword.className = "customerClassDisappear";
                cName.innerHTML = `<p>[ ${nameValue}님 반갑습니다. ]</p>`;
                btn.innerHTML = "회원수정";
                for(let index = 0; index < getCustomerList.length; index++) {
                    // 이후 작성 : 회원정보수정을 하면 수정한 값을 로컬스토리지에 넣기
                    let customer = getCustomerList[index];
                    if(getLoginState.customerCode == customer.customerCode) {
                        customer.phone = newPhone;
                        customer.birth = newBirth;
                        customer.address = newAddress;
                        customer.name = newName;
                        // 회원수정이 완료되면 로그아웃 시키고 메인페이지로 넘어가기 구현
                        if(newPassword != "" && newPassword != customer.password) {
                            customer.password = newPassword;
                            getLoginState = customer;
                            setSessionStorage("login", {customerCode : 0, id : "", password : "", name : "", birth : "", phone : "", address : "", clause : false});
                            setLocalStorage("customer", getCustomerList);
                            location.href = "./index.html";
                        } else {
                            getLoginState = customer;
                            setSessionStorage("login", getLoginState);
                            setLocalStorage("customer", getCustomerList);
                        }
                    }
                }
                changeState = true;
            } else {
                alert("비밀번호를 제외하고 전부 값을 입력해주세요.");
            }
        }
    }
}

// 마이페이지에서 비밀번호 변경시 비밀번호 visible
function changeVisibility() {
    let pwInput = document.querySelector("#pwInput");
    let visibility = document.querySelector("#visibility");
    if(visibilityState) {
        pwInput.type = "password";
        visibility.style.marginLeft = "5px";
        visibility.style.display = "inline-block";
        visibility.style.background = "url(../images/visibility_off.svg) no-repeat";
        visibility.style.backgroundSize = "contain";
        visibility.style.width = "30px";
        visibility.style.height = "30px";
        visibility.style.cursor = "pointer";
        visibilityState = false;
    } else {
        pwInput.type = "text";
        visibility.style.marginLeft = "5px";
        visibility.style.display = "inline-block";
        visibility.style.background = "url(../images/visibility.svg) no-repeat";
        visibility.style.backgroundSize = "contain";
        visibility.style.width = "30px";
        visibility.style.height = "30px";
        visibility.style.cursor = "pointer";
        visibilityState = true;
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
    let state = confirm("후기를 작성하시겠습니까?");
    if(state) {
        let writeReviewBox = document.querySelector("#writeReviewBox");
        let estimationNumber = document.querySelector("#checkEstimation > select");
        let writeContent = document.querySelector("#writeContent > input");
        let wcBtns = document.querySelector("#wcBtns");
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
        wcBtns.innerHTML = `
            <button class = "normalBtn" onclick = "writeReview('${roomCode}')">저장</button>
            <button class = "normalBtn" onclick = "cancelReview()">취소</button>
        `;
    }
}

// 후기를 작성하는 함수
function writeReview(roomCode) {
    let state = confirm("후기를 작성하시겠습니까?");
    if(state) {
        let now = new Date();
        let year = now.getFullYear(); let month = now.getMonth() + 1; let day = now.getDate();
        let getReviewList = getLocalStorage("review");
        let getBookingList = getLocalStorage("booking");
        let getLoginState = getSessionStorage("login");
        let estimationNumber = document.querySelector("#checkEstimation > select");
        let writeReviewBox = document.querySelector("#writeReviewBox");
        let writeContent = document.querySelector("#writeContent > input");
        // #region 작성한 내용이 공백일 경우 작성하지 못하게 하는 부분
        let content = writeContent.value;
        content = content.trim();
        // #endregion 작성한 내용이 공백일 경우 작성하지 못하게 하는 부분
        if(content != "") {
            let reviewCode = getReviewList[getReviewList.length - 1].reviewCode + 1;
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
            for(let index = 0; index < getBookingList.length; index++) {
                if(getLoginState.customerCode == getBookingList[index].customerCode && roomCode == getBookingList[index].roomCode) {
                    getBookingList[index].reviewState = true;
                    setLocalStorage("booking", getBookingList);
                }
            }
            writeReviewBox.style.display = "none";
            printBookingList(getLoginState.customerCode);
        } else {
            alert("내용을 입력해주세요 (공백 불가)");
            writeContent.value = "";
        }
    }
}

// 후기 작성을 취소하는 함수
function cancelReview() {
    let state = confirm("정말 취소하시겠습니까?");
    if(state) {
        let writeReviewBox = document.querySelector("#writeReviewBox");
        let estimationNumber = document.querySelector("#checkEstimation > select");
        let writeContent = document.querySelector("#writeContent > input");
        estimationNumber.value = "5";
        writeContent.value = "";
        writeReviewBox.style.display = "none";
    }
}