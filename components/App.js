var counters = [
  {id: 1},
  {id: 2},
  {id: 3},
];

var App = React.createClass({
  render: function() {
    return React.createElement('div', {className: "app container"}, 
      React.createElement(Counters, {items: counters})
    )
  }
});
