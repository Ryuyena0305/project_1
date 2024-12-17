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

// key값을 어디에서 지정해야 합니까....


function getjoin(customerCode){
    
    let join = getLocalStorage('join');



}