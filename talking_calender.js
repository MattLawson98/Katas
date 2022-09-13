function talkingCalendar(date) {
  var new_date = date.split('/');
  var month = written_month(parseInt(new_date[1]));
   var day = written_day(parseInt(new_date[2]));
  var year = new_date[0];
  return (month + " " + day + ", " + year);
}

function written_day(day_num) {
  if (day_num == 1 || day_num == 21 || day_num == 31) {
    return day_num.toString() + "st";
  } else if (day_num == 2 || day_num == 22) {
    return day_num.toString() + "nd";
  } else if (day_num == 3 || day_num == 23) {
    return day_num.toString() + "rd";
  } else {
    return day_num.toString() + "th";
  }
}


function written_month(month_name) {
  switch (month_name) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
  }
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));