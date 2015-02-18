var React = require('react');

var Hello = React.createClass({
  render: function(){
      return (
          <li><p className="red">{ this.props.text }</p></li> 
      );        
  }
});

module.exports = Hello;
