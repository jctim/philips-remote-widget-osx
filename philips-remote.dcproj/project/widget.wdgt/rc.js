DEFAULT_IP = "192.168.1.135";
CURL = "/usr/bin/curl";

var tvIP = loadTvIpFromPreferencesOrDefault();

function loadTvIpFromPreferencesOrDefault() {
  var ip = widget.preferenceForKey("tvIPAddress");
  if ((ip && ip.length > 0)) {
    return ip;
  } else {
    return DEFAULT_IP;
  }
}

function saveTvIpPreferences(newValue) {
  widget.setPreferenceForKey(newValue, "tvIPAddress");
} 

function url(fn) {
  return "http://" + tvIP + ":1925/1/" + fn;
}

function post(fn, data) {
  var command = CURL + " -H \"Accept: application/json\" -H \"Content-type: application/json\" -X POST -d '" + JSON.stringify(data) + "' " + url(fn);
  alert(command); // debug
  widget.system(command);
}

function pressKey(keyString) {
  post("input/key", {key: keyString});
}

function keyPressHandler(event) {
  var id = this.element.id;
  if (id.indexOf("b") == 0) {
    key = id.substring(1);      
    pressKey(key);
  } else {
    alert("unknown button: " + id);
  }
}

function keyboardHandler(event) {
  alert(event.keyCode);
  switch(event.keyCode) {
    case 63232: pressKey("CursorUp"); break;
    case 63233: pressKey("CursorDown"); break;
    case 63234: pressKey("CursorLeft"); break;
    case 63235: pressKey("CursorRight"); break;
    case 13: pressKey("Confirm"); break;
    case 27: pressKey("Back"); break;
    case 48: pressKey("Digit0"); break;
    case 49: pressKey("Digit1"); break;
    case 50: pressKey("Digit2"); break;
    case 51: pressKey("Digit3"); break;
    case 52: pressKey("Digit4"); break;
    case 53: pressKey("Digit5"); break;
    case 54: pressKey("Digit6"); break;
    case 55: pressKey("Digit7"); break;
    case 56: pressKey("Digit8"); break;
    case 57: pressKey("Digit9"); break;
    case 32: togglePad(event); break;
  }
}
