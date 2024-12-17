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