import React, {useState} from 'react'
import Navbar2 from '../components/Navbar2'
import Sidebar2 from '../components/Sidebar2'
import Works from '../components/Works'

import Footer from '../components/Footer'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  Img,
} from '../components/InfoSection/InfoElement'
import { Tag, Tag2H } from '../components/TagElement'

const Works4 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () =>{
      setIsOpen(!isOpen)
  }
  return (
    <>
    <Sidebar2 isOpen={isOpen} toggle={toggle} />
    <Navbar2 toggle={toggle} /> 
      <InfoContainer id='about'>
        <InfoWrapper>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/XUE/2xue.png')} alt="XUE" />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column1></Column1>
          </InfoRow>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <Heading>樂過山丘</Heading>
                <TopLine>
                  介壽國中管樂團年度成果發表會
                </TopLine>
                <Tag2H>AI</Tag2H>
                <Tag2H>PS</Tag2H>
                <Subtitle>
                  臺北市立介壽國民中學管樂團成立於 1999
                  年，所有團員皆由就讀於臺北市立介壽國民中學的學生組成。
                </Subtitle>
                <Subtitle>
                  本次成果發表會將以「樂過山丘」為主題，寓意為管樂團的學生兼顧課業學習、練團及比賽的生活，成功跨越每一個挑戰。
                </Subtitle>
              </TextWrapper>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column1>
            <TopLine>設計需求</TopLine>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/XUE/4xue.png')} alt="XUE" />
              </ImgWrap>
            </Column2>
            <Column2>
              <TextWrapper>
                <Subtitle>
                  <Tag>成果發表會活動海報</Tag>
                </Subtitle>
                <Subtitle>
                  <Tag>成果發表會節目手冊封面</Tag>
                </Subtitle>
                <Subtitle>
                  <Tag>成果發表會紀念帆布袋</Tag>
                </Subtitle>
              </TextWrapper>
                <TopLine>創作理念</TopLine>
              <Subtitle>
                金黃色線條象徵琴弦與線譜，從遠方緩緩而下，匯成層巒疊嶂的山巒，而‘樂過山丘’中的樂則與高音譜記號融合，表現出音符在線譜上的活潑與律動感，也與標題宗旨相交呼應，期許每位學子都能透過音樂，越過層層山丘、跨過層層挑戰。
              </Subtitle>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/XUE/2xue.png')} alt="XUE" />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
          <Column1>
              <TopLine>活動手冊</TopLine>
          </Column1>
        </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/XUE/6xue.png')} alt="XUE" />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
          <Column1>
              <TopLine>活動帆布袋</TopLine>
          </Column1>
        </InfoRow>
          <InfoRow>
          <Column2>
              <ImgWrap>
                <Img src={require('../Images/XUE/3xue.png')} alt="XUE" />
              </ImgWrap>
            </Column2>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/XUE/1xue.png')} alt="XUE" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      <Works/>

      <Footer/>
    </>
  )
}

export default Works4
