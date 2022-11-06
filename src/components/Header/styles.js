import styled from "styled-components";

export const Container = styled.header`
    width: 100vw;
    background-color: var(--yellow);
    height: 100px;
`

export const Wrapper = styled.nav`
    max-width: 1200px;    
    margin: 0 auto;
    height: 91px;
    display: flex;
    img{
        width: 134px;
        height: 34px;
        margin-top: 11px;
        margin-left: 10px;
    }
    .buscar{
        width: 600px;
        height: 56px;
        border: 1px solid red;
        margin-left: 52px;        
    }
    .input{
        width: 598px;
        height: 39px;
        border: 1px solid blue;
    }
`