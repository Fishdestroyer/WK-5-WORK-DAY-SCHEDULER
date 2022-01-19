var today = moment();// https://momentjs.com/-- 

// Read MDN  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date  for better understanding
$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do")); 
    $(".saveBtn").on("click", function(){
        var plannerText = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, plannerText);// Saves to local storage

    }); 
 