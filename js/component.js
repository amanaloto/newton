(function(scope){
  scope.Component = function(){};

  scope.Component.prototype.render = function(){
    var el = this.originalRender();

    if (el === null) return null;

    el.pushAttributes({'data-newtonid': this.uid});
    el.setEventHandlers({
      onclick: this.onclick,
      onmouseover: this.onmouseover,
      onmouseout: this.onmouseout
    });

    return el;
  };

  scope.Component.prototype.getInitialState = function(){
    return {};
  };

  scope.Component.prototype.setState = function(newState){
    this.state = newState;

    return;
  };

  scope.Component.prototype.getUID = function(){
    return this.uid;
  };

  scope.Component.prototype.willRender = function(){
    return null;
  };

  scope.Component.prototype.didRender = function(){
    return null;
  };

})(Newton);
