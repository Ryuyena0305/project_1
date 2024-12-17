let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() ;
let today2 = new Date(year, month + 1, 1);
let year2 = today2.getFullYear();
let month2 = today2.getMonth();



function calPrint() {
    let h6 = document.querySelector('#onemonth1');
    let h5 = document.querySelector('#onemonth2');
    let html = `${year}. ${month+1}`;
    let html1 = `${year2}.${month2+1}`;
    h6.innerHTML = html;
    h5.innerHTML = html1;

    let calBottom1 = document.querySelector('.days1');
    let calBottom2 = document.querySelector('.days2');
     // - 어디에 
    let html2 = ``;
    html2 += `<div class="day">MON</div>
                <div class="day">TUE</div>
                <div class="day">WED</div>
                <div class="day">THU</div>
                <div class="day">FRI</div>
                <div class="day day1">SAT</div>
                <div class="day day2">SUN</div>`;

    calBottom1.innerHTML = html2;
    calBottom2.innerHTML = html2;


    let caldates1 = document.querySelector('.dates1');
    let html3 = ``;

    let date = new Date(year, month + 1, 0);
    let endDay = date.getDate();
    let date2 = new Date(year, month, 1);
    let startWeek = date2.getDay();

    for (let blank = 1; blank <= startWeek; blank++) {
        html3 += `<div></div>`;
       
    }
    for (let day = 1; day <= endDay; day++) {
       
        html3 += `<div> ${day} </div>`;
    }
   
   

    caldates1.innerHTML = html3;

    let html4 = ``;
    let dateNextMonth = new Date(year2, month2 + 1, 0); // 다음 달의 마지막 날짜
    let endDay2 = dateNextMonth.getDate(); // 다음 달의 마지막 날짜
    let startWeek2 = new Date(year2, month2, 1).getDay(); // 다음 달 첫날 요일

    for (let blank2 = 1; blank2 <= startWeek2; blank2++) {
        html4 += `<div></div>`;
    }

    for (let day2 = 1; day2 <= endDay2; day2++) {
        html4 += `<div>${day2}</div>`;
    }

    caldates2.innerHTML = html4;
}
calPrint();
function monthChange(changeMonth) {
    month += changeMonth;
    month2 += changeMonth
    if (month < 1) { year--; month = 12; }
    if (month2 < 1) { year2--; month2 = 12; }
    if (month > 12) { year++; month = 1 }
    if (month2 > 12) { year2++; month2 = 1 }
    calPrint();
    return;
}