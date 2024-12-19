 
   let today = new Date();

   let year = today.getFullYear();
   let month = today.getMonth() + 1; 
   let day = today.getDate();

   // 월과 일이 한 자릿수일 경우 앞에 0 추가
   if (month < 10) month = '0' + month;
   if (day < 10) day = '0' + day;

   let currentDate = `${year}-${month}-${day}`;
   let currentDate1 = `${year}-${month}-${day+1}`;

   // 날짜 입력 필드의 min 속성에 현재 날짜 적용
   document.getElementById('input_date1').min = currentDate;
   console.log(document.getElementById('input_date1').min);
   //document.getElementById('input_date2').min = currentDate1;


   function 날짜선택(){
   let checkinDate =document.getElementById('input_date1').value;
   checkinDate=checkinDate.split('-');
   checkinDate[2]=String(Number(checkinDate[2])+1);
   checkinDate = `${checkinDate[0]}-${checkinDate[1]}-${checkinDate[2]+1}`
   
   document.getElementById('input_date2').min = document.getElementById('input_date1').value;
  
   }

   // function 날짜선택(){
   //    let checkinDate =document.getElementById('input_date1').value;
   //    checkinDate=checkinDate.split('-');
   //    checkinDate[2]=String(Number(checkinDate[2])+1);
   //    checkinDate = `${checkinDate[0]}-${checkinDate[1]}-${checkinDate[2]+1}`
      
   
   //    document.getElementById('input_date1').value
   //    document.getElementById('input_date2').min = document.getElementById('input_date1').value;
     
   //    }


