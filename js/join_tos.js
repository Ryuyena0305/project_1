// let customerList = [
//     {customerCode : 1, id : "test1", password : "1234", name : "유재석", birth : "831205", phone : "010-1111-1111", address : "인천 부평구", clause : true},
//     {customerCode : 2, id : "test2", password : "4567", name : "강호동", birth : "800506", phone : "010-2222-2222", address : "인천 계양구", clause : false},
//     {customerCode : 3, id : "test3", password : "7890", name : "신동엽", birth : "791125", phone : "010-3333-3333", address : "서울 종로구", clause : true},
//     {customerCode : 4, id : "test4", password : "1234", name : "홍길동", birth : "920505", phone : "010-4444-4444", address : "부산 해운대구", clause : false},
//  ];


// 약관동의 함수
function tos(){
    let contBtn1 = document.querySelector('.yn1yes')
    let contBtn2 = document.querySelector('.yn1no')
    let contBtn3 = document.querySelector('.yn2yes')
    let contBtn4 = document.querySelector('.yn2no')

    //console.log(contBtn1);
    //console.log(contBtn2);


    if(contBtn1.checked){
        contBtn1 = true;
    }
    if(contBtn2.checked){
        contBtn2 = false;
    }
    if(contBtn3.checked){
        contBtn3 = true;
    }
    if(contBtn4.checked){
        contBtn4 = false;
    }

    /*
    console.log("-----------------");
    console.log(contBtn1);
    console.log(contBtn2);
    console.log(contBtn3);
    console.log(contBtn4);
    console.log("-----------------");
    */

    // 아무것도 체크하지 않으면 리턴
    if(contBtn1 == null || contBtn2 == null || contBtn3 == null || contBtn4 == null){
        alert('약관에 동의해주시기 바랍니다');
        return;
    }

    if(contBtn1 == true && contBtn3 == true){
        console.log('동의');
        location.href = "./join_info.html";
    }else if(contBtn2 == false && contBtn4 == false){
        alert('약관에 동의해주시기 바랍니다');
        return;
    }



    if(contBtn1 == true && contBtn4 == false){
        alert('약관에 동의해주시기 바랍니다');
        return;
    }
    if(contBtn2 == false && contBtn3 == true){
        alert('약관에 동의해주시기 바랍니다');
        return;
    }
    
  


}


function popup(){
    
}

















// // 전체보기 팝업
// let state = true;

// function popup(clickAll){
//     let popup = document.querySelector('#popupBox')
    
//     for(let i = 0; i <= popup.length -1; i++){
//         if(popup[i]==clickAll){

//             state = false;
//         }
//     }
//     popup.innerHTML = html;
// }