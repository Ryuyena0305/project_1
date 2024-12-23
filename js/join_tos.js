// 약관동의 함수

// 전체체크
function checkAll(){
    let all = document.querySelector('.all').checked // 체크된 상태 가져오기 true/false
    let contBtn1 = document.querySelector('.yn1yes')
    let contBtn2 = document.querySelector('.yn1no')
    let contBtn3 = document.querySelector('.yn2yes')
    let contBtn4 = document.querySelector('.yn2no')


    if(all){ // all이 체크되면 true
        // all이 체크되면 1번에 동의함, 2번에 동의함이 체크(true)됨
        contBtn1.checked=true;
        contBtn3.checked=true;

        contBtn2.checked=false;
        contBtn4.checked=false;

    }else{
        contBtn1.checked=false;
        contBtn3.checked=false;

        contBtn2.checked=false;
        contBtn4.checked=false;
    }

}

// 전체체크 풀기
function checkNot(){
    let contBtn1 = document.querySelector('.yn1yes').checked
    let contBtn2 = document.querySelector('.yn1no').checked
    let contBtn3 = document.querySelector('.yn2yes').checked
    let contBtn4 = document.querySelector('.yn2no').checked
    let all = document.querySelector('.all')

    if(contBtn1 == true && contBtn3 == true){
        all.checked=true;
    }
    if(contBtn2){
        all.checked=false;
    }
    if(contBtn4){
        all.checked=false;
    }
}


// 다음페이지
function next(){

    let contBtn1 = document.querySelector('.yn1yes')
    let contBtn3 = document.querySelector('.yn2yes')

    if(contBtn1.checked && contBtn3.checked ){
        location.href = "./join_info.html";
    }else{
        alert("약관에 동의해주시기 바랍니다.")
    }
}

