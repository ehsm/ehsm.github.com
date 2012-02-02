var app = {
  init : function() {
    app.logo = $("#logo");
    app.logoGraphics = $("#logo #logo-graphics");
  }
};

jQuery(function($) {
  
  app.init();
  
  Unicode.appendRandomTo( app.logoGraphics, 4 );
  Unicode.appendRandomTo( $("#logoGraphics.red"), 4 );
  
  app.logo.click( function(ev) {
    var t = app.logoGraphics;
    t.html("");
    Unicode.appendRandomTo( t, 4 );
  });
});