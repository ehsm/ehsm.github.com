var Asset = Backbone.View.extend({
  
  coords : {
    start : {
      x : 0,
      y : 0
    },
    end : {
      x : 0,
      y : 0
    }
  },
  
  direction : "",
  base_duration : 3000,
  duration : 100,
  delay : 0,
  diagonal : false,
  amount : 1,
  scale : 1,
  
  initialize : function( opts ) {
    this.unicode = Unicode.getRandom();
    
    this.el = $('<div class="asset" />');
    // complete to full path
    //this.graphic = image_path + opts.graphic + ".png";
    this.el = this.unicode;
    //this.direction = opts.direction;
    this.direction = directions[ Math.floor(Math.random()*directions.length) ];
    this.base_duration = 3000;
    this.duration = 100;
    //if ( opts.duration )        this.duration      = opts.max_duration;
    /*
    if ( opts.base_duration )   this.base_duration = opts.base_duration;
    if ( opts.duration )        this.duration      = opts.duration;
    if ( opts.amount )          this.amount        = opts.amount;
    if ( opts.diagonal )        this.diagonal      = opts.diagonal;
    if ( opts.delay )           this.delay         = opts.delay;
    if ( opts.scale )           this.scale         = opts.scale;
    */
  },
  
  destroy : function() {
    this.el.remove();
  },
  
  render : function() {
    //this.el.html('<img src="' + this.graphic + '" />');
    //console.log("unicode", this.unicode, this.el);
    return this;
  },
  
  set_coords : function () {
    
  },
  
  set_animation : function () {
    var that = this;
    
    var target = {};
    target.x = 0;
    target.y = 0;
    
    var start = {};
    start.x = 0;
    start.y = 0;
    
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    
    var x = Math.random() * ( ww + 300 ) - 150;
    var y = Math.random() * ( wh + 300 ) - 150;
    
    target.x = x;
    target.y = y;
    start.x = x;
    start.y = y;
    
    /*
    // to top
    if ( that.direction == to_top ) {
      start.x = Math.random() * ( ww );
      start.y = wh;
      target.x = 0;
      if ( that.diagonal ) {
        if ( start.x < ww/2 ) target.x = 600;
        else target.x = -600;
      }
      target.y = -wh;
    }
    
    // to bottom
    else if ( that.direction == to_bottom ) {
      start.x = Math.random() * ( ww );
      start.y = 0;
      target.x = 0;
      target.y = wh;
    }
    
    // to left
    else if ( that.direction == to_left ) {
      start.x = ww;
      start.y = Math.random() * ( wh );
      target.x = -ww;
      target.y = 0;
    }
    
    // to right
    else if ( that.direction == to_right ) {
      start.x = 0;
      start.y = Math.random() * ( wh );
      target.x = ww;
      target.y = 0;
    }
    */
    
    //var s = img.width * that.scale;
    //var z = Math.floor( 1000 * that.scale );
    //$("img", that.el).css({ "width": s + "px" });
    that.unicode.css({ "top": start.y + "px", "left": start.x + "px", "display": "block" });
    //if (that.scale) transitions.scale_to( that.el, that.scale );
    //transitions.move_to( that.unicode, { x: target.x, y: target.y, delay: that.delay, duration: that.duration });
    

    window.setTimeout( function () {
      that.destroy();
    }, that.duration + that.delay );
    
  }
  
});