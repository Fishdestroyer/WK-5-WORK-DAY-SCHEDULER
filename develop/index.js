var today = moment();// https://momentjs.com/-- 

// Read MDN  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date  for better understanding
$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do")); 
    $(".saveBtn").on("click", function(){
        var plannerText = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, plannerText);// Saves to local storage

    }); 

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
