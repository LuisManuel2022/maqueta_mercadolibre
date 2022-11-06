import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
:root{
    --fondo: #ededed;
    --black: #000;
    --white: #fff;

    --text1: rgba(0,0,0,.8);
    --text2: rgbe(0,0,0,.45);

    --green: #00a650;
    --blue1: #1e6dff;
    --blue2: #2968c8;
    --blue3: #3483fa;
    --yellow: #fff159;

    --border: #ddd;

    --panel: 0 1px 3px 0 rgba(0,0,0,.3);

    --reputacion1: #fff0f0;
    --reputacion2: #fff5e8;
    --reputacion3: #fffcda;
    --reputacion4: #f1fdd7;
    --reputacion5: #39b54a;

    --family: "Proxima Nova", -apple-system, "Helvetica Neue", Helvetica,
    Roboto, Arial, sans-serif;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
}

h1, h2, h3, h4, h5, h6{
   color: var(--text1);
   font-weight: inherit; 
}

html{
    min-hight: 100%:
    background-color: var(--fondo);
}

*, button, input{
    border: 0;
    background-color: none;
    font-family: var(--family);
}

p{
    color: #666666;
}

`