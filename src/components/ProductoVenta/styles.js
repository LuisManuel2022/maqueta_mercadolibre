import styled from "styled-components";
import { HiOutlineHeart } from "react-icons/hi";
import { BsTruck } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { GrValidate } from "react-icons/gr";
import { BsTrophy } from "react-icons/bs";
import { AiOutlineSafety } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 16px;
  margin: 16px;
  border: 1px solid var(--border);
  border-radius: 5px;
`;

export const Estado = styled.div`
  p {
    font-size: 14px;
    line-height: 18.9px;
    color: #00000055;
    margin-bottom: 8px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  > h1 {
    width: 100%;
    font-size: 22px;
    line-height: 25.96px;
    color: var(--text2);
    margin-bottom: 8px;
    margin-right: 28px;
    font-weight: 500;
  }
`;

export const HeartIcon = styled(HiOutlineHeart)`
  width: 32px;
  height: 32px;
  color: var(--blue1);
  cursor: pointer;
  margin-left: 16px;
`;

export const PrevPrice = styled.div``;
export const Price = styled.div`
  font-size: 36px;
  line-height: 36px;
  color: #00000090;
  padding: 24px 0;
  font-weight: inherit;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  > div {
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 16px;
      margin-top: 5px;
      color: var(--green);
    }
    .detalle {
      margin-top: 5px;
      margin-left: 30px;
      font-size: 14px;
      color: var(--text2);
    }
    .more {
      margin-top: 5px;
      margin-left: 30px;
      font-size: 14px;
      text-decoration: none;
      color: var(--blue2);
      line-height: 18.9px;
    }
  }
`;

export const CheckIcon = styled(BsTruck)`
  width: 24px;
  height: 24px;
  margin: 0 10px 0 0;
  color: var(--green);
`;

export const ArrowReturn = styled(GiReturnArrow)`
  width: 25px;
  color: var(--green);
`;
export const Color = styled.div`
  font-size: 16px;
  color: var(--text1);
  padding-top: 1rem;
`;

export const Cantidad = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: start;
  align-items: center;
  color: var(--text1);
  font-size: 16px;
  >p{
    font-size: 16px:
  }
  >span{
    color: var(--text2);
    margin: 0 .5rem;
  }
  >strong{
    margin: 0 .5rem;
  }
  >input{
    width: 20px;
    color: var(--blue1);
    border-left: 1px solid var(--blue1);
    border-right: 1px solid var(--blue1);
    outline: 0;
  }
`;
export const ButtonCard = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 4px;
  padding: 12px 10px;
  ouline: 0;
  cursor: pointer;
  background-color: #3483fa;
  color: #fff;
  transition: all 300ms ease-in-out;
  &.two {
    background: #e2edfe;
    color: #3483fa;
  }
  &.two:hover {
    background-color: #c0d8fc;
  }

  &.one:hover {
    background-color: var(--blue1);
  }
`;

export const Beneficios = styled.div`
  margin-top: 16px;
  list-style: none;
  display: flex;
  flex-direction: column;
  > li {
    display: flex;
    margin-top: 1rem;
    p {
      margin-left: 10px;
      font-size: 14px;
      color: var(--blue1);
      span {
        color: #00000055;
        font-size: 14px;
        line-height: 18.2px;
      }

    }
  }
  span {
    color: #00000055;
    font-size: 14px;
    line-height: 18.2px;
  }
  
`;

export const ShildeIcon = styled(AiOutlineSafety)`
  width: 30px;
  color: #00000055;
`;

export const CopaIcon = styled(BsTrophy)`
  width: 16px;
  color: #00000055;
`;

export const GarantyIcon = styled(GrValidate)`
  margin: 0 10px 0 0;
  
`;
