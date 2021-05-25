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

$currentDayEl.html(currentTimeEl);

$(function () {
  $(".saveBtn").on("click", function(e) {
    var $this = e
    var taskText = $($this.target).parent()
    console.log(taskText)

  })
  $(".description").on("click", function (e) {
    var $this = e;
    var inputEl = $("<input type='text'/>");
    $($this.target).html(inputEl);
  });
});

