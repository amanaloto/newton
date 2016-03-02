window.onload = function(){

  var XComponent = Newton.createClass({
    render: function(){
      return $('div', {className: 'x-comp'}, this.props.text);
    }
  });

  var YComponent = Newton.createClass({
    render: function(){
      return $('div', {className: 'y-comp'}, 'YCombinator');
    }
  });

  var XXXComponent = Newton.createClass({
    render: function(){
      var insideX = new XComponent({text: this.props.text});
      return insideX.render();
    }
  });

  x = new XComponent({text: 'X GON GIVE IT YOU YA'});
  xx = new XXXComponent({text: 'VIN DIESEL'});
  y = new YComponent();

  document.body.appendChild(x.render().render());
  document.body.appendChild(xx.render().render());
  document.body.appendChild(y.render().render());
};
