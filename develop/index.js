var today = moment();// https://momentjs.com/-- 


// Read MDN  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date  for better understanding
$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $(".saveBtn").on("click", function () {
        var plannerText = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, plannerText);// Saves to local storage

    });
    //Keeps the description showing on the HTML screen, if not defined, will save in local storage but will not show
    //$("#5 .description").val(localStorage.getItem("5")); Expected results= 5 AM will save to Local but not display on refresh
    $("#6 .description").val(localStorage.getItem("6"));
    $("#7 .description").val(localStorage.getItem("7"));
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    $("#18 .description").val(localStorage.getItem("18"));
    $("#19 .description").val(localStorage.getItem("19"));
    $("#18 .description").val(localStorage.getItem("18"));
    $("#20 .description").val(localStorage.getItem("20"));
    $("#21 .description").val(localStorage.getItem("21"));
    $("#22 .description").val(localStorage.getItem("22"));
    $("#23 .description").val(localStorage.getItem("23"));
    //Added additional time stamps for demo purposes, will be removed
    // add more rows for more time
    function timeChange() {
        var currentHour = moment().hour(); // Number

        $('.time-block').each(function () {
            var idTime = parseInt($(this).attr("id"));// Defines which hour the attribute is
            if (idTime < currentHour) {// = stated calendar time is less than the current time
                $(this).addClass("past");
            } else if (idTime === currentHour) {
                $(this).addClass("present");
                $(this).removeClass("past");
            } else {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
        })
    }

    timeChange();
    var timeInterval = setInterval(timeChange, 1000);


});