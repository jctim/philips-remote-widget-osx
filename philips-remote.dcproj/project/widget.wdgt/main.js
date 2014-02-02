//
// Utility functions
//
function $(id) {
  return document.getElementById(id);
}
//
// Function: load()
// Called by HTML body element's onload event when the widget is ready to start
//
function load() {
  $("boxDPad").style.visibility = "visible";
  $("boxNumPad").style.visibility = "hidden";
  dashcode.setupParts();
}

//
// Function: remove()
// Called when the widget has been removed from the Dashboard
//
function remove() {
  // Stop any timers to prevent CPU usage
  // Remove any preferences as needed
  // widget.setPreferenceForKey(null, dashcode.createInstancePreferenceKey("your-key"));
}

//
// Function: hide()
// Called when the widget has been hidden
//
function hide() {
  // Stop any timers to prevent CPU usage
}

//
// Function: show()
// Called when the widget has been shown
//
function show() {
  // Restart any timers that were stopped on hide
}

//
// Function: sync()
// Called when the widget has been synchronized with .Mac
//
function sync() {
  // Retrieve any preference values that you need to be synchronized here
  // Use this for an instance key's value:
  // instancePreferenceValue = widget.preferenceForKey(null, dashcode.createInstancePreferenceKey("your-key"));
  //
  // Or this for global key's value:
  // globalPreferenceValue = widget.preferenceForKey(null, "your-key");
}

//
// Function: showBack(event)
// Called when the info button is clicked to show the back of the widget
//
// event: onClick event from the info button
//
function showBack(event) {
  loadPreferences();
  var front = $("front");
  var back = $("back");

  if (window.widget) {
      widget.prepareForTransition("ToBack");
  }

  front.style.display = "none";
  back.style.display = "block";

  if (window.widget) {
      setTimeout('widget.performTransition();', 0);
  }
}

//
// Function: showFront(event)
// Called when the done button is clicked from the back of the widget
//
// event: onClick event from the done button
//
function showFront(event) {
  savePreferences();
  var front = $("front");
  var back = $("back");

  if (window.widget) {
      widget.prepareForTransition("ToFront");
  }

  front.style.display = "block";
  back.style.display = "none";

  if (window.widget) {
      setTimeout('widget.performTransition();', 0);
  }
}

if (window.widget) {
  widget.onremove = remove;
  widget.onhide = hide;
  widget.onshow = show;
  widget.onsync = sync;
}

function savePreferences() {
  widget.setPreferenceForKey($("textIP").value, "tvIPAddress");
}

function loadPreferences() {
  tvIP = widget.preferenceForKey("tvIPAddress");
  if (!(tvIP && tvIP.length > 0)) {
    tvIP = DEFAULT_IP;
  }
  $("textIP").value = tvIP;
}

function togglePad(event) {
  var dPadVisible = $("boxDPad").style.visibility == "visible";

  if (dPadVisible) {
    $("boxDPad").style.visibility = "hidden";
    $("boxNumPad").style.visibility = "visible";
  } else {
    $("boxDPad").style.visibility = "visible";
    $("boxNumPad").style.visibility = "hidden";
  }

  //alert(dPadVisible);
  //alert(numPadVisible);
}
