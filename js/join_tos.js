let customerList = [
    {customerCode : 1, id : "test1", password : "1234", name : "유재석", birth : "831205", phone : "010-1111-1111", address : "인천 부평구", clause : true},
    {customerCode : 2, id : "test2", password : "4567", name : "강호동", birth : "800506", phone : "010-2222-2222", address : "인천 계양구", clause : false},
    {customerCode : 3, id : "test3", password : "7890", name : "신동엽", birth : "791125", phone : "010-3333-3333", address : "서울 종로구", clause : true},
    {customerCode : 4, id : "test4", password : "1234", name : "홍길동", birth : "920505", phone : "010-4444-4444", address : "부산 해운대구", clause : false},
 ];


// 약관동의 함수
function tos(){
    let contBtn = document.querySelector('.yn1').value
    console.log(contBtn);


    if(contBtn == "yes"){
        
    }else{
        clause = false
        return;
    }
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