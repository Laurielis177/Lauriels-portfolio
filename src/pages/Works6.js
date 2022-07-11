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

const Works6 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar2 isOpen={isOpen} toggle={toggle} />
      <Navbar2 toggle={toggle} />
      <InfoContainer id="about">
        <InfoWrapper>
          <InfoRow>
            <Column1></Column1>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img
                  src={require('../Images/TPGirl/13TPGirl.png')}
                  alt="TPGirl"
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column1></Column1>
          </InfoRow>
          <InfoRow>
            <Heading>躺平女孩</Heading>
          </InfoRow>
          <InfoRow>
            <Column1>
              <InfoRow>
                <TopLine>自製個人化商品</TopLine>
              </InfoRow>
              <TextWrapper>
                <Tag2H>AI</Tag2H>
                <Tag2H>PS</Tag2H>

                <Subtitle>
                  「躺平主義」是2021年開始流行的網絡用語，意指當下時代的年輕人在經濟下滑、社會問題激化的環境下，表現出「與其跟隨社會期望堅持奮鬥，不如選擇躺平，無欲無求」的處事態度。
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column1>
              <InfoRow>
                <TopLine>創作理念</TopLine>
              </InfoRow>
              <InfoRow>
                <TopLine></TopLine>
              </InfoRow>
              <TextWrapper>
                <Subtitle>
                  作為現代年輕族群之一，對躺平主義的興起頗感興趣，便藉此作為主題，結合
                  日系簡約、 厭世、 線條感等元素，創作同時帶有諷刺、幽默意味，能夠引起共鳴的相關作品。
                </Subtitle>
                <Subtitle>LOGO使用偽日語拼成「躺平即正義」的標語。</Subtitle>
              </TextWrapper>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column1>
              <TopLine></TopLine>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column1>
              <TopLine>各式怪異姿勢</TopLine>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img
                  src={require('../Images/TPGirl/6TPGirl.png')}
                  alt="TPGirl"
                />
              </ImgWrap>
            </Column2>
            <Column2>
              <ImgWrap>
                <Img
                  src={require('../Images/TPGirl/10TPGirl.png')}
                  alt="TPGirl"
                />
              </ImgWrap>
            </Column2>
            <Column2>
              <ImgWrap>
                <Img
                  src={require('../Images/TPGirl/12TPGirl.png')}
                  alt="TPGirl"
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img
                  src={require('../Images/TPGirl/9TPGirl.png')}
                  alt="TPGirl"
                />
              </ImgWrap>
            </Column2>
            <Column2>
              <ImgWrap>
                <Img
                  src={require('../Images/TPGirl/8TPGirl.png')}
                  alt="TPGirl"
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img
                  src={require('../Images/TPGirl/11TPGirl.png')}
                  alt="TPGirl"
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column1>
              <TopLine>商品設計</TopLine>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img
                  src={require('../Images/TPGirl/1TPGirl.png')}
                  alt="TPGirl"
                />
              </ImgWrap>
            </Column2>
            <Column2>
              <ImgWrap></ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column1>
              <ImgWrap>
                <Nothing />
              </ImgWrap>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img
                  src={require('../Images/TPGirl/4TPGirl.jpg')}
                  alt="TPGirl"
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img
                  src={require('../Images/TPGirl/2TPGirl.jpg')}
                  alt="TPGirl"
                />
              </ImgWrap>
            </Column2>
            <Column2>
              <ImgWrap>
                <Nothing />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img
                  src={require('../Images/TPGirl/3TPGirl.jpg')}
                  alt="TPGirl"
                />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      <Works />

      <Footer />
    </>
  )
}

export default Works6
