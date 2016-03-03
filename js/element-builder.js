(function(scope){
  scope.ElementBuilder = function(){};

  scope.ElementBuilder.prototype.builder = function(){
    return this.build.bind(this);
  };

  scope.ElementBuilder.prototype.build = function(elType, elAttrs, ...children){
    var el;

    if (typeof(elType) === 'string') {
      el = new scope.Element(elType, elAttrs);
    }
    else {
      var component = new elType(elAttrs);
      el = component.render();
      el.setMainComponent(component);
    }

    if (children.length > 0){
      el.setChildren(children);
      el.pushSubComponents(children);
    }

    return el;
  };

  window.$ = (new scope.ElementBuilder()).builder();
})(Newton);
