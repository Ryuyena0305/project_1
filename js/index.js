paddingLeftList = [16, 5, 35, 35, 50, 58];
imageList = [
    "main_slide_01.jpg", 
    "main_slide_02.jpg", 
    "main_slide_03.jpg"
];

// 최초로 index.html파일이 열리면 작동하는 함수(data.js)
totalStorage();
// 로그인인지 비로그인인지 확인하는 함수(index.js)
checkLogin();

function checkLogin() {
    let getLoginState = getSessionStorage("login");
    console.log(getLoginState);
    if(getLoginState.customerCode > 0) {
        let loginButton = document.querySelector("#loginButton");
        loginButton.onmouseover = openMyPageBtn;
        loginButton.onmouseleave = closeMyPageBtn;
        loginButton.innerHTML = `<a onclick = "logInOut(true)">Logout</a><div id = "hoverBox1" onmouseover = "openMyPageBtn()" onmouseleave = "closeMyPageBtn()"><a href = "./myPage.html">마이페이지</a></div>`;
    } else if(getLoginState.customerCode == 0) {
        loginButton.onmouseover = null;
        loginButton.onmouseleave = null;
        loginButton.innerHTML = `<a onclick = "logInOut(false)">Login</a>`;
    }
}

// #region 헤더 관련 부분

// 헤더 호버시 작동
function onMenu(index) {
    let header = document.querySelector("#header");
    let sBox = document.querySelector("#sBox");
    let menuList = document.querySelectorAll(".menuList");
    let loginButton = document.querySelector("#loginButton");
    header.style.backgroundColor = " #81674e";
    sBox.style.display = "block";
    loginButton.style.backgroundColor = " #81674e";
    loginButton.style.color = "white";
    loginButton.style.border = "solid 2px white";
    logo.style.background = "url(../images/logo_brown.png) no-repeat;";
    for(let i = 0; i < menuList.length; i++) {
        let menu = document.querySelector(`#list${i} > .subMenu`);
        let under = document.querySelector(`#list${i} > .underLine`);
        menuList[i].style.color = "white";
        if(menuList[i].id == `list${index}`) {
            menu.style.display = "block";
            menu.style.paddingLeft = `${paddingLeftList[i]}%`;
        } else {
            menu.style.display = "none";
        }
    }
}
// 헤더 기본 상태
function closeMenu() {
    let header = document.querySelector("#header");
    let sBox = document.querySelector("#sBox");
    let menuList = document.querySelectorAll(".menuList");
    let subMenu = document.querySelectorAll(".subMenu");
    let loginButton = document.querySelector("#loginButton");
    let getLoginState = getSessionStorage("#login");
    header.style.backgroundColor = "white";
    sBox.style.display = "none";
    loginButton.style.backgroundColor = "";
    loginButton.style.color = "";
    loginButton.style.border = "";
    if(getLoginState.customerCode > 0) {
        loginButton.innerHTML = `<a onclick = "logInOut(true)">Logout</a><div id = "hoverBox1" onmouseover = "openMyPageBtn()" onmouseleave = "closeMyPageBtn()"><a href = "./myPage.html">마이페이지</a></div>`;    
    } else if(getLoginState.customerCode == 0) {
        loginButton.innerHTML = `<a onclick = "logInOut(false)">Login</a>`;
    }
    for(let i = 0; i < menuList.length; i++) {
        menuList[i].style.color = "#5f6062";
        subMenu[i].style.display = "none";
    }
}

// #endregion 헤더 관련 부분

// #region 로그인 관련 함수

function logInOut(loginState) {
    if(loginState) {
        let state = confirm("정말 로그아웃을 하시겠습니까?");
        if(state) {
            let getLoginState = getSessionStorage("login");
            getLoginState = {
                customerCode : 0, 
                id : "", 
                password : "", 
                name : "", 
                birth : "", 
                phone : "", 
                address : "", 
                clause : false
            };
            setSessionStorage("login", getLoginState);
            location.href = "./index.html";
        }
    } else {
        location.href = "./login.html";
    }
}

// #endregion 로그인 관련 함수

// #region 마이페이지 관련 함수

function openMyPageBtn() {
    console.log("실행1");
    let hoverBox = document.querySelector("#hoverBox1");
    hoverBox.style.display = "block";
}
function closeMyPageBtn() {
    console.log("실행2");
    let hoverBox = document.querySelector("#hoverBox1");
    hoverBox.style.display = "none";
}

// #endregion 마이페이지 관련 함수

// #region 예약페이지 관련 함수

// 로그인상태에 따른 예약페이지
function nextBookingPage() {
    let getLoginState = getSessionStorage("login");
    if(getLoginState.customerCode == 0) {
        alert("로그인 후 예약이 가능합니다.");
        location.href = "./login.html";
    } else if(getLoginState.customerCode > 0) {
        location.href = "./reservation.html";
    }
}

// #endregion 예약 페이지 관련 함수