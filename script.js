$("#currentDay").text(moment().format("MMM Do YY"))

$('.saveBtn').on('click', function() {
   
    var textAreaValue = $(this).siblings('.description').val();
    var divId = $(this).parent().attr('id');

    // save in localStorage with divId as key and textArea as value
    localStorage.setItem(divId, textAreaValue);
})