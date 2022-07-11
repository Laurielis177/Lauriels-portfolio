import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const WorksCard = styled(LinkR)`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  height: 400px;
  width: 400px;
  text-decoration: none;
  padding: 60px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 480px) {
    width: 350px;
  }

  &:hover {
    background: #fff;
    cursor: pointer;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`
export const WorksH2 = styled.h2`
  color: #16454f;
  letter-spacing: 0.2rem;
  font-size: 16px;
  margin: 10px;
  margin-bottom: 0px;
`
export const WorksP = styled.p`
  text-align: center;
  margin: 20px;
`

export const Img = styled.div`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`
