var loadTime = new Date();
var now = new Date();

var timeElement = document.getElementById('time');

function subtractDate(low, high) {
  var secs = 1000;
  var min = secs * 60;
  var hour = min * 60;
  var day = hour * 24;
  var miliSecs = Math.abs(high.getTime() - low.getTime());
  var days = Math.floor(miliSecs / day);
  miliSecs = miliSecs % day;
  var hours = Math.floor(miliSecs / hour);
  miliSecs = miliSecs % hour;
  var mins = Math.floor(miliSecs / min);
  miliSecs = miliSecs % min;
  var sec = Math.floor(miliSecs / secs);
  return {
    day: days > 1 ? days + ' days' : days + ' day',
    hour: hours > 1 ? hours + ' hours' : hours + ' hour',
    min: mins > 1 ? mins + ' mins' : mins + ' min',
    sec: sec > 1 ? sec + ' seconds' : sec + ' second' };

}

function renderTime() {
  var sDate = subtractDate(loadTime, now);
  var str = sDate.day + ', ' + sDate.hour + ', ' + sDate.min + ', ' + sDate.sec;
  timeElement.innerHTML = str;
  now = new Date();
}

renderTime();

window.setInterval(() => {renderTime();}, 1000);