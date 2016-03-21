(function(scope){
  scope.Component = function(){};

  scope.Component.prototype.render = function(){
    var el = this.originalRender();

    if (el === null) return null;

    el.pushAttributes({'data-newtonid': this.uid});
    el.setEventHandlers({
      onclick: this._bindComponentScope(this.onclick),
      onmouseover: this._bindComponentScope(this.onmouseover),
      onmouseout: this._bindComponentScope(this.onmouseout)
    });

    return el;
  };

  scope.Component.prototype.getInitialState = function(){
    return {};
  };

  scope.Component.prototype.setState = function(newState){
    this.state = newState;

    scope.DOM.update(this);

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


  scope.Component.prototype._bindComponentScope = function(fn){
    if (fn) return fn.bind(this);
    else return undefined;
  };

})(Newton);
