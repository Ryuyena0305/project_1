 
   let today = new Date();

   let year = today.getFullYear();
   let month = today.getMonth() + 1; 
   let day = today.getDate();


   if (month < 10) month = '0' + month;
   if (day < 10) day = '0' + day;

   let currentDate = `${year}-${month}-${day}`;

   document.getElementById('input_date1').min = currentDate;
   document.getElementById('input_date2').min = currentDate;
   console.log(document.getElementById('input_date1').min);
   console.log(document.getElementById('input_date2').min);

   function 날짜선택(){
   let checkinDate =document.getElementById('input_date1').value;
   checkinDate=checkinDate.split('-');
   checkinDate[2]=Number(checkinDate[2])+1;
   checkinDate = `${checkinDate[0]}-${checkinDate[1]}-${checkinDate[2]}`
   
   document.getElementById('input_date2').min =checkinDate;

   }
