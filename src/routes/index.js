import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';

import User from '../pages/User';
import Home from '../pages/Home';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/user/:username" component={User} />
		</Switch>
	);
}