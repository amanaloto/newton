window.Newton = window.Newton || {};

(function(scope){
  scope.global_uid = 0;

  scope.createClass = function(object){
    var constructor =
      function(props){
        this.uid = scope.global_uid++;
        this.props = props || {};
        this.state = {};
      };

    constructor.prototype.__proto__ = scope.Component.prototype;

    constructor.prototype.originalRender =
      (object.render || function(){ return null; });

    constructor.prototype.willRender = object.willRender;
    constructor.prototype.didRender = object.didRender;

    return constructor;
  }
})(Newton);
