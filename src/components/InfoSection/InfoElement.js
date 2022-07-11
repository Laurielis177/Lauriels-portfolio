import styled from 'styled-components'

export const Infopack = styled.div`
  background: #16454f;
  margin: 0 auto;
  padding: 0 0px;
  min-height: 800px;
`
export const InfoContainer = styled.div`
  /* background: #eee; */
  margin: 0 auto;
  padding: 0 0px;
`

export const InfoWrapper = styled.div`
  z-index: 1;
  width: 100%;
  min-height: 800px;

  max-width: 1100px;
  margin: auto;
  padding: 24px;
  justify-content: center;
`

export const InfoRow = styled.div`
  width: 100%;
  margin: 25px auto;
  display: flex;
  text-align: center;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 748px) {
    display: inline-block;
    text-align: center;
    transition: all 0.5s ease-in-out;
  }
`

export const Column1 = styled.div`
  margin: 15px auto;
  padding: 15px;
`
export const Column2 = styled.div`
  margin: 15px;
  padding: 15px;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`
export const TextWrapperNoMax = styled.div`
  display: inline-table;
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const TopLine = styled.p`
  color: #16454f;
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin: 10px auto;
  letter-spacing: 0.3rem;
`

export const Heading = styled.h1`
  letter-spacing: 0.3rem;
  font-size: 48px;
  line-height: 48px;
  color: #16454f;
  margin: 20px auto;

  @media screen and (max-width: 480px) {
    font-size: 32px;
    line-height: 32px;
  }
`

export const Subtitle = styled.p`
  letter-spacing: 0.2rem;
  margin: 10px auto;
  font-size: 16px;
  line-height: 28px;
  color: #16454f;
  text-align: left;

  @media screen and (max-width: 748px) {
    font-size: 14px;
    line-height: 32px;
    margin: 8px auto;
    text-align: center;
  }
`

export const ImgWrap = styled.div`
  height: 100%;
`

export const Img = styled.img`
  width: 100%;
  background-size: cover;
  margin: 20px auto;
  margin-bottom: 0px;
`

export const VideoBg = styled.video`
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`
export const Iframe = styled.iframe`
  border-radius: 25px;
  border: 5px solid rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 600px;
`

export const Underline = styled.div`
  border: 2px solid #16454f;
`
export const Nothing = styled.div`
  border: 2px solid #16454f;
  margin: 150px;
`
