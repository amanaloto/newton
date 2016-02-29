function ElementBuilder(){}

ElementBuilder.prototype.builder = function(){
  return this.build.bind(this);
};

ElementBuilder.prototype.build = function(elType, elAttrs){
  var el = new Newton.Element(elType, elAttrs);

  if (arguments.length > 2){
    var childElements =
      Array.prototype.slice.call(arguments, 2);

    el.setChildren(childElements);
  }

  return el;
};

document.onreadystatechange = function(){
  window.$ = (new ElementBuilder()).builder();
};
