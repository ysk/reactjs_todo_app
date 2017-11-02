var data = [
    {id: 1, author: "Pere Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *author* comment"}
];

var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "CommentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, {data: this.props.data}), 
        React.createElement(CommentForm, null)
      )
    );
  }
});


var CommentList = React.createClass({displayName: "CommentList",
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        React.createElement(Comment, {author: comment.author, key: comment.id}, 
          comment.text
        )
      );
    });
    return (
      React.createElement("div", {className: "commentList"}, 
        commentNodes
      )
    );
  }
});
 

var CommentForm = React.createClass({displayName: "CommentForm",
  render: function(){
    return(
      React.createElement("div", {className: "CommentForm"}, 
        "Hello, world! I am a CommentForm."
      )
    );
  }
});


var Comment = React.createClass({displayName: "Comment",

  rawMarkup: function(){
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return {__html: rawMarkup};
  },

  render: function(){
    return(
      React.createElement("div", {className: "comment"}, 
        React.createElement("h2", null, this.props.author), 
        React.createElement("span", {dangerouslySetInnerHTML: this.rawMarkup()})
      )
    );
  }
});


React.render( 
  React.createElement(CommentBox, {data: data}), 
  document.getElementById('content')
  );


// var CommentList = React.createClass({
//   render: function() {
//     return (
//       <div className="commentList">
//         Hello, world! I am a CommentList.
//       </div>
//     );
//   }
// });
 
// var CommentForm = React.createClass({
//   render: function() {
//     return (
//       <div className="commentForm">
//         Hello, world! I am a CommentForm.
//       </div>
//     );
//   }
// });




// var TodoApp = React.createClass({
//     getInitialState: function(){
//       return {
//         todos: []
//       }
//     },
//     onAdd: function(newTodo){
//       this.setState({
//         todos : this.state.todos.concat({item:newTodo, status:0})
//       });
//     },
//     onDelete: function(i){
//       var targetTodo = this.state.todos[i];
//       targetTodo.status = 1;
//       this.setState({
//         todos: this.state.todos
//       });
//     },
//     render: function(){
//       return (
//         <div className="TodoApp">
//         <TodoCreator onAdd={this.onAdd}/>
//         <TodoList todos={this.state.todos} onDelete={this.onDelete}/>
//         </div>
//       );
//     }
// });



// var TodoCreator = React.createClass({
//     getInitialState: function(){
//       return {
//         value: ""
//       }
//     },
//     _onAdd: function(){
//       var newTodo = this.refs.inputText.getDOMNode().value;
//       this.props.onAdd(newTodo);
//      this.setState({value: ""});
//     },
//     _onChange: function(e){
//       this.setState({
//         value: e.target.value
//       });
//     },
//     render: function(){
//       return (
//         <div className="TodoCreator">
//           <p>{this.state.value}</p>
//           <input type="text" value={this.state.value} ref="inputText" placeholder="Input your new todo" onChange={this._onChange}/>
//           <button onClick={this._onAdd}>Add</button>
//         </div>
//       );
//     }
// });



// var TodoList = React.createClass({
//     _onDelete: function(i){
//       this.props.onDelete(i);
//     },
//     render: function() {
//       return (
//         <ul>
//           {
//             this.props.todos.map(function(todo,i){
//               if (todo.status == 0) { 
//                 return (<li key={i}><input type="checkbox" onClick={this._onDelete.bind(this,i )}/>{todo.item}</li>)
//               } else {
//                 return <li key={i}><s>{todo.item}</s></li>
//               }
//             },this)
//           }
//         </ul>
//       );
//     }
// });



// React.render( <TodoApp/>, document.getElementById('myApp'));
