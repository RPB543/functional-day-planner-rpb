function getCurrentTime() {
    var currentTime = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentTime);
}

//saves to local storage
$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
});




//loads current time
getCurrentTime();