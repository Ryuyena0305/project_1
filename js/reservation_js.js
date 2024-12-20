customerList = [
    { customerCode: 1, id: "test1", password: "1234", name: "유재석", birth: "831205", phone: "010-1111-1111", address: "인천 부평구", clause: true },
    { customerCode: 2, id: "test2", password: "4567", name: "강호동", birth: "800506", phone: "010-2222-2222", address: "인천 계양구", clause: false },
    { customerCode: 3, id: "test3", password: "7890", name: "신동엽", birth: "791125", phone: "010-3333-3333", address: "서울 종로구", clause: true },
    { customerCode: 4, id: "test4", password: "1234", name: "홍길동", birth: "920505", phone: "010-4444-4444", address: "부산 해운대구", clause: false },
];

bookingList = [
	{bookingCode : 1, customerCode : 1, roomCode : "A-1", checkIn : "2024-02-14", checkOut : "2024-02-16"},
	{bookingCode : 2, customerCode : 2, roomCode : "A-5", checkIn : "2024-03-15", checkOut : "2024-03-20"},
	{bookingCode : 3, customerCode : 1, roomCode : "A-2", checkIn : "2024-03-17", checkOut : "2024-03-18"},
	{bookingCode : 4, customerCode : 2, roomCode : "B-1", checkIn : "2024-03-20", checkOut : "2024-03-22"},
	{bookingCode : 5, customerCode : 3, roomCode : "A-7", checkIn : "2024-03-25", checkOut : "2024-03-28"},
	{bookingCode : 6, customerCode : 4, roomCode : "C-4", checkIn : "2024-03-27", checkOut : "2024-04-01"},
	{bookingCode : 7, customerCode : 2, roomCode : "B-3", checkIn : "2024-05-17", checkOut : "2024-05-20"},
	{bookingCode : 8, customerCode : 1, roomCode : "C-1", checkIn : "2024-06-06", checkOut : "2024-06-08"},
	{bookingCode : 9, customerCode : 1, roomCode : "B-1", checkIn : "2024-06-06", checkOut : "2024-06-07"},
	{bookingCode : 10, customerCode : 3, roomCode : "B-3", checkIn : "2024-10-10", checkOut : "2024-10-25"},
	{bookingCode : 11, customerCode : 3, roomCode : "C-2", checkIn : "2024-12-01", checkOut : "2024-12-05"},
];


roomList = [
	{roomCode : "A-1", roomName : "스탠다드 싱글", roomPrice : 210000, headCount : 1, roomNumber : 101},
	{roomCode : "A-2", roomName : "스탠다드 싱글", roomPrice : 210000, headCount : 1, roomNumber : 102},
	{roomCode : "A-3", roomName : "스탠다드 싱글", roomPrice : 210000, headCount : 1, roomNumber : 103},
	{roomCode : "A-4", roomName : "스탠다드 더블", roomPrice : 231000, headCount : 2, roomNumber : 104},
	{roomCode : "A-5", roomName : "스탠다드 더블", roomPrice : 231000, headCount : 2, roomNumber : 105},
	{roomCode : "A-6", roomName : "스탠다드 트윈", roomPrice : 231000, headCount : 2, roomNumber : 106},
	{roomCode : "A-7", roomName : "스탠다드 트리플", roomPrice : 286000, headCount : 3, roomNumber : 107},
	{roomCode : "B-1", roomName : "디럭스 더블", roomPrice : 275000, headCount : 2, roomNumber : 201},
	{roomCode : "B-2", roomName : "디럭스 더블", roomPrice : 275000, headCount : 2, roomNumber : 202},
	{roomCode : "B-3", roomName : "디럭스 트리플", roomPrice : 330000, headCount : 3, roomNumber : 203},
	{roomCode : "B-4", roomName : "디럭스 트리플", roomPrice : 330000, headCount : 3, roomNumber : 204},
	{roomCode : "C-1", roomName : "주니어 스위트", roomPrice : 385000, headCount : 2, roomNumber : 301},
	{roomCode : "C-2", roomName : "프리미어 스위트", roomPrice : 473000, headCount : 2, roomNumber : 302},
	{roomCode : "C-3", roomName : "이그제큐티브 스위트", roomPrice : 572000, headCount : 2, roomNumber : 303},
	{roomCode : "C-4", roomName : "아미드 스위트", roomPrice : 660000, headCount : 2, roomNumber : 304},
];


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
    let checkin_time = document.querySelector('#input_date1').value;
    let checkout_time = document.querySelector('#input_date2').value;
    let number_con2 = document.querySelector('#number_con2').value+document.querySelector('#number_con3').value;
    let check_roomcode;

    for(let index;index<=bookingList.length-1;index++){
        let infoBookingCode = bookingList[index].bookingCode 
    }
    bookingList = [
        {bookingCode : infoBookingCode, customerCode : 1, roomCode : check_roomcode, checkIn : checkin_time, checkOut : checkout_time}]

    let room = 회원정보목록반환함수();

    memberList.push(infos);
    sessionStorage.setItem('room', JSON.stringify(room))

    return;

}
/**
 * 
 * bookingList = [
	{bookingCode : 1, customerCode : 1, roomCode : "A-1", checkIn : "2024-02-14", checkOut : "2024-02-16"},
 */

function 회원정보목록반환함수(){ 
    let memberList = sessionStorage.getItem( 'memberList' );
    console.log( memberList ); 
 
    if( memberList == null ){
       
        memberList = []; 
    }else{
       
        memberList = JSON.parse( memberList );
    }
    return memberList; 
}
