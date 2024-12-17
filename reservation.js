let today=new Date();
let year = today.getFullYear();
let month = today.getMonth();
let today2 = new Date( year , month+2 , 1 );
let year2 = today2.getFullYear();
let month2 = today2.getMonth();

calPrint();
function calPrint(){ 
        let h6 = document.querySelector('#onemonth1');
        let h5 = document.querySelector('#onemonth2');
        let html = `${year}. ${month}`
        let html1=`${year2}.${month2}`
        h6.innerHTML = html;
        h5.innerHTML = html1;
        let calBottom = document.querySelector('.calender')         // - 어디에 
        let html2 = ``;    
        html2 += `<div class="days">
                            <div class="day">MON</div>
                            <div class="day">TUE</div>
                            <div class="day">WED</div>
                            <div class="day">THU</div>
                            <div class="day">FRI</div>
                            <div class="day">SAT</div>
                            <div class="day">SUN</div>
                          </div>`;

       
            let date = new Date( year , month , 0 );
            let endDay = date.getDate(); 
            let date2 = new Date( year , month-1 , 1 );
            let startWeek = date2.getDay(); 
        for( let blank = 1 ; blank <= startWeek ; blank++ ){
            html2 += `<div></div>`
        }
        for( let day = 1 ; day<=endDay ; day++ ){
            let date3 = `${year}-${month}-${day}`; 
                
            let plenHtml = ``;
            for( let index = 0 ; index <= contentArray.length-1 ; index++ ){
                let plan = contentArray[index];
                if( plan.date == date3 ){ 
                    plenHtml += `<div style="color : ${ plan.color }"> ${ plan.content } </div>`
                };
            }  
            html2 += `<div> ${ day } ${ plenHtml } </div>`
        } 
        calBottom.innerHTML = html2;
        
    return;
} 
calPrint();
function monthChange( changeMonth ){ 
    month += changeMonth;
    month2+= changeMonth
    if( month < 1 ) {    year--; month = 12;   }
    if( month2 < 1 ) {    year2--; month2 = 12;   }
    if( month > 12 ){   year++; month = 1   }
    if( month2 > 12 ){   year2++; month2 = 1   }
    calPrint();  
    return; 
}