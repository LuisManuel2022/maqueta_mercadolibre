import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

export const Panel = styled.div`
  background-color: var(--white);
  box-shadow: var(--panel);
  display: grid;
  grid-template-columns: 67fr 33fr;
`;

export const Column = styled.div``;

export const Galeria = styled.div`
    display:flex:
    align-items: center;
    justify-content: center;
    height: 530px;

    >img{
        height: 75%;
    }
`;

export const Description = styled.div`
  border-top: 1px solid var(--border);
  width: 88%;
  margin: 0 auto;
  padding: 40px 0;
  > h4 {
    color: #00000090;
    font-size: 24px;
    margin-bottom: 32px;
    line-height: 30px;
  }

  > p {
    font-size: 20px;
    color: #666666;
    line-height: 27px;
    text-align: start;
  }
`;

export const Section = styled.div`
  padding: 32px 16px;
  margin: 0 16px;
  border: var(--border);
  border-bottom: none;
  > h4 {
    font-size: 18px;
    margin-bottom: 28px;
    color: var(--text1);
    line-height: 22.5x;
  }
  > div {
    display: flex;
    flex-direction: column;
    line-height: 18.9px;

    > span + span {
      margin-top: 24px;      
    }
    .title{
      font-size: 16px;
      color: var(--text1);
      line-height: 21.6px;
      margin-bottom: 12px;
    }
    .description{
      font-size: 14px;
      line-height: 18.9px;
      color: #00000055;
      margin-bottom: 28px;
    }
    >a{
      font-size: 14px;
      color: var(--blue2);
      line-height: 18.9px;
      text-decoration: none;
    }
  }
`;

export const InfoVendedor = styled.div`

`
