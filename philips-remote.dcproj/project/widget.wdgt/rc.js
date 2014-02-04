DEFAULT_IP = "192.168.1.135";
CURL = "/usr/bin/curl";

var tvIP = DEFAULT_IP;
function url(fn) {
  return "http://" + tvIP + ":1925/1/" + fn;
}

function post(fn, data) {
  var command = CURL + " -H \"Accept: application/json\" -H \"Content-type: application/json\" -X POST -d '" + data + "' " + url(fn);
  alert(command); // debug
  widget.system(command);
}

function pressKey(keyString) {
  post("input/key", {"key": keyString});
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