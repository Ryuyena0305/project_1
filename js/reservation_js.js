
let room = [
    {
        roomCode: "A-1", roomName: "스탠다드 싱글", roomPrice: 210000,
        headCount: 1, roomNumber: 101
    },
    {
        roomCode: "A-2", roomName: "스탠다드 싱글", roomPrice: 210000,
        headCount: 1, roomNumber: 102
    },
    {
        roomCode: "A-3", roomName: "스탠다드 싱글", roomPrice: 210000,
        headCount: 1, roomNumber: 103
    },
    {
        roomCode: "A-4", roomName: "스탠다드 더블", roomPrice: 231000,
        headCount: 2, roomNumber: 104
    },
    {
        roomCode: "A-5", roomName: "스탠다드 싱글", roomPrice: 231000,
        headCount: 2, roomNumber: 105
    },
    {
        roomCode: "A-6", roomName: "스탠다드 트윈", roomPrice: 231000,
        headCount: 2, roomNumber: 106
    },
    {
        roomCode: "A-7", roomName: "스탠다드 트리플", roomPrice: 286000,
        headCount: 3, roomNumber: 107
    },
    {
        roomCode: "B-1", roomName: "디럭스 더블", roomPrice: 275000,
        headCount: 2, roomNumber: 201
    },
    {
        roomCode: "B-2", roomName: "디럭스 더블", roomPrice: 275000,
        headCount: 2, roomNumber: 202
    },
    {
        roomCode: "B-3", roomName: "디럭스 트리플", roomPrice: 330000,
        headCount: 3, roomNumber: 203
    },
    {
        roomCode: "B-4", roomName: "디럭스 트리플", roomPrice: 330000,
        headCount: 3, roomNumber: 204
    },
    {
        roomCode: "C-1", roomName: "주니어 스위트", roomPrice: 385000,
        headCount: 2, roomNumber: 301
    },
    {
        roomCode: "C-2", roomName: "프리미어 스위트", roomPrices: 473000,
        headCount: 2, roomNumber: 302
    },
    {
        roomCode: "C-3", roomName: "이그제큐티브 스위트", roomPrice: 572000,
        headCount: 2, roomNumber: 303
    },
    {
        roomCode: "C-4", roomName: "더조은 스위트", roomPrice: 660000,
        headCount: 2, roomNumber: 304
    },

]


/*객실예약 옆 roomlist 출력 */
let check_roomcode = null;
let roomcode_trans = null;


function check(roomcode) {
    check_roomcode = roomcode;
    roomcode_trans = roomcode;
    console.log(roomcode_trans);
    return roomcode


}
function choose_room(roomcode) {
    check_roomcode = roomcode;

    let chooseRoom = document.querySelector('#check_roomcode');

    let html = '';
    html += `${check_roomcode}`;
    chooseRoom.innerHTML = html;
    console.log(check_roomcode);
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
    // let number_con2 = document.querySelector('#number_con2').value+document.querySelector('#number_con3').value;
    let headcount = childNum+peopleNum;
    let infoBookingCode = bookingList1[bookingList1.length-1].bookingCode+1;
    let infos = 
    {bookingCode : infoBookingCode, customerCode : loginList.customerCode, roomCode : roomcode_trans, headCount : headcount, checkIn : checkin_time, checkOut :  checkout_time, reviewState : false}



    for (let i = 0; i < room.length; i++) {
        if (roomcode_trans == (room[i].roomCode)) {
            if (peopleNum + childNum > room[i].headCount) {
                console.log(roomcode_trans);
                alert('객실정원을 확인하세요.');
                break;
            }
            else{
                let doublecheck = confirm(`${check_roomcode}, ${headcount}명으로 예약하시겠습니까?`);
                if(doublecheck==true){
                    bookingList1.push(infos);
                    setLocalStorage("bookingList",bookingList1);
                  
                    alert(`객실예약이 완료되었습니다`)

                }
                else{
                    break;
                }
               
            break;
            }
        }
    }
}