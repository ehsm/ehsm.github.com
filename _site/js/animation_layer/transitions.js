var transitions = {

  move_to : function ( target, opts ) {
    //console.log( "transition delay", opts.delay );
  	var d = 0;
  	if (opts.delay) d = opts.delay;
  	var e = "linear";
  	if (opts.easing) e = opts.easing;
  	window.setTimeout(
  		function() {
  			target.css({
  				"-webkit-transition" : "-webkit-transform " + opts.duration + "ms " + e,
  				"-webkit-transform"  : "translate3d(" + opts.x + "px, " + opts.y + "px, " + 0 + "px)",
  				"-moz-transition"    : "-moz-transform " + opts.duration + "ms " + e,
  				"-moz-transform"     : "translate(" + opts.x + "px, " + opts.y + "px)"
  			});
  		}, d
  	);
  },
  
  scale_to: function( target, scale, duration, delay ) {
		var d = 0;
		if (delay) d = delay;
		var du = 0;
		if (duration) du = duration;
		window.setTimeout(
			function() {
				target.css({
					"-webkit-transition" : "-webkit-transform " + 0 + "ms ease-in-out",
					"-webkit-transform" : "scale(" + scale + ", " + scale + ")",
					"-moz-transition" : "-webkit-transform " + 0 + "ms ease-in-out",
					"-moz-transform" : "scale(" + scale + ", " + scale + ")"
				});
			}, 
			d
		);
	},
	
	fade_to: function( target, opacity, duration, delay ) {
		var d = 0;
		if (delay) d = delay;
		var du = 0;
		if (duration) du = duration;
		window.setTimeout(
			function() {
				target.css({
					"-webkit-transition" : "opacity " + du + "ms ease-in-out",
					"-moz-transition" : "opacity " + du + "ms ease-in-out",
					"opacity" : opacity
				});
			}, 
			d
		);
	}
};