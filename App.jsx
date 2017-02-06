import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		
		this.state = {
			header: "Header from state...",
			"content": "Content from state..."
		}
		this.data = {
			name : "name",
			title : "title",
			// Hello : hello
		}
		this.change = this.update.bind(this);

  }

  update(ev) {
  	console.log('test');
  	this.data.name="naieem";
  	console.log(this);
    // this.setState({ text: ev.target.value });
  }
	render() {
		return (
			<div>
			<h1>{a}</h1>
			<h1>{this.state.header}</h1>
			<h2>{this.state.content}</h2>
			<p onClick={this.change}>{this.data.name}</p>
			<p>{this.data.title}</p>
			</div>
			);
	}
}

export default App;