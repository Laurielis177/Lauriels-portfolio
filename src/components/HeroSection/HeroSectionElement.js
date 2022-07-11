import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

export const HeroContainer = styled.div`
  justify-content: center;
  align-items: center;
  padding: 80px 50px;
  height: 800px;
  width: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;
  background-color: ${({ scrollHero }) => (scrollHero ? '#16454F' : '#FEBA34')};
`

// 文字
export const HeroContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  overflow: hidden;

  @media screen and (max-width: 760px) {
  }
`
export const H1 = styled.h1`
  display: inline-block;
  vertical-align: text-top;
  text-orientation: upright;
  writing-mode: vertical-lr;
  font-size: 120px;
  letter-spacing: 3rem;
  color: ${({ scrollHero }) => (scrollHero ? '#16454F' : '#16454F')};
  transition: all 0.8s ease-in-out;

  @media screen and (max-width: 760px) {
    font-size: 80px;
  }
  @media screen and (max-width: 480px) {
    font-size: 60px;
  }
`

export const Span = styled.span`
  font-size: 120px;
  letter-spacing: 3rem;
  vertical-align: text-top;
  text-orientation: upright;
  color: ${({ scrollHero }) => (scrollHero ? '#FEBA34' : '#16454F')};
  transition: all 0.8s ease-in-out;
  @media screen and (max-width: 760px) {
    font-size: 80px;
  }
  @media screen and (max-width: 480px) {
    font-size: 60px;
  }
`
export const Span2 = styled.span`
  font-size: 120px;
  letter-spacing: 3rem;
  vertical-align: text-top;
  text-orientation: upright;
  transition: all 1s ease-in-out;
  @media screen and (max-width: 760px) {
    font-size: 80px;
    color: ${({ scrollHero }) => (scrollHero ? '#FEBA34' : '#16454F')};
  }
  @media screen and (max-width: 480px) {
    font-size: 60px;
  }
`
export const FaArrowDown = styled.p`
  font-size: 160px;
  letter-spacing: 4rem;
  vertical-align: text-top;
  text-orientation: upright;
  color: ${({ scrollHero }) => (scrollHero ? '#FEBA34' : '#16454F')};
  transition: all 0.8s ease-in-out;
  @media screen and (max-width: 760px) {
    font-size: 80px;
  }
  @media screen and (max-width: 480px) {
    font-size: 50px;
  }
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: #16454f;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 760px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

export const ButtonDown = styled(LinkS)`
  z-index: 100;
  color: #333;
  text-decoration: none;
  text-align: center;
  transition: color 0.3s;
  transition: all 0.2s ease-in-out;

  :hover {
    color: #888;
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
  }
`
