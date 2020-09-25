import styled from "styled-components";

export const SearchContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200px;
	background: url(https://ak.picdn.net/shutterstock/videos/26768632/thumb/1.jpg);
	background-attachment: fixed;
	z-index: -2;

	@media(max-width: 1000px) {
		background-size: contain;
	}

	div {
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
	}
`;

export const Form = styled.form`
	text-align: center;
`;

export const Button = styled.button`
	background: none;
	color: #FFF;
	border: 1px solid #FFF;
	margin: 20px auto;
	padding: 10px 20px;
	font-size: 1.2em;
	text-transform: uppercase;
	cursor: pointer;
	transition: 0.5s;
	border-radius: 3px;

	:hover {
		border: 1px solid rgb(0, 165, 124);
		color: rgb(0, 165, 124);
	}
`;