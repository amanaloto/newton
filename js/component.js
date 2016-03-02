(function(scope){
  scope.Component = function(){};

  scope.Component.prototype.render = function(){
    var el = this.render;

    var newAttributes = el.getAttributes();
    newAttributes['data-newtonid'] = this.uid;
    el.assignAttributes(newAttributes);

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

})(Newton);
