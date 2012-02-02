var ranges = [
  [8592,9142],
  [9144,9179],
  [9472,9741],
  //[10032,10059],
  [10496,11034]
];
var maxNumber = 65535;

var Unicode = {
  
  // jquery, int
  appendRandomTo : function( target, num ) {
    if (!num) {
      var num = 1;
    }
    var ar = [];
    for (var i=0; i<num; i++) {
      var container = $('<div class="unicode"/>');
      var range = ranges.getRandom();
      var v = Math.floor( randomRange( range[0], range[1]+1 ) ).toString(16);
      container.html( Unicode.format(v) );
      target.append( container );
    }
  },
  
  format : function( hex ) {
    return "&#x" + hex + ";"
  }
};


function getAll( target ) {
  //var text = "";
  for (var i=0; i<ranges.length; i++) {
    var r = ranges[i];
    /*text += r[0] + " - " + r[1];
    text += (i<ranges.length-1) ? " / " : "";*/
    var rangeTitle = $('<div class="range-title">' + (r[0]).toString(16).toUpperCase() + " - " + (r[1]).toString(16).toUpperCase() + '</div>');
    var rangeContainer = $('<div class="range-container"/>');
    for (var ii=r[0]; ii<=r[1]; ii++) {
      rangeContainer.append( toUnicode( (ii).toString(16) ) );
      rangeContainer.append(" ");
    }
    target.append( rangeTitle );
    target.append( rangeContainer );
  }
  //target.prepend( text );
};

function toUnicode ( n ) {
  return "&#x" + n + ";"
};

function randomRange ( s, e ) {
  return Math.random()*(e-s)+s;
};

Array.prototype.getRandom = function() {
  return this[ Math.floor( Math.random() * this.length ) ];
};