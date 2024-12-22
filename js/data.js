// #region data
let customerList = [
    {customerCode : 1, id : "test1", password : "1234", name : "유재석", birth : "831205", phone : "010-1111-1111", address : "인천 부평구", clause : true},
    {customerCode : 2, id : "test2", password : "4567", name : "강호동", birth : "800506", phone : "010-2222-2222", address : "인천 계양구", clause : false},
    {customerCode : 3, id : "test3", password : "7890", name : "신동엽", birth : "791125", phone : "010-3333-3333", address : "서울 종로구", clause : true},
    {customerCode : 4, id : "test4", password : "1234", name : "홍길동", birth : "920505", phone : "010-4444-4444", address : "부산 해운대구", clause : false},
];
let bookingList = [
    {bookingCode : 1, customerCode : 1, roomCode : "A-1", headCount : 1, checkIn : "2024-02-14", checkOut : "2024-02-16", reviewState : true},
    {bookingCode : 2, customerCode : 2, roomCode : "A-5", headCount : 2, checkIn : "2024-03-15", checkOut : "2024-03-20", reviewState : true},
    {bookingCode : 3, customerCode : 1, roomCode : "A-2", headCount : 1, checkIn : "2024-03-17", checkOut : "2024-03-18", reviewState : false},
    {bookingCode : 4, customerCode : 2, roomCode : "B-1", headCount : 2, checkIn : "2024-03-20", checkOut : "2024-03-22", reviewState : false},
    {bookingCode : 5, customerCode : 3, roomCode : "A-7", headCount : 3, checkIn : "2024-03-25", checkOut : "2024-03-28", reviewState : false},
    {bookingCode : 6, customerCode : 4, roomCode : "C-4", headCount : 2, checkIn : "2024-03-27", checkOut : "2024-04-01", reviewState : true},
    {bookingCode : 7, customerCode : 2, roomCode : "B-3", headCount : 3, checkIn : "2024-05-17", checkOut : "2024-05-20", reviewState : true},
    {bookingCode : 8, customerCode : 1, roomCode : "C-1", headCount : 2, checkIn : "2024-06-06", checkOut : "2024-06-08", reviewState : false},
    {bookingCode : 9, customerCode : 4, roomCode : "B-1", headCount : 2, checkIn : "2024-06-06", checkOut : "2024-06-07", reviewState : true},
    {bookingCode : 10, customerCode : 3, roomCode : "B-3", headCount : 3, checkIn : "2024-10-10", checkOut : "2024-10-25", reviewState : false},
    {bookingCode : 11, customerCode : 3, roomCode : "C-2", headCount : 2, checkIn : "2024-12-01", checkOut : "2024-12-05", reviewState : true},
    {bookingCode : 12, customerCode : 2, roomCode : "B-4", headCount : 3, checkIn : "2025-02-05", checkOut : "2025-02-08", reviewState : false}
]; 
let roomList = [
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
    {roomCode : "C-4", roomName : "더조은 스위트", roomPrice : 660000, headCount : 2, roomNumber : 304},
];
let reviewList = [
    {reviewCode : 1, customerCode : 1, roomCode : "A-1", content : "방이 깔끔하고 좋아요", date : "2024-02-17", estimation : "5/5"},
    {reviewCode : 2, customerCode : 2, roomCode : "A-5", content : "좋아요. 침대가 푹신합니다.", date : "2024-03-21", estimation : "4/5"},
    {reviewCode : 3, customerCode : 4, roomCode : "C-4", content : "가격 대비 시설이 별로네요.", date : "2024-04-02", estimation : "2/5"},
    {reviewCode : 4, customerCode : 2, roomCode : "B-3", content : "자식들이 깔끔하고 좋다고 하네요.", date : "2024-05-21", estimation : "4/5"},
    {reviewCode : 5, customerCode : 4, roomCode : "B-1", content : "침구류가 깔끔해요.", date : "2024-06-08", estimation : "4/5"},
    {reviewCode : 6, customerCode : 3, roomCode : "C-2", content : "가격 대비 서비스가 별로이고 TV가 고장났는지 안켜져요.", date : "2024-12-06", estimation : "1/5"},
];

let loginState = {customerCode : 0, id : "", password : "", name : "", birth : "", phone : "", address : "", clause : false};
// #endregion data

// 최초 실행시 데이터를 가져옴
function totalStorage() {
    if(getLocalStorage("booking").length === 0) {console.log("예약리스트");setLocalStorage("booking", bookingList);}
    if(getLocalStorage("customer").length === 0) {console.log("고객리스트");setLocalStorage("customer", customerList);}
    if(getLocalStorage("room").length === 0) {console.log("방리스트");setLocalStorage("room", roomList);}
    if(getLocalStorage("review").length === 0) {console.log("후기리스트");setLocalStorage("review", reviewList);}
    if(Object.keys(getSessionStorage("login")).length === 0) {console.log("로그인상태");setSessionStorage("login", loginState)}
}

// 스토리지 값 저장하기
function setLocalStorage(key, value) {
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
}
function setSessionStorage(key, value) {
    value = JSON.stringify(value);
    sessionStorage.setItem(key, value);
}

// 스토리지 값 가져오기
function getLocalStorage(key) {
    let list = localStorage.getItem(key);
    if(list == null) {
        list = [];
    } else {
        list = JSON.parse(list);
    }
    return list;
}
function getSessionStorage(key) {
    let list = sessionStorage.getItem(key);
    if(list == null) {
        list = {};
    } else {
        list = JSON.parse(list);
    }
    return list;
}
