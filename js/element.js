(function(scope){
  scope.Element = function(type, attrs){
    this.type = type;
    this.attrs = attrs;

    this.children = [];

    this.allComponents = [null];
  };

  scope.Element.prototype = {

    render: function(){
      var el = document.createElement(this.type);

      // Set Element Attributes
      for (var attr in this.attrs){
        if (typeof(el[attr]) === 'undefined'){
          el.setAttribute(attr, this.attrs[attr]);
        }
        else {
          el[attr] = this.attrs[attr];
        }
      }

      // Append Element Children
      for (var i=0; i < this.children.length; i++){
        if (this.children[i] instanceof scope.Element){
          el.appendChild((this.children[i]).render());
        }
        else {
          var child = document.createTextNode(this.children[i]);
          el.appendChild(child);
        }
      }

      // Set Handlers
      el.onclick = this.onclick;
      el.onmouseover = this.onmouseover;
      el.onmouseout = this.onmouseout;

      return el;
    },

    setChildren: function(children){
      this.children = children;
      return true;
    },

    setMainComponent: function(component){
      this.allComponents[0] = component;
      return true;
    },

    pushSubComponents: function(elements){
      for (var i=0; i < elements.length; i++){
        if (elements[i] instanceof Newton.Element){
          var subComponents = elements[i].components();
          this.allComponents.push.apply(this.allComponents, subComponents);
        }
      }
      return true;
    },

    components: function(){
      return this.allComponents;
    },

    setAttributes: function(attrs){
      this.attrs = attrs;
      return true;
    },

    pushAttributes: function(attrs){
      for(var attr in attrs){
        this.attrs[attr] = attrs[attr];
      }

      return true;
    },

    getAttributes: function(){
      return this.attrs;
    },

    setEventHandlers: function(events){
      this.onclick = events.onclick;
      this.onmouseover = events.onmouseover;
      this.onmouseout = events.onmouseout;
    }

  };
})(Newton);
