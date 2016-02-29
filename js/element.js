Newton.Element = function(type, attrs){
  this.type = type;
  this.attrs = attrs;

  this.el = document.createElement(this.type);
  this._assignAttributes(this.attrs);
}

Newton.Element.prototype = {

  render: function(){
    return this.el.cloneNode(true);
  },

  setChildren: function(children){
    for (var i=0; i < children.length; i++){
      if (children[i] instanceof Newton.Element){
        this.el.appendChild((children[i]).render());
      }
      else {
        var child = document.createTextNode(children[i]);
        this.el.appendChild(child);
      }
    }

    return;
  },



  _assignAttributes: function(attrs){
    for (var attr in attrs){
      this.el[attr] = attrs[attr];
    }
  }

};
