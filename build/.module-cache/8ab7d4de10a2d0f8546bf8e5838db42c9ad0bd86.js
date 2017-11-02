// var Hello = React.createClass({
// render: function(){
//   return (
//      <p>Hello</p>
//     );
//   }
// });
// var CommnentBox = React.createClass({
// render: function() {
//   var list = [];
//   var data = [
//     { text: "1" },
//     { text: "2" },
//     { text: "3" },
//     { text: "4" },
//     { text: "5" },
//     { text: "6" },
//     { text: "7" }
//   ];
//   for(var i in data) {
//   list.push(<li>{data[i].text}</li>);
// }
//   return (
//     <ul>{list}</ul>);
//   }
// });

// var Counter = React.createClass({
//   getInitialState() {
//     return {
//       count: 0
//     };
//   },
//   onClick() {
//     this.setState({count: this.state.count + 1 });
//   },
//   render() {
//     return (
//       <div>
//         <div>count:{this.state.count}</div>
//         <button onClick={this.onClick}>click!</button>
//       </div>
//     );
//   }
// });


var HelloWorld = React.createClass({displayName: "HelloWorld",
  render:function() {
   return (
     React.createElement("p", null, "Hello!World!")
    );
  }
});


var Avatar = React.createClass({displayName: "Avatar",
 propTypes: {
    name: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    alt: React.PropTypes.string,
  },
  render:function() {
    return (
      React.createElement("div", null, 
        React.createElement("span", null, this.props.name, " fsafd")
      )
    );
  }
});


var Hello = React.createClass({displayName: "Hello",
  getDefaultProps:function() {
    return{
      name: "React",
      };
  },
  render:function() {
    return (
      React.createElement("div", null, "Hello ", this.props.name)
    );
  }
});


var Test = React.createClass({displayName: "Test",
  getDefaultProps:function() {
    return {
      id: 1,
      name: "foo",
    };
  },
  render:function() {
    return (
      React.createElement("div", null, this.props.id, ":", this.props.name)
    );
  }
});

var component = React.render(React.createElement(Test, null),      document.getElementById('Test'));
component.setProps({ name: "hogehogehogehoge"});
//component.replaceProps({name: "hogehohogehogehogehogegehogehoge"});

//React.render(<Test />,       document.getElementById('Test'));




var Counter = React.createClass({displayName: "Counter",
  getInitialState:function() {
    return {
      count: 0
    };
  },
  onClick:function() {
    this.setState({count: this.state.count + 1});
  },
  render:function() {
    return (
      React.createElement("div", null, 
        React.createElement("span", null, this.state.count), 
        React.createElement("button", {onClick: this.onClick}, "click")
      )
    );
  }
});



React.render(React.createElement(Hello, null),      document.getElementById('Hello'));
React.render(React.createElement(Avatar, null),     document.getElementById('Avatar'));
React.render(React.createElement(HelloWorld, null), document.getElementById('HelloWorld'));
React.render(React.createElement(Counter, null),    document.getElementById("Counter"));


