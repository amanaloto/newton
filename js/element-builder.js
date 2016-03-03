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
      el = (new elType(elAttrs)).render();
    }

    if (children.length > 0){
      el.setChildren(children);
    }

    return el;
  };

  window.$ = (new scope.ElementBuilder()).builder();
})(Newton);
