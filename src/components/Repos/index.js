import React, {useEffect, useState} from "react";

import api from '../../services/api';
import Loading from '../../components/Loading';

import {ReposList} from "./style";

const Repos = ({username}) => {
	const [repos, setRepos] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	async function loadRepos() {
		try {
			let res = await api.get(`/users/${username}/repos`);
			let data = res.data;

			setRepos(data);
			setError(null);
		} catch (error) {
			setRepos(null);
			setError(error.response.statusText);
		}
		setLoading(false);
	}

	useEffect(() => {
		loadRepos();
		return () => {
			setRepos(null);
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
			<ReposList>
				{repos && repos.map(repo => 
					<li key={repo.id}>
						<a target="blank" href={`${repo.html_url}`}>{repo.name}</a>
					</li>
				)}
			</ReposList>
		</div>
	)
}
export default Repos;