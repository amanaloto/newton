Newton.Element = function(type, attrs){
  this.type = type;
  this.attrs = attrs;

  this.children = []
}

Newton.Element.prototype = {

  render: function(){
    var el = document.createElement(this.type);
    this._assignAttributes(el, this.attrs);

    for (var i=0; i < this.children.length; i++){
      if (this.children[i] instanceof Newton.Element){
        el.appendChild((this.children[i]).render());
      }
      else {
        var child = document.createTextNode(this.children[i]);
        el.appendChild(child);
      }
    }

    return el;
  },

  setChildren: function(children){
    this.children = children;

    return;
  },



  _assignAttributes: function(el, attrs){
    for (var attr in attrs){
      el[attr] = attrs[attr];
    }
  }

};
