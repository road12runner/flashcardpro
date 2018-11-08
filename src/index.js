import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './components/App';
import Stack from './components/Stack';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducers';


const store = createStore(reducer);
store.subscribe( () =>  console.log('store state', store.getState()));

const app = <Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path='/' component={App} exact />
				<Route path='/stack' component={Stack} />
			</Switch>
		</BrowserRouter>
	</Provider>;


ReactDOM.render(app, document.querySelector('#root'));