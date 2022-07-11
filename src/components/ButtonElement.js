import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const Button = styled(LinkR)`
  margin: 10px;
  position: relative;
  border-radius: 50px;
  white-space: nowrap;
  background: ${({ primary }) => (primary ? '#EF8A78' : '#16454F')};
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: #fff;
  font-size: ${({ fontbig }) => (fontbig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  border: 3px solid #fff;


  &:hover {
     transform: scale(1.1);
     transition: all 0.2s ease-in-out;
     cursor: pointer;
  }
`

export const Button2 = styled(LinkR)`
  margin: 10px;
  position: relative;
  border-radius: 50px;
  white-space: nowrap;
  background-color:#FEBA34;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: #16454F;
  font-size: ${({ fontbig }) => (fontbig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  border: 3px solid #fff;


  &:hover {
     transform: scale(1.1);
     transition: all 0.2s ease-in-out;
     cursor: pointer;
  }
`


