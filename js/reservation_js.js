

/*객실예약 옆 roomlist 출력 */
let check_roomcode = null;

function check(roomcode) {
    check_roomcode = roomcode;
    console.log(check_roomcode);
    return roomcode

}
function choose_room(roomcode) {
    check_roomcode = roomcode;
    let chooseRoom = document.querySelector('#check_roomcode');

    let html = '';
    html += `${check_roomcode}`;
    chooseRoom.innerHTML = html;

return roomcode;
}



/* document.querySelector로 숫자 바뀌게 설정*/
let peopleNum = 1;
let childNum= 0;
function peopleNumPrint(){ 
    let div1 = document.querySelector('#number_con2') ;
    let div2 = document.querySelector('#number_con3') ;
    let html1 = `${peopleNum}`;
    let html2 = `${childNum}`;
    div1.innerHTML = html1;
    div2.innerHTML = html2;
 console.log(typeof html1);
} 
peopleNumPrint();
/*성인 아동 인원수 조절*/

function peopleNumPlus(changeNum ){ 
    if( peopleNum==3 ){   peopleNum==3;   }
    else{
        peopleNum += changeNum;
    } 
    peopleNumPrint();  
    return; 
} 
function peopleNumMinus( changeNum ){ 

    if( peopleNum <=1 ) {    peopleNum=1;   }
    else{
        peopleNum -= changeNum;
    }

    peopleNumPrint();  
    return; 
} 
function childNumPlus( changeNum ){ 

    if( childNum==2 ){   childNum==2;   }
    else{
        childNum += changeNum;
    }
    peopleNumPrint(); 
    return; 
} 


function childNumMinus( changeNum ){ 
    if( childNum <=0 ) {    childNum=0;   }
    else{
        childNum -= changeNum;
    }
   
    peopleNumPrint();  
    return; 
    
} 
// function maxNum(){
//     for(let i=0;i<room.length;i++){
//         if(Number(html1)+Number(html2)>room[i].headCount){
//             alert('객실정원을 확인하세요.')
//         }
// } 
// }
/*성인 아동 객실별로 총인원수 넘지 않게*/

/*룸코드 선택하기*/

/* 체크인 날짜,체크아웃 날짜,객실수,성인,아동 수 가져오기*/
// function 정보입력함수() {
//     // 1. [입력]
//     let checkin_time = document.querySelector('#input_date1').value;
//     let checkout_time = document.querySelector('#input_date2').value;
//     let number_con1 = document.querySelector('#number_con1').value;
//     let number_con2 = document.querySelector('#number_con2').value;
//     let number_con3 = document.querySelector('#number_con3').value;

//     let infos = {
//         'checkin_time': checkin_time, 'checkout_time': checkout_time,
//         'number_con1': number_con1, 'number_con2': number_con2, 'number_con3': number_con3
//     };

//     let room = 회원정보목록반환함수();

//     memberList.push(infos);
//     sessionStorage.setItem('room', JSON.stringify(room))

//     return;
// } 

/**localStorage에 객실정보 불러오기 함수 */

function getRoomList() {
    let roomList = localStorage.getItem("room");
    if(roomList == null) {
        roomList = [];
    } else {
        roomList = JSON.parse(roomList);
    }
    return roomList;
}
function getBookingList() {
    let bookingList = localStorage.getItem("booking");
    if(bookingList == null) {
        bookingList = [];
    } else {
        bookingList = JSON.parse(bookingList);
    }
    return bookingList;
}

/*객실예약 */
function infoInput(){
    let loginList=getSessionStorage("login")
    let bookingList1 = getLocalStorage("booking");
    let checkin_time = document.querySelector('#input_date1').value;
    let checkout_time = document.querySelector('#input_date2').value;
    let number_con2 = document.querySelector('#number_con2').value+document.querySelector('#number_con3').value;
    let check_roomcode;


        let infoBookingCode = bookingList1[bookingList1.length-1].bookingCode+1;
  
    let infos = 
        {bookingCode : infoBookingCode, customerCode : loginList.customerCode, roomCode : check_roomcode, headCount : number_con2, checkIn : checkin_time, checkOut :  checkout_time, reviewState : false}
    bookingList1.push(infos);


}

// function 회원정보목록반환함수(){ 
//     let memberList = sessionStorage.getItem( 'bookingList' );
//     console.log( memberList ); 
 
//     if( memberList == null ){
       
//         memberList = []; s
//     }else{
       
//         memberList = JSON.parse( memberList );
//     }
//     return memberList; 
// }
