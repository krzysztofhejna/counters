var Counter = React.createClass({
  getInitialState: function() {
    return {
      counter: 0,
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1,
    });
  },

  decrement: function() {
    this.setState({
      counter: this.state.counter - 1,
    });
  },

  render: function() {
    return React.createElement('div', {className: 'counter'},
      React.createElement('p', {className: 'counter__result'}, this.state.counter),
      React.createElement('button', {onClick : this.increment, className: 'counter__btn'}, '+1'),
      React.createElement('button', {onClick : this.decrement, className: 'counter__btn'}, '-1')
    );
  },
});
