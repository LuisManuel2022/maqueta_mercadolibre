 import styled from "styled-components";

    export const Container = styled.div`
      padding: 32px 16px;
      margin: 0 16px;
      display: flex;
      flex-direction: column;
      border: 1px solid var(--border);
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom: none;
    `
    export const Title = styled.h5`
      font-size: 18px;
      line-height: 22.5px;
      text-align: center;
      margin-bottom: 28px;
      color: #00000090;
    `
    export const Card = styled.div`
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      >div{
         margin-left: 5px;
         >p{
            font-size: 14px;
            line-height: 18.9px;
            color: var(--text1);
         }
         >strong{
            font-size: 14px;
            color: #00000055;
            font-height: 18.9px;
         }
         .marca{
            width: 46px;
            height: 46px;
         }
         .platinum{
            color: #00a650;
            font-size: 16px;
            line-height: 21.6px;
         }
         .platino{
            color: #00000055;
         }
      }
    `
    export const MarcaIcon = styled.div`
    
    `
    export const PlatinumIcon = styled.div`
      img{
         margin-bottom: 1.125rem;
      }
    `
    export const Reputacion = styled.div`
      
      display: flex;
      flex-direction: column;
      align-items: center;
    `
    export const Caja = styled.ol`
      list-style: none;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 0px;
      padding: 0 4px;
      >li{
         width: 100%;
         height: 8px;
         

         &:nth-child(1){
            background-color: var(--reputacion1);
         }
         &:nth-child(2){
            background-color: var(--reputacion2);
         }
         &:nth-child(3){
            background-color: var(--reputacion3);
         }
         &:nth-child(4){
            background-color: var(--reputacion4);
         }
         &:nth-child(5){
            background-color: var(--reputacion5);
         }
         &.active{
            height: 12px;
         }
      }
    `
    export const Row = styled.div`
      margin-top: 10px;
      display: flex;
      align-items: flex-start;
      >div{
         width: 33%;
         padding: 0 10px;
         display: flex;
         flex-direction: column;
         text-align: center;
         >strong{
            font-size: 24px;
            font-weight: normal;
            height: 30px;
         }
         >span{
            font-size: 12px;
            color: var(--text1);
         }
         position: relative;
         & + div{
            &::before{
               content: "";
               position: absolute;
               left: 0;
               top: 50%;
               transform: transalte(-50%);
               height: 36px;
               border-left: 1px solid var(--border);
            }
         }
      }
    `
    export const SupportIcon = styled.div`
      img{
         width: 28px;
      }
    `
    export const ClockIcon = styled.div`
      img{
         width: 28px;
      }
    `
    export const Link = styled.div`
      margin-top: 24px;
      color: var(--blue2);
      font-size: 14px;
      line-height: 18.9px;
      text-decoration: none;
    `

    