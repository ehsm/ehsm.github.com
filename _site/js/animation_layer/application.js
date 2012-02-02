var animation_app = {
  assets : {
    main : [],
    deco : []
  }
};

$(window).load(function(){
  
  
  var m = new Array();
  m.push( { graphic : "unicode-black-0002" } );
  animation_app.assets.main = m;

  
  var d = new Array();
  
  animation_app.assets.deco = d;
  
  
  animation_app.container = $("#animation-content");
  
  //console.log( animation_app.assets.main );
  animation_app.app_controller = new ApplicationController();
  var c = animation_app.app_controller;
  c.set_main();
  c.set_flicker();
  //c.set_deco();
  window.setTimeout( function() { c.set_mouse_tracker(); }, 3000 );
  
  // set scenes
});