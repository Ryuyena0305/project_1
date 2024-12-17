currentIndex = 1;

function slide() {
    let mainSlide = document.querySelector("#mainSlide");
    let moveImage = document.querySelector("#moveImage");
    let html = ``;
    currentIndex++;
    if(currentIndex < 3) {
        html = `<img src = "./images/main_slide_0${currentIndex}.jpg" style = "width : 100%;"/>`;
    } else {
        html = `<img src = "./images/main_slide_0${currentIndex}.jpg" style = "width : 100%;"/>`;
        currentIndex = 0;
    }
    // console.log(html);
    moveImage.innerHTML = html;
}

setInterval(slide, 3000);