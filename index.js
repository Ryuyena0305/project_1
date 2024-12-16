paddingLeftList = [16, 5, 35, 35, 50, 58];
imageList = [
    "main_slide_01.jpg", 
    "main_slide_02.jpg", 
    "main_slide_03.jpg"
];
currentIndex = 1;

function onMenu(index) {
    // console.log(`실행 : ${index}`)
    let header = document.querySelector("#header");
    let sBox = document.querySelector("#sBox");
    let menuList = document.querySelectorAll(".menuList");
    let loginButton = document.querySelector("#loginButton");
    header.style.backgroundColor = "black";
    sBox.style.display = "block";
    loginButton.style.backgroundColor = "black";
    loginButton.style.color = "white";
    loginButton.style.border = "solid 2px white";
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

function closeMenu() {
    let header = document.querySelector("#header");
    let sBox = document.querySelector("#sBox");
    let menuList = document.querySelectorAll(".menuList");
    let subMenu = document.querySelectorAll(".subMenu");
    // console.log(subMenu);
    let loginButton = document.querySelector("#loginButton");
    header.style.backgroundColor = "white";
    sBox.style.display = "none";
    loginButton.style.backgroundColor = "white";
    loginButton.style.color = "#2E2E2E";
    loginButton.style.border = "solid 2px #2E2E2E";
    for(let i = 0; i < menuList.length; i++) {
        menuList[i].style.color = "#5f6062";
        subMenu[i].style.display = "none";
    }
}

function slide() {
    let mainSlide = document.querySelector("#mainSlide");
    let moveImage = document.querySelector("#moveImage");
    let html = ``;
    currentIndex++;
    if(currentIndex < 3) {
        html = `<img id = "imageOut" src = "./images/main_slide_0${currentIndex}.jpg" style = "width : 100%;"/>`;
    } else {
        html = `<img id = "imageOut" src = "./images/main_slide_0${currentIndex}.jpg" style = "width : 100%;"/>`;
        currentIndex = 0;
    }
    console.log(html);
    moveImage.innerHTML = html;
}

setInterval(slide, 3000);

// function slide() {
//     let mainSlide = document.querySelector("#mainSlide");
//     let moveImage = document.querySelector("#moveImage");
//     // let slideImage = document.querySelectorAll("#mainSlide > #moveImage > img");
//     // let slideImage = document.querySelectorAll("#mainSlide > #moveImage > .slideImg");
//     // console.log(slideImage);
//     console.log(moveImage);
//     console.log(moveImage.offsetWidth);
//     console.log(mainSlide.offsetWidth);
//     let temp = mainSlide.offsetWidth;
//     currentIndex++;
//     moveImage.style.transition = "all 0.6s";
//     if(currentIndex < 3) {
//         moveImage.style.transform = `translateX(-${temp * currentIndex}px)`;
//     } else {
//         moveImage.style.transform = `translateX(-${0}px)`;
//         currentIndex = 0;
//     }
// }
