//add current date dynamically to header

//add 5am - 5pm time blocks

//color code each time block to past(grey), present(red), future(green)

//dynamically add events to the time block and save with a click.event

//saves to local storage

//upon refresh events stay on page
var m = moment();
var currentTimeEl = m.format("dddd, MMMM Do, hA");
var $currentDayEl = $("#currentDay");
var $descriptionEl = $(".description");

$currentDayEl.html(currentTimeEl);

$descriptionEl.on("click", "span", function () {
  var text = $(this).text().trim();
  var textInput = $("<textarea>").addClass("form-control").val(text);
  $(this).replaceWith(textInput);
  textInput.trigger("focus");
});
