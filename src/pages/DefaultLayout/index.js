import React from 'react';

import SearchBar from '../../components/SearchBar';
import Header from '../../components/Header';
import {Container} from "./style";

const DefaultLayout = (props) => {
	const { children, history } = props;

	return (
		<Container>
			<Header />
			<SearchBar history={history} />
			<div>{children}</div>
		</Container>
	)
}

export default DefaultLayout;