// Loads current time in header 
var today = moment().format("MMMM Do YYYY");
    $("#currentDay").text(today);

//saves to local storage when save button is clicked
$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
});

// pulls any text area description for each hour saved in local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
$("#hour18 .description").val(localStorage.getItem("hour18"));



 $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
// updated classes based on current time
    if (timeHour < moment().format("HH")) {
        timeHour.removeClass("future present").addClass("past");
    }
    else if (timeHour === moment().format("HH")) {
        timeHour.removeClass("past future").addClass("present");
    }
    else if (timeHour > moment().format("HH")) {
        timeHour.removeClass("present past").addClass("past");           
        }
    })