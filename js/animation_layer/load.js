function requireJs(jspath) {
    document.write('<script type="text/javascript" charset="utf-8" src="/js/animation_layer/'+jspath+'.js"><\/script>');
}


//require("dummyconsole");
//requireJs("lib/jquery");
requireJs("lib/underscore-min");
requireJs("lib/backbone-min");

requireJs("constants");
requireJs("transitions");
requireJs("unicode_generator");
requireJs("timer");
requireJs("application");

requireJs("controllers/application_controller");


requireJs("views/scene_view");
requireJs("views/scenes/scene_to_top_view");
requireJs("views/scenes/scene_to_bottom_view");
requireJs("views/scenes/scene_to_left_view");
requireJs("views/scenes/scene_to_right_view");

requireJs("views/asset_view");

