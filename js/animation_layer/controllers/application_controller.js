var ApplicationController = Backbone.Router.extend({
  
  current_main : "",
  can_animate : true,
  timer_mouse : "",
  timer_main : "",
  timer_deco : "",
  last_x : 0,
  first_run : true,
  
  set_flicker : function () {
    var flicker_count = 20;
    var cc = 0;
    var flicker_container = $("<div id='flicker-container'/>");
    var flicker_timer = window.setInterval(
      function () { 
        if (cc % 2 == 0) {
          flicker_container.css("display", "block");
        } else {
          flicker_container.css("display", "none");
        }
        if ( cc == flicker_count ) {
          clearInterval(flicker_timer);
          flicker_container.remove();
        }
        cc++;
      }, 
      50
    );
    $("body").append( flicker_container );
    
  },
  
  set_fade_timer : function () {
    var that = this;
    //this.timer = setTimeout( function() { console.log("TIMEOUT") }, 2000 );
    //clearTimeout( this.timer );
    
  },
  
  start_timers : function () {
    this.can_animate = true;
  },
  
  stop_timers : function () {
    this.can_animate = false;
  },
  
  set_mouse_tracker : function () {
    var that = this;
    
    document.onmousemove = function( event ){
      //console.log(event.pageX);
      var c = animation_app.container;
      transitions.fade_to( c, 0, 500);
      window.setTimeout( function () { $(".asset").remove(); }, 1000);
      clearTimeout( that.timer_mouse );
      clearTimeout( that.timer_main );
      clearTimeout( that.timer_deco );
      that.can_animate = false;
      
      
      that.timer_mouse = setTimeout( function() {
        c.show();
        transitions.fade_to( c, 1, 500);
        that.can_animate = true;
        that.set_main();
        //that.set_deco();
        //console.log( that.can_animate );
      }, mouse_move_timeout );
      
    };
  },
  
  set_main : function () {
    
    //console.log( "MAIN" );
    
    if ( this.can_animate ) {
      var that = this;
      var num = Math.floor( Math.random()*3 +1 );
      num = 10;      
      var max_duration = 100;
      
      if (this.first_run) {
        this.first_run = false;
        this.current_main = animation_app.assets.main[11];
        num = 3;
      }
      else {
        this.current_main = this.get_random_from( animation_app.assets.main );
      }
      
      var assets = new Array();
      var sizes = new Array(1,0.8,0.5,0.3);
      sizes.shuffle();
      
      for (var i=0; i<num; i++) {
        var opts = this.current_main;
        opts = {};
        //opts.scale = Math.random()* 0.7 + 0.3;
        //opts.scale = 1 - i*0.25;
        //opts.scale = sizes[i];
        if ( !opts.base_duration ) opts.base_duration = asset_main_base_duration;
        opts.delay = i*(opts.base_duration/10);
        opts.duration = opts.base_duration * ( 2 - opts.scale*opts.scale );
        opts.max_duration = max_duration;
        assets[i] = new Asset( opts );
        console.log(assets[i]);
        if ( max_duration < opts.duration + opts.delay ) max_duration = opts.duration + opts.delay;
      }
      
      for (var j=0; j<num; j++) {
        var m = assets[j];
        m.set_animation();
        console.log( "m", m.render().el );
        animation_app.container.append( m.render().el );
      }
      
      that.timer_main = setTimeout( function () { that.set_main() }, max_duration );
    }
  },
  
  get_random_from : function ( ar ) {
    return ar[ Math.floor( Math.random()* ar.length ) ];
  },
  
  fade_out : function () {
    $("#animation-content").fadeOut();
  }
  
});