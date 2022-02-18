import styled from "styled-components";
import { NavLink as LinkRouter } from "react-router-dom";
import { fadeIn } from '../../styles/animation'

export const Link = styled(LinkRouter)`
  width: 100%;
  height: 100%;
  
  text-decoration: none;
  
  display: inline-flex;
    justify-content: center;
    align-items: center;
  color: #888;


  &[aria-current]{
    color:#000;
    &:after{
      ${fadeIn({time: '0.5s'})}
      content: '.';
      position: absolute;
      bottom: 10px;
      font-size: 34px;
      line-height: 20px;
    }
  
  }
`

export const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;


  width: 100%;
  max-width: 500px;
  height: 50px;
  
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  
  display:flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1; 
`
