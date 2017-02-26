require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');
require('./css/app.scss');
import React, { Component } from 'react'
import ReactDOM, {render} from 'react-dom';
import {bootstrap} from 'bootstrap-sass';
import _ from 'lodash';

class App extends Component {
	render () {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-12">
						<h1 className="text-center text-success">Hello World 1</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default App