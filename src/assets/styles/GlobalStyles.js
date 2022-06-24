import { createGlobalStyle } from "styled-components";
import resetcss from "styled-reset";

const GlobalStyles = createGlobalStyle` 
    ${resetcss}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        font-family: sans-serif, 'Nanum Myeongjo','Source Sans Pro', -apple-system;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.fontPrimary};
        background: ${({ theme }) => theme.colors.backgroundPrimary};
    }
`;

export default GlobalStyles;
