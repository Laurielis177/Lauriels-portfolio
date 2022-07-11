import React, { useState } from 'react'
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
  Nothing,
} from '../components/InfoSection/InfoElement'
import { Tag2, Tag, Tag2H } from '../components/TagElement'

const Works7 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar2 isOpen={isOpen} toggle={toggle} />
      <Navbar2 toggle={toggle} />
      <InfoContainer id="about">
        <InfoRow></InfoRow>
        <InfoRow></InfoRow>
        <InfoRow></InfoRow>
        <InfoWrapper>
          <Heading style={{ textAlign: 'center' }}>其他作品</Heading>

          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/Other/2Other.png')} alt="Other" />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>全勝文化科技有限公司</TopLine>
                <Subtitle>
                  <Tag2H>FB banner設計</Tag2H>
                  <Tag2>ＡＩ</Tag2>
                </Subtitle>
                <Subtitle>
                </Subtitle>
              </TextWrapper>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/Other/1Other.png')} alt="Other" />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>豬樂吉祥物插圖設計</TopLine>
                <Subtitle style={{ textAlign: 'center' }}>
                  <Tag2H>插圖設計</Tag2H>
                  <Tag2>ＡＩ</Tag2>
                  <Tag2>ＰＳ</Tag2>
                </Subtitle>
                <Subtitle>
                  使用PS筆刷勾勒線稿，再使用AI建立圖層填滿色塊，覆蓋上效果圖層製作高光和陰影。
                </Subtitle>
              </TextWrapper>
            </Column1>
          </InfoRow>
          
        </InfoWrapper>
      </InfoContainer>
      <Works />

      <Footer />
    </>
  )
}

export default Works7
