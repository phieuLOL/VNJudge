// Khai báo đối tượng Date
var date = new Date();

// Lấy số thứ tự của ngày hiện tại
var current_day = date.getDay();

// Biến lưu tên của thứ
var day_name = '';

// Lấy tên thứ của ngày hiện tại
switch (current_day) {
     case 0:
          day_name = "Chủ nhật"; break;
     case 1:
          day_name = "Thứ hai"; break;
     case 2:
          day_name = "Thứ ba"; break;
     case 3:
          day_name = "Thứ tư"; break;
     case 4:
          day_name = "Thứ năm"; break;
     case 5:
          day_name = "Thứ sau"; break;
     case 6:
          day_name = "Thứ bảy"; break;
}

document.getElementById('day-of-week').innerHTML = day_name;

var curDate = new Date();

// Ngày hiện tại
var curDay = curDate.getDate();

// Tháng hiện tại
var curMonth = curDate.getMonth() + 1;

// Năm hiện tại
var curYear = curDate.getFullYear();

// Gán vào thẻ HTML
if (curDay < 10) curDay = '0' + curDay;
if (curMonth < 10) curMonth = '0' + curMonth;
document.getElementById('current-time').innerHTML = curDay + "/" + curMonth + "/" + curYear;