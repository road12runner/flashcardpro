import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

class Stack extends  Component {
	render(){
		return(
			<div>
				<Link  to='/'>Home</Link>
				<h3>{this.props.stack.title}</h3>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log('state', state);
	return{
		stack : state
	};
};

export default  connect(mapStateToProps)(Stack);