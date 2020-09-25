import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';

import api from '../../services/api';
import Loading from '../../components/Loading';
import Repos from '../../components/Repos';
import Starred from '../../components/Starred';

import Star from '../../assets/star.png';
import {HomePage, UserCard, UserInfo, ErrorMsg} from "./style";

const User = (props) => {
	const [userResponse, setUserResponse] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [show, setShow] = useState({showRepos: false, showStarred: false});

	const {username} = props.match.params;
	const {url} = props.match;
	const {pathname} = props.location;
	const {showRepos, showStarred} = show;

	async function fetchData() {
		try {
			let res = await api.get(`/users/${username}`);
			let data = res.data;
			setUserResponse(data);

			setError(null);
		} catch (error) {
			setUserResponse(null);
			setError(error.response.statusText);
		}
		setLoading(false);
	}
	
	useEffect(() => {
		fetchData();
	}, [username]);
	
	useEffect(() => {
		let showRepos, showStarred = false;

		if(url !== pathname) {
			let splitedUrl = pathname.split('/');
			if(splitedUrl[splitedUrl.length - 1] === 'repos') {
				showRepos = true;
			} else if(splitedUrl[splitedUrl.length - 1] === 'starred') {
				showStarred = true;
			}
		}
		setShow({showRepos, showStarred});
	}, [pathname, url]);

	return (
		<HomePage>
			<div>
				<Loading loading={loading} />
				{error &&
					<ErrorMsg>
						<div>{error}</div>
						<p>Por favor, pesquise outro usuário.</p>
					</ErrorMsg>}
				{userResponse &&
					<UserCard>
						<div>
							<div>
								{userResponse.avatar_url && <img src={userResponse.avatar_url} alt="Avatar usuário" />}
							</div>
							<UserInfo>
								<div>
									<Link to={`/user/${username}`}>
										{userResponse.login} ({userResponse.name})
									</Link>
									{/* <Link to={`/user/${username}`}>
										{userResponse.login} ({userResponse.name})
									</Link>
									<Link to={`/user/${username}`}>
										{userResponse.login} ({userResponse.name})
									</Link>
									<Link to={`/user/${username}`}>
										{userResponse.login} ({userResponse.name})
									</Link> */}
								</div>
								<div>
									<div>
										<div>
											{userResponse.public_repos}
										</div>
										<div>
											<Link to={`/user/${username}/repos`}
											onClick={() => setShow({showRepos: true, showStarred: false})}>Repos</Link>
										</div>
									</div>
									<div>
										<div>
											{userResponse.followers}
										</div>
										<div>
											Seguidores
										</div>
									</div>
									<div>
										<div>
											{userResponse.following}
										</div>
										<div>
											Seguindo
										</div>
									</div>
									<div>
										<div>
											<img src={Star} alt="ícone estrelas" title="Starred" />
										</div>
										<div>
											<Link to={`/user/${username}/starred`} onClick={() => setShow({showRepos: true, showStarred: false})}>Starred</Link>
										</div>
									</div>
								</div>
							</UserInfo>
						</div>
					</UserCard>
				}
				{showRepos && <Repos username={username} />}
				{showStarred && <Starred username={username} />}
			</div>
		</HomePage>
	)
}
export default User;