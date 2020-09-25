import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline:0;
    }

    html, body, #root {
        height:100%;
    }

    body {
		-webkit-font-smoothing: antialiased;
    }

    body, input , button {
        font: 16px 'Roboto', sans-serif
    }

    a, a:visited {
		color: inherit;
        text-decoration: none;
	}

    ul {
        list-style: none;
		margin: 0;
		padding: 0;
    }

    button {
        cursor: pointer;
	}

	.MuiFormLabel-root, 
	.MuiInputBase-root {
		color: #FFF !important;
	}

	.MuiOutlinedInput-notchedOutline {
		border-color: #FFF !important;
	}

	.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
		border-color: rgb(0, 165, 124) !important;
		border-width: 1px !important;
	}

	.MuiFormLabel-root.Mui-focused {
		color: rgb(0, 165, 124) !important;
	}
`;
