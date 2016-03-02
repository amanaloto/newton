(function(scope){
  scope.ElementBuilder = function(){};

  scope.ElementBuilder.prototype.builder = function(){
    return this.build.bind(this);
  };

  scope.ElementBuilder.prototype.build = function(elType, elAttrs){
    var el = new scope.Element(elType, elAttrs);

    if (arguments.length > 2){
      var childElements =
        Array.prototype.slice.call(arguments, 2);

      el.setChildren(childElements);
    }

    return el;
  };

  window.$ = (new scope.ElementBuilder()).builder();
})(Newton);
