
let empty = function()  {};
let empty = function()  {};

var a2 = a.map(function(s){ return s.length });

var a3 = a.map( function(s)  {return s.length;} );

var Person = function(name, age){
  this.name = name;
  this.age = age;
};

Person.prototype.sakebu = function(){
  alert("俺の名は" + this.name);
}

var a = new Person("ほげほげ","25");
a.sakebu();





// var data = [
//     {id: 1, author: "Pere Hunt", text: "This is one comment"},
//     {id: 2, author: "Jordan Walke", text: "This is *author* comment"}
// ];

// var CommentBox = React.createClass({
//   render: function() {
//     return (
//       <div className="CommentBox">
//         <h1>Comments</h1>
//         <CommentList data={this.props.data}/>
//         <CommentForm />
//       </div>
//     );
//   }
// });


// var CommentList = React.createClass({
//   render: function() {
//     var commentNodes = this.props.data.map(function(comment) {
//       return (
//         <Comment author={comment.author} key={comment.id}>
//           {comment.text}
//         </Comment>
//       );
//     });
//     return (
//       <div className="commentList">
//         {commentNodes}
//       </div>
//     );
//   }
// });
 

// var CommentForm = React.createClass({
//   render: function(){
//     return(
//       <div className="CommentForm">
//         Hello, world! I am a CommentForm.
//       </div>
//     );
//   }
// });


// var Comment = React.createClass({

//   rawMarkup: function(){
//     var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
//     return {__html: rawMarkup};
//   },

//   render: function(){
//     return(
//       <div className="comment">
//         <h2>{this.props.author}</h2>
//         <span dangerouslySetInnerHTML={this.rawMarkup()} />
//       </div>
//     );
//   }
// });


// React.render( 
//   <CommentBox data={data} />, 
//   document.getElementById('content')
//   );


// // var CommentList = React.createClass({
// //   render: function() {
// //     return (
// //       <div className="commentList">
// //         Hello, world! I am a CommentList.
// //       </div>
// //     );
// //   }
// // });
 
// // var CommentForm = React.createClass({
// //   render: function() {
// //     return (
// //       <div className="commentForm">
// //         Hello, world! I am a CommentForm.
// //       </div>
// //     );
// //   }
// // });




// // var TodoApp = React.createClass({
// //     getInitialState: function(){
// //       return {
// //         todos: []
// //       }
// //     },
// //     onAdd: function(newTodo){
// //       this.setState({
// //         todos : this.state.todos.concat({item:newTodo, status:0})
// //       });
// //     },
// //     onDelete: function(i){
// //       var targetTodo = this.state.todos[i];
// //       targetTodo.status = 1;
// //       this.setState({
// //         todos: this.state.todos
// //       });
// //     },
// //     render: function(){
// //       return (
// //         <div className="TodoApp">
// //         <TodoCreator onAdd={this.onAdd}/>
// //         <TodoList todos={this.state.todos} onDelete={this.onDelete}/>
// //         </div>
// //       );
// //     }
// // });



// // var TodoCreator = React.createClass({
// //     getInitialState: function(){
// //       return {
// //         value: ""
// //       }
// //     },
// //     _onAdd: function(){
// //       var newTodo = this.refs.inputText.getDOMNode().value;
// //       this.props.onAdd(newTodo);
// //      this.setState({value: ""});
// //     },
// //     _onChange: function(e){
// //       this.setState({
// //         value: e.target.value
// //       });
// //     },
// //     render: function(){
// //       return (
// //         <div className="TodoCreator">
// //           <p>{this.state.value}</p>
// //           <input type="text" value={this.state.value} ref="inputText" placeholder="Input your new todo" onChange={this._onChange}/>
// //           <button onClick={this._onAdd}>Add</button>
// //         </div>
// //       );
// //     }
// // });



// // var TodoList = React.createClass({
// //     _onDelete: function(i){
// //       this.props.onDelete(i);
// //     },
// //     render: function() {
// //       return (
// //         <ul>
// //           {
// //             this.props.todos.map(function(todo,i){
// //               if (todo.status == 0) { 
// //                 return (<li key={i}><input type="checkbox" onClick={this._onDelete.bind(this,i )}/>{todo.item}</li>)
// //               } else {
// //                 return <li key={i}><s>{todo.item}</s></li>
// //               }
// //             },this)
// //           }
// //         </ul>
// //       );
// //     }
// // });



// // React.render( <TodoApp/>, document.getElementById('myApp'));
