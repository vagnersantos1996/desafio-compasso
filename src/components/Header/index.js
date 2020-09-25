import React from "react";
import {Link} from 'react-router-dom';

import {HeaderBar} from "./style";

const Header = () => {
	return (
		<HeaderBar>
			<div>
				<div>
					Desafio Compasso
				</div>
				<div>
					<Link to={`/`}>Home</Link>
				</div>
			</div>
		</HeaderBar>
	)
}
export default Header;