//send the data-* into an object array
//retrieve the key word from the array
//look at for in for retrieving the object

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

// var firstTime = document.getElementById("eight-am");

var m = moment();
var currentTimeEl = m.format("dddd, MMMM Do, hA");
var $currentDayEl = $("#currentDay");
var $descriptionEl = $(".description");
var currentHour = m.format("HH");

$currentDayEl.html(currentTimeEl);

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

// console.log(timeColorArray[1])
// console.log($("eight-am").attr("data-time",))
// var taskEl = [];

// $(function () {
//   $(".saveBtn").on("click", function (e) {
// var taskText = $(this.target).parent().siblings().data("8")
// console.log(taskText);
// localStorage.setItem("taskVal", taskText)
//   });
// });

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
    // console.log(textArea)
  }
});

//loop to add class to change time
//set an interval
for (var i = 0; i < timeColorArray.length; i++) {
  var timeSlotHour = parseInt(timeColorArray[i].attr("data-time"));
  currentHour = parseInt(currentHour);

  // console.log(currentHour + timeSlotHour);
  console.log(timeSlotHour);
  // console.log(currentHour)
  if (timeSlotHour < currentHour) {
    console.log("<");
    timeColorArray[i].addClass("past");
    // return
  } else if (timeSlotHour === currentHour) {
    console.log("===");
    timeColorArray[i].addClass("present");
    // return
  } else if (timeSlotHour > currentHour) {
    console.log(">");
    timeColorArray[i].addClass("future");
    // return
  }
}

// $(".description").on("click", function (e) {
//   var $this = e;
//   var inputEl = $("<input type='text'/>");
//   $($this.target).html(inputEl);
// });
// });
