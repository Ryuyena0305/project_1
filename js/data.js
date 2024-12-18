// 로컬스토리지 값 저장하기
function setLocalStorage(key, value) {
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
}
function setSessionStorage(key, value) {
    value = JSON.stringify(value);
    sessionStorage.setItem(key, value);
}
// function setCustomerList() {
//     let customerList = localStorage.getItem("customer");
//     if(customerList == null) {
//         customerList = [];
//     } else {
//         customerList = JSON.parse(customerList);
//     }
//     return customerList;
// }
// function setBookingList() {
//     let bookingList = localStorage.getItem("booking");
//     if(bookingList == null) {
//         bookingList = [];
//     } else {
//         bookingList = JSON.parse(bookingList);
//     }
//     return bookingList;
// }
// function setRoomList() {
//     let roomList = localStorage.getItem("room");
//     if(roomList == null) {
//         roomList = [];
//     } else {
//         roomList = JSON.parse(roomList);
//     }
//     return roomList;
// }

// 로컬스토리지 값 가져오기
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
        list = {customerCode : 1, id : "test1", password : "1234", name : "유재석", birth : "831205", phone : "010-1111-1111", address : "인천 부평구", clause : true};
    } else {
        list = JSON.parse(list);
    }
    return list;
}
// function getCustomerList() {
//     let customerList = localStorage.getItem("customer");
//     if(customerList == null) {
//         customerList = [];
//     } else {
//         customerList = JSON.parse(customerList);
//     }
//     return customerList;
// }
// function getBookingList() {
//     let bookingList = localStorage.getItem("booking");
//     if(bookingList == null) {
//         bookingList = [];
//     } else {
//         bookingList = JSON.parse(bookingList);
//     }
//     return bookingList;
// }
// function getRoomList() {
//     let roomList = localStorage.getItem("room");
//     if(roomList == null) {
//         roomList = [];
//     } else {
//         roomList = JSON.parse(roomList);
//     }
//     return roomList;
// }

// 로컬스토리지 값 수정하기

// 로컬스토리지 값 삭제하기