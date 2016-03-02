window.Newton = window.Newton || {};

(function(scope){
  scope.global_uid = 0;

  scope.createClass = function(object){
    var constructor =
      function(props){
        this.uid = scope.global_uid++;
        this.props = props;
      };

    constructor.prototype.__proto__ = scope.Component.prototype;

    // Assign other original methods
    for (var attr in object) {
      constructor.prototype[attr] = object[attr];
    }

    return constructor;
  }
})(Newton);
