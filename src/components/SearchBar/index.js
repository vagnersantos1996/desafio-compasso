import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';

import {SearchContainer, Form, Button} from "./style";

const SearchBar = ({history}) => {
	const [user, setUser] = useState(null);

	function _handleSubmit(e) {
		e.preventDefault();
		history.push(`/user/${user}`);
    }

	return (
		<SearchContainer>
			<div>
				<Form onSubmit={_handleSubmit} autoComplete="off">
					<TextField color="secondary" style={{ width: '60%', minWidth: 300, display: 'block' }} variant="outlined" label="Pesquisar usuário" onChange={(e) => setUser(e.target.value)} />
                    <Button >Search</Button>
				</Form>
			</div>
		</SearchContainer>
	)
}
export default SearchBar;