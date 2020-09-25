import React, {useEffect, useState} from "react";

import api from '../../services/api';
import Loading from '../../components/Loading';

import {StarredList} from "./style";

const Starred = ({username}) => {
	const [starred, setStarred] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	async function loadStarred() {
		try {
			let res = await api.get(`/users/${username}/starred`);
			let data = res.data;

			setStarred(data);
			setError(null);
		} catch (error) {
			setStarred(null);
			setError(error.response.statusText);
		}
		setLoading(false);
	}

	useEffect(() => {
		loadStarred();
		return () => {
			setStarred(null);
		}
	}, [username]);

	return (
		<div>
			<Loading loading={loading} />
			{error &&
				<div>
					<div>{error}</div>
					<p>Por favor, pesquise outro usuário.</p>
				</div>
			}
			<StarredList>
				{starred && starred.map(starred => 
					<li key={starred.id}>
						<a target="blank" href={`${starred.html_url}`}>{starred.name}</a>
					</li>
				)}
			</StarredList>
		</div>
	)
}
export default Starred;