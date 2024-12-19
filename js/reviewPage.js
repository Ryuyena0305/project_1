// true : 열린상태
let totalState = true;
let standardState = true;
let deluxeState = true;
let suiteState = true;
// false : 열린상태
let totalArrowState = false;
let standardArrowState = false;
let deluxeArrowState = false;
let suiteArrowState = false;

// 전체 Open Close 함수
function totalCloseOpen() {
    let standardRoom = document.querySelector("#standardRoom");
    let standardSingle = document.querySelector("#standardSingle");
    let standardDouble = document.querySelector("#standardDouble");
    let standardTwin = document.querySelector("#standardTwin");
    let standardTriple = document.querySelector("#standardTriple");
    let deluxeRoom = document.querySelector("#deluxeRoom");
    let deluxeDouble = document.querySelector("#deluxeDouble");
    let deluxeTriple = document.querySelector("#deluxeTriple");
    let suiteRoom = document.querySelector("#suiteRoom");
    let suiteJunior = document.querySelector("#suiteJunior");
    let suitePremier = document.querySelector("#suitePremier");
    let suiteExecutive = document.querySelector("#suiteExecutive");
    let suiteTjoeun = document.querySelector("#suiteTjoeun");
    let standardArrowBox = document.querySelector("#standardArrowBox");
    let deluxeArrowBox = document.querySelector("#deluxeArrowBox");
    let suiteArrowBox = document.querySelector("#suiteArrowBox");
    let standards = [standardSingle, standardDouble, standardTwin, standardTriple];
    let deluxes = [deluxeDouble, deluxeTriple];
    let suites = [suiteJunior, suitePremier, suiteExecutive, suiteTjoeun];
    if(totalState) {
        standardRoom.style.display = "none";
        deluxeRoom.style.display = "none";
        suiteRoom.style.display = "none";
        standardArrowBox.style.display = "none";
        deluxeArrowBox.style.display = "none";
        suiteArrowBox.style.display = "none";
        for(let index = 0; index < standards.length; index++) {
            standards[index].style.display = "none";
        }
        for(let index = 0; index < deluxes.length; index++) {
            deluxes[index].style.display = "none";
        }
        for(let index = 0; index < suites.length; index++) {
            suites[index].style.display = "none";
        }
        totalState = false;
    } else {
        standardRoom.style.display = "block";
        deluxeRoom.style.display = "block";
        suiteRoom.style.display = "block";
        standardArrowBox.style.display = "block";
        deluxeArrowBox.style.display = "block";
        suiteArrowBox.style.display = "block";
        if(standardState) {
            for(let index = 0; index < standards.length; index++) {
                standards[index].style.display = "block";
            }
        }
        if(deluxeState) {
            for(let index = 0; index < deluxes.length; index++) {
                deluxes[index].style.display = "block";
            }
        }
        if(suiteState) {
            for(let index = 0; index < suites.length; index++) {
                suites[index].style.display = "block";
            }
        }
        totalState = true;
    }
}
function changeTotalArrow() {
    let totalArrow = document.querySelector("#totalArrow");
    if(totalArrowState) {
        totalArrow.src = "../images/arrow_drop_down.svg";
        totalArrowState = false;
        totalCloseOpen();
    } else {
        totalArrow.src = "../images/arrow_drop_up.svg";
        totalArrowState = true;
        totalCloseOpen();
    }
}

// 스탠다드 Open Close 함수
function standardCloseOpen() {
    let standardSingle = document.querySelector("#standardSingle");
    let standardDouble = document.querySelector("#standardDouble");
    let standardTwin = document.querySelector("#standardTwin");
    let standardTriple = document.querySelector("#standardTriple");
    let standards = [standardSingle, standardDouble, standardTwin, standardTriple];
    if(standardState) {
        for(let index = 0; index < standards.length; index++) {
            standards[index].style.display = "none";
        }
        standardState = false;
    } else {
        for(let index = 0; index < standards.length; index++) {
            standards[index].style.display = "block";
        }
        standardState = true;
    }
}
function changeStandardArrow() {
    let standardArrow = document.querySelector("#standardArrow");
    if(standardArrowState) {
        standardArrow.src = "../images/arrow_drop_down.svg";
        standardArrowState = false;
        standardCloseOpen();
    } else {
        standardArrow.src = "../images/arrow_drop_up.svg";
        standardArrowState = true;
        standardCloseOpen();
    }
}
// 디럭스 Open Close 함수
function deluxeCloseOpen() {
    let deluxeDouble = document.querySelector("#deluxeDouble");
    let deluxeTriple = document.querySelector("#deluxeTriple");
    let deluxes = [deluxeDouble, deluxeTriple];
    if(deluxeState) {
        for(let index = 0; index < deluxes.length; index++) {
            deluxes[index].style.display = "none";
        }
        deluxeState = false;
    } else {
        for(let index = 0; index < deluxes.length; index++) {
            deluxes[index].style.display = "block";
        }
        deluxeState = true;
    }
}
function changeDeluxeArrow() {
    let deluxeArrow = document.querySelector("#deluxeArrow");
    if(deluxeArrowState) {
        deluxeArrow.src = "../images/arrow_drop_down.svg";
        deluxeArrowState = false;
        deluxeCloseOpen();
    } else {
        deluxeArrow.src = "../images/arrow_drop_up.svg";
        deluxeArrowState = true;
        deluxeCloseOpen();
    }
}

// 스위트 Open Close 함수
function suiteCloseOpen() {
    let suiteJunior = document.querySelector("#suiteJunior");
    let suitePremier = document.querySelector("#suitePremier");
    let suiteExecutive = document.querySelector("#suiteExecutive");
    let suiteTjoeun = document.querySelector("#suiteTjoeun");
    let suites = [suiteJunior, suitePremier, suiteExecutive, suiteTjoeun];
    if(suiteState) {
        for(let index = 0; index < suites.length; index++) {
            suites[index].style.display = "none";
        }
        suiteState = false;
    } else {
        for(let index = 0; index < suites.length; index++) {
            suites[index].style.display = "block";
        }
        suiteState = true;
    }
}
function changeSuiteArrow() {
    let suiteArrow = document.querySelector("#suiteArrow");
    if(suiteArrowState) {
        suiteArrow.src = "../images/arrow_drop_down.svg";
        suiteArrowState = false;
        suiteCloseOpen();
    } else {
        suiteArrow.src = "../images/arrow_drop_up.svg";
        suiteArrowState = true;
        suiteCloseOpen();
    }
}

printReview();
// 후기목록 출력
function printReview() {
    let getReviewList = getLocalStorage("review");
    let tbody = document.querySelector("tbody");
    let html = ``;
    console.log(getReviewList);
    for(let index = 0; index < getReviewList.length; index++) {
        let reviewTemp = getReviewList[index];
        html += `
        <tr>
            <td>${index + 1}</td>
            <td>${reviewTemp.content}</td>
            <td>${reviewTemp.date}</td>
            <td>${reviewTemp.estimation}</td>
        </tr>
        `;
    }
    tbody.innerHTML = html;
}