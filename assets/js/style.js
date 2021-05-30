// on page load
// check local storage to see if anything in there
// if local storage exists
//   update dom with values
//   update local javascript object
// else if nothing in storage
//   create local storage object
//   save to local storage

// on description box click
// check local object (created form local storage)
// if time slot has data
//   create input element
//   set value of new input to the value from local storage
//   inject html (your new input) into the description
// else if no value in local storage
//   create input element
//   inject hmtl into description

// On save click
// target input field in parent sibiling
// get value of input
// save value to local object
// save local object to local storage
// remove input from description
// add text to description with the data in local storage

var m = moment();
var currentTimeEl = m.format("dddd, MMMM Do, hA");
var $currentDayEl = $("#currentDay");
var $descriptionEl = $(".description");
var currentHour = m.format("HH");

//show current day and time on page
$currentDayEl.html(currentTimeEl);

//array to check color change based on current time of day
var timeColorArray = [
  $("#8"),
  $("#9"),
  $("#10"),
  $("#11"),
  $("#12"),
  $("#13"),
  $("#14"),
  $("#15"),
  $("#16"),
  $("#17"),
];

//save the user input to local storage on save button click
$(function () {
  $(".saveBtn").on("click", function (e) {
    var $this = e;
    var taskTextArea = $($this.target).parent().siblings("textarea");
    var taskText = taskTextArea.val();
    var taskTime = taskTextArea.attr("data-time");
    localStorage.setItem("time-" + taskTime, taskText);
    console.log(taskText, taskTime);
  });

  //get all of the text areas
  //using forEach() - MDN forEach
  for (var i = 8; i < 18; i++) {
    var taskText = localStorage.getItem("time-" + i);
    var textArea = $("textarea[data-time=" + i + "]");
    textArea.val(taskText);
  }
});

//loop to add class to change time based on current hour
var checkTime = function () {
  for (var i = 0; i < timeColorArray.length; i++) {
    var timeSlotHour = parseInt(timeColorArray[i].attr("data-time"));
    currentHour = parseInt(currentHour);

    //compare current time to slot time and change class accordingly
    if (timeSlotHour < currentHour) {
      // console.log("<");
      timeColorArray[i].removeClass("present future").addClass("past");
    } else if (timeSlotHour === currentHour) {
      // console.log("===");
      timeColorArray[i].removeClass("past future").addClass("present");
    } else if (timeSlotHour > currentHour) {
      // console.log(">");
      timeColorArray[i].removeClass("past present").addClass("future");
    }
  }
};

//check to see past/present/future classes need to update
setInterval(function(){
checkTime()
}, 30000)

checkTime()