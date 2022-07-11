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
  Iframe,
  Underline
} from '../components/InfoSection/InfoElement'
import { Tag2H } from '../components/TagElement'


const Works1 = () => {
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
            <Column1></Column1>
          </InfoRow>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>
                  萊爾富超商手機APP REDESIGN
                </TopLine>
                <Heading>HI-LIFE</Heading>
                <Tag2H>UI/UX</Tag2H>
                <Tag2H>Figma</Tag2H>
                <Tag2H>AI</Tag2H>
                </TextWrapper>
                <TextWrapper>
                <TopLine>STORY 使用者故事</TopLine>
                <Subtitle>
                  米米是一位重度咖啡因成癮者，每天早上至少要喝一杯咖啡提神醒腦，為了更節省時間和金錢，便利商店的咖啡寄杯成為他最好的選擇。
                </Subtitle>
                <Subtitle>
                  超商寄杯極其便利，只需要點開超商ＡＰＰ，點選咖啡寄杯選項，咖啡杯數及兌換條碼便一覽無遺，米米在某三間便利商店都有購買寄杯，不由得開始比較各家超商ＡＰＰ的寄杯服務......
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
            <ImgWrap>
            <Img src={require('../Images/HiLife/9HiLife.png')} alt="HiLife" />
            </ImgWrap>
            </Column2>
          </InfoRow>
          <Underline/>
          <InfoRow>
            <Column1>
                <TopLine>FINDING 問題發現</TopLine>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Img src={require('../Images/HiLife/1HiLife.png')} alt="HiLife" />
          </InfoRow>
          <InfoRow>
            <Img src={require('../Images/HiLife/2HiLife.png')} alt="HiLife" />
          </InfoRow>
          <InfoRow>
            <Img src={require('../Images/HiLife/3HiLife.png')} alt="HiLife" />
          </InfoRow>
          <Underline/>
          <InfoRow>
          <Column1>
              <TopLine>SOLVING 問題解決</TopLine>
          </Column1>
        </InfoRow>
          <InfoRow>
            <Img src={require('../Images/HiLife/4HiLife.png')} alt="HiLife" />
          </InfoRow>
          <InfoRow>
            <Img src={require('../Images/HiLife/5HiLife.png')} alt="HiLife" />
          </InfoRow>
          <InfoRow>
            <Img src={require('../Images/HiLife/6HiLife.png')} alt="HiLife" />
          </InfoRow>
          <InfoRow>
            <Img src={require('../Images/HiLife/7HiLife.png')} alt="HiLife" />
          </InfoRow>
          <InfoRow>
            <Img src={require('../Images/HiLife/8HiLife.png')} alt="HiLife" />
          </InfoRow>
          <Underline/>
          <InfoRow>
          <Column1>
              <TopLine>PROTOTYPE 原型展示</TopLine>
          </Column1>
        </InfoRow>
          <InfoRow>
              <Iframe
                title="FigmaMockup"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FE7gEi0VRP948T6UHjjvnHO%2FHi-Life_APP_Redesign%3Fpage-id%3D5%253A167%26node-id%3D5%253A167%26viewport%3D120%252C631%252C0.37%26scaling%3Dscale-down%26starting-point-node-id%3D5%253A1160"
                allowfullscreen
              />
          </InfoRow>
          
        </InfoWrapper>
      </InfoContainer>
      <Works/>
      <Footer/>
    </>
  )
}

export default Works1
