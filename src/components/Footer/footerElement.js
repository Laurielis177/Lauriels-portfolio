import styled from 'styled-components'
// import { Link } from 'react-router-dom'

export const FooterConatainer = styled.div`
  background-color: #16454f;
  border-radius: 20px 20px 0px 0px;
`
export const FooterWrap = styled.div`
  width: 100%;
  height: 200px;
  padding: 48px 24px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`
// export const SocialMedia = styled.section`
//   min-width: 1000px;
//   width: 100%;
// `
// export const SocialMediaWrap = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-content: center;
//   min-width: 1100px;
//   max-width: 40px auto 0 auto;

//   @media screen and (max-width: 820px) {
//     flex-direction: column;
//   }
// `
// export const SocialLogo = styled(Link)`
//   color: #fff;
//   justify-self: start;
//   cursor: pointer;
//   text-decoration: none;
//   font-size: 1.5rem;
//   display: flex;
//   align-items: center;
//   margin-bottom: 16px;
//   font-weight: bold;
//   border: 1px solid #fff;
// `
export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const SocialIconLink = styled.a`
  color: #eeee;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  padding: 10px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
  }
`
export const WebSiteRights = styled.small`
  width: 100%;
  display: flex;
  color: #eee;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  margin: 10px auto;
  transition: all 0.2s ease-in-out;


  @media screen and (max-width: 748px) {
  font-size: 0.8rem;
  transition: all 0.2s ease-in-out;

  }
  @media screen and (max-width: 480px) {
  font-size: 0.5rem;
  transition: all 0.2s ease-in-out;

  }
`
