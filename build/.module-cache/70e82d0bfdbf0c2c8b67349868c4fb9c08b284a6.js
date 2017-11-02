
// var todoCreator = React.createClass({
// });
// var todoList = React.createClass({
// });
// var TodoApp = React.createClass({
//   return(
//     <div className="todoApp">
//       <todoCreator />
//       <todoList />
//     </div>
//     );
// });




var TodoApp = React.createClass({displayName: "TodoApp",



  render: function(){
    return (
      React.createElement("div", {className: "todoApp"}, 
        React.createElement(TodoCreator, null), 
        React.createElement(TodoList, null)
      )
    );
  }
});

React.render(
  React.createElement(TodoApp, null),
  document.getElementById('myApp')
);

