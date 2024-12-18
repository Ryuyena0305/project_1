let getCustomerList = getLocalStorage("customer");
let getbookingList = getLocalStorage("booking");
let getroomList = getLocalStorage("room");
let getLoginState = getLocalStorage("login");


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

// 로컬스토리지 값 저장하기
function setLocalStorage(key, value) {
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
}



function getjoin(){
    
    // let join = getLocalStorage();
    // for(let index = 0; index <= join.length-1; index++){
    //     if(join[index].id == )
    // }


}