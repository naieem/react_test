import React from 'react';
import Head from './Head.jsx';
import Foot from './Foot.jsx';
import Content from './Content.jsx';
class App extends React.Component {
	constructor() {
		super();

		this.state = {
			header: "Header from state...",
			"content": "Content from state..."
		}
		this.data = {
			name : "supto",
			title : "title",
			// Hello : hello
		}
		var obj={
			name:"halum",
			title:"bad kitty"
		}
		this.change = this.update.bind(obj);
        this.hello=function(){
            alert();
        }
  }

  update(ev) {
  	console.log(this);
  }
	render() {
		return (
			<div>
			<h1>{this.state.header}</h1>
			<h2>{this.state.content}</h2>
			<p onClick={this.change}>{this.data.name}</p>
			<p>{this.data.title}</p>

			<Head  name="hello" />
			<Content />
			<Foot />
			</div>
			);
	}
}




export default App;
