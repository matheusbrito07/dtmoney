import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --shape:#FFFFFF;
        --red: #E52E4D;
        --green:#33CC95;
        --blue:#5429CC;
        --blue-light:#6933FF;
        --text-title:#363F5F;
        --text-body:#969CB3;
        --background:#F0F2F5;
        
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }
    //o html é 16px por padrao 
    html{
        @media (max-width:1080px){
            font-size:93-75%; //15px
        }
        @media (max-width:720px){
            font-size:87.5%; //14px
        }
    }

    body{ 
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family:"Poppis", sans-serif;
        font-weight:400;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight:600;
    }
    button{
        cursor:pointer;
    }

    [disabled]{
        opacity:0.6;
        cursor: not-allowed;
    }
`