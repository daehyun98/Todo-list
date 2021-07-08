const clock = document.querySelector("h2#clock");

if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {        
      if (this.length >= targetLength) {
          return String(this);
      } else {
          if(padString == null || padString == ' ') {
              padString = ' ';
          } else if(padString.length > 2) {
              padString = padString.substring(0,2);
          }
          targetLength = targetLength - this.length;
          var prefix = "";
          for(var i=0; i<targetLength; i++) {
              prefix += padString;
          }            
          return prefix + String(this);
      }
  };
}


출처: https://goni9071.tistory.com/entry/javascript-padStart-left-padding [고니의꿈]
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = hours + ':' + minutes +':' + seconds;
}

getClock();
setInterval(getClock, 1000);
