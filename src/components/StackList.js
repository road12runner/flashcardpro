import React, {Component} from 'react';
import stacks from '../data/stacks.json';
import {Link} from 'react-router-dom';

import {setStack} from '../actions'
import {connect} from 'react-redux';

class StackList extends  Component {
	onStackSelected(stack) {
		this.props.setStack(stack);
	}

	render() {
		return (
			<div>
				<h2>Stacks:</h2>
				{
					stacks.map( stack =>{
						return (
							<Link key={stack.id} to='/stack' onClick={()=> this.onStackSelected(stack)}>
								<h4> {stack.title}</h4>
							</Link>

						)
					})
				}
			</div>
		)
	}
}

export default connect(null, {setStack})(StackList);