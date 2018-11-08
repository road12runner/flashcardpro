import React, {Component} from 'react';
import StackList from './StackList';



export default class App extends Component {
	render(){
		return(
			<div  className="container">
				<h2>Flashcard PRO</h2>
				<StackList/>
			</div>
		)
	}
}