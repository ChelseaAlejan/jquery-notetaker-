$("#currentDay").text(moment().format("MMM Do YY"))

$('.saveBtn').on('click', function() {
   
    var textAreaValue = $(this).siblings('.description').val();
    var divId = $(this).parent().attr('id');

    // save in localStorage with divId as key and textArea as value
    localStorage.setItem(divId, textAreaValue);
})

//need local storage.get item to pull yext values from local storage and redisplay
$("#9 .description").val(localStorage.getItem('9')) 
$("#10 .description").val(localStorage.getItem('10')) 
$("#11 .description").val(localStorage.getItem('11')) 
$("#12 .description").val(localStorage.getItem('12')) 
$("#13 .description").val(localStorage.getItem('13')) 
$("#14 .description").val(localStorage.getItem('14')) 
$("#15 .description").val(localStorage.getItem('15')) 

function cssUpdate() {
    // get current hour rounded down
    var hour = moment().hours();
  //finds time blocks
    $('.time-block').each(function() {
      var divNumber = $(this).attr('id')
      if (divNumber < hour) {
        $(this).addClass("past");
      } else if (divNumber == hour) {
$(this).addClass("present")
      } else {
        $(this).addClass("future")
      }
    });
  }
  cssUpdate()