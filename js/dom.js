(function(scope){
  scope.DOM = function(){};

  scope.DOM.render = function(element, parent){
    var components = element.components();

    this._executeCallback(components, 'willRender');

    parent.appendChild(element.render());

    this._executeCallback(components, 'didRender');
  };

  scope.DOM.update = function(component){
    var uid = component.getUID(),
        newEl = component.render().render(),
        domEl = document.querySelectorAll('[data-newtonid="' + uid + '"]')[0];

    domEl.parentNode.replaceChild(newEl, domEl);
  };



  scope.DOM._executeCallback = function(components, callbackName){
    for (var i=0; i < components.length; i++){
      if (typeof(components[i][callbackName]) !== 'undefined') {
        components[i][callbackName]();
      }
    }
  };

})(Newton);
