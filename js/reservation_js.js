customerList = [
    { customerCode: 1, id: "test1", password: "1234", name: "유재석", birth: "831205", phone: "010-1111-1111", address: "인천 부평구", clause: true },
    { customerCode: 2, id: "test2", password: "4567", name: "강호동", birth: "800506", phone: "010-2222-2222", address: "인천 계양구", clause: false },
    { customerCode: 3, id: "test3", password: "7890", name: "신동엽", birth: "791125", phone: "010-3333-3333", address: "서울 종로구", clause: true },
    { customerCode: 4, id: "test4", password: "1234", name: "홍길동", birth: "920505", phone: "010-4444-4444", address: "부산 해운대구", clause: false },
];


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
        roomCode: "C-4", roomName: "아미드 스위트", roomPrice: 660000,
        headCount: 2, roomNumber: 304
    },

]
/*roomlist hover */
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

/*룸코드 선택하기*/



/* 체크인 날짜,체크아웃 날짜,객실수,성인,아동 수 가져오기*/
function 정보입력함수() {
    // 1. [입력]
    let checkin_time = document.querySelector('#input_date1').value;
    let checkout_time = document.querySelector('#input_date2').value;
    let number_con1 = document.querySelector('#number_con1').value;
    let number_con2 = document.querySelector('#number_con2').value;
    let number_con3 = document.querySelector('#number_con3').value;

    let infos = {
        'checkin_time': checkin_time, 'checkout_time': checkout_time,
        'number_con1': number_con1, 'number_con2': number_con2, 'number_con3': number_con3
    };

    let room = 회원정보목록반환함수();

    memberList.push(infos);
    sessionStorage.setItem('room', JSON.stringify(room))

    return;
} // f end 

function 객실목록반환함수() {
    let roomList = sessionStorage.getItem('room');
    if (roomList == null) {

        roomList = [];
    } else {
        roomList = JSON.parse(room);
    }
    return roomList;
}

/**localStorage에 배열정보 불러오기 함수 */
function getBoardList() {

    let boardList = localStorage.getItem('boardList');
    if (boardList == null) {
        boardList = [];
    } else {
        boardList = JSON.parse(boardList);
    }
    return boardList;

}


function setBoardList(boardList) {
    localStorage.setItem(
        'boardList',//key
        JSON.stringify(boardList));
}

function getBoard(bno) {
    let boardList = getBoardList();

    for (let index = 0; index <= boardList.length - 1; index++) {
        if (boardList[index].bno == bno) {

            return boardList[index];
        }
    }
    return null;
}
function 등록함수() {
    console.log('등록함수 실행');
    let title = document.querySelector('.title').value;
    let content = document.querySelector('.content').value;
    let password = document.querySelector('.password').value;

    let nowDate = new Date()
    let nowYear = nowDate.getFullYear()
    let nowMonth = nowDate.getMonth() + 1;
    let nowDay = nowDate.getDate()
    let date = `${nowYear}-${nowMonth}-${nowDay}`;
    let view = 0;

    let boardList = getBoardList();

    let bno = boardList.length != 0 ?
        boardList[boardList.length - 1].bno + 1 : 1

    // 객체Object
    let board = {
        bno: bno, title: title, content: content,
        password: password, date: date, view: view
    };
    boardList.push(board);

    setBoardList(boardList);

    alert('게시물 등록 성공');
    location.href = "board.html";

} // f end 