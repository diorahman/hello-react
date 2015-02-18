var React = require('react');
var Hello = require('./hello');

var data = [
  { id: 1, text: 'hihi'},
  { id: 2, text: 'hoho'},
  { id: 3, text: 'haha'},
  { id: 4, text: 'hehe'},
  { id: 5, text: 'huhu'}
];

var Input = React.createClass({
  handleChange: function(){
    this.props.onFilterInput(
      this.refs.filterTextInput.getDOMNode().value
    );              
  },
  render: function(){
      return (
        <input ref="filterTextInput" value={this.props.filterText} onChange={this.handleChange} />  
      );        
  }
});

var List = React.createClass({
  render: function(){
    var props = this.props;
    var rows = this.props.hellos
        .filter(function(hello){
          return hello.text.toLowerCase().indexOf(props.filterText.toLowerCase()) > -1;
        })
        .map(function(hello){
        return <Hello key={hello.id} text={hello.text} />
    });

    return (
      <ul>
        {rows}
      </ul>
    );        
  }
});

var Main = React.createClass({
  getInitialState: function(){
    return {
      filterText: 'hihi'
    }
  },
  handleFilterInput: function(filterText){
    this.setState({
      filterText: filterText
    });
  },
  render: function(){
    return (
        <div>
          <Input onFilterInput={this.handleFilterInput} filterText={this.state.filterText}/>
          <List filterText={this.state.filterText} hellos={this.props.data} />
        </div>
    )        
  }
});

React.render(<Main data={data} />, document.getElementById('hello'));
