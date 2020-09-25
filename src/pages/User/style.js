import styled from "styled-components";

export const HomePage = styled.div`
	width: 100%;
	padding: 20px;

	> div {
		margin: 0 auto;
		max-width: 1000px;
		padding: 10px;
		border-radius: 5px;
		box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);

		@media(max-width: 1040px) {
			border: none;
		}
	}
`;

export const ErrorMsg = styled.div`
	padding: 10px;

	> div {
		color: #cc0000;
		font-size: 1.5em;
	}

	> p {
		margin-top: 10px
	}
`;

export const UserCard = styled.div`
	> div:first-child {
		display: flex;

		> div:first-child {
			width: auto;
		}

		> div {
			padding: 5px 0;

			> img {
				width: 48px;
				height: 48px;
				border-radius: 50%;
				border: 1px solid #696969;
				padding: 3px
			}
		}
	}
`;

export const UserInfo = styled.div`
	display: flex;
	justify-content: space-between;
	itens-aligm: center;
	width: 100%;

	> div {
		margin: 10px;
		margin-top: 0;

		> div {
			text-align: center;
		}
	}

	> div:last-child {
		display: flex;
		justify-content: space-between;
	}

	> div:last-child > div {
		padding: 0 10px;
	}

	> div:last-child > div > div > img {
		width: 16px;
		height: 16px;
	}

	@media(max-width: 1000px) {
		flex-wrap: wrap;

		> div:last-child > div:first-child {
			padding-left: 0;
		}
	}

	@media(max-width: 440px) {
		> div:last-child {
			flex-wrap: wrap;
		}
		> div:last-child > div {
			padding: 0 5px;
		}
	}
`;