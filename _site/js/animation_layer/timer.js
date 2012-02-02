Function.prototype.Timer = function (interval, calls, onend) {
  var count = 0;
  var payloadFunction = this;
  var startTime = new Date();
  var callbackFunction = function () {
    return payloadFunction(startTime, count);
  };
  var endFunction = function () {
    if (onend) {
      onend(startTime, count, calls);
    }
  };
  var timerFunction = function () {
    count++;
    if (count < calls && callbackFunction() != false) {
      window.setTimeout(timerFunction, interval);
    } else {
      endFunction();
    }
  };
  timerFunction();
};

function arrayShuffle(){
  var tmp, rand;
  for(var i =0; i < this.length; i++){
    rand = Math.floor(Math.random() * this.length);
    tmp = this[i]; 
    this[i] = this[rand]; 
    this[rand] =tmp;
  }
}

Array.prototype.shuffle =arrayShuffle;