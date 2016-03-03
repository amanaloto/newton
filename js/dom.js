(function(scope){
  scope.DOM = function(){};

  scope.DOM.render = function(element, parent){
    var components = element.components();

    for (var i=0; i < components.length; i++){
      components[i].willRender();
    }

    parent.appendChild(element.render());

    for (var i=0; i < components.length; i++){
      components[i].didRender();
    }
  };

})(Newton);
