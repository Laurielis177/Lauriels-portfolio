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
  Underline,
} from '../components/InfoSection/InfoElement'
import { Tag2, Tag, Tag2H } from '../components/TagElement'

const Works3 = () => {
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
          <InfoRow style={{ textAlign: 'right' }}>
            <Column1>
              <InfoRow>
                <Column1 />
              </InfoRow>
              <InfoRow>
                <Column1 />
              </InfoRow>
              <TextWrapper>
                <Heading>救國團</Heading>
                <TopLine>竹光國民運動中心</TopLine>
                <Tag2H>AI</Tag2H>
                <Tag2H>PS</Tag2H>
                <Subtitle>
                  救國團終身學習中心以從事「社會關懷」的公益團體自許。
                </Subtitle>
                <Subtitle>
                  在學時期就曾在此實習，也非常有幸能夠承包此次週年慶活動的平面設計海報及網路宣傳。
                </Subtitle>
              </TextWrapper>
              <InfoRow>
                <Column1 />
              </InfoRow>
              <Column1>
                <TextWrapper>
                  <TopLine style={{ textAlign: 'center' }}>設計需求</TopLine>
                  <InfoRow/>
                  <Subtitle>
                    <Tag>週年慶活動內容及獎品海報</Tag>
                  </Subtitle>
                  <Subtitle>
                    <Tag>週年慶活動</Tag>
                  </Subtitle>
                  <Subtitle>
                    <Tag>週年慶活動 FB Banner設計</Tag>
                  </Subtitle>
                  <Subtitle>
                    <Tag>彩墨書畫邀請展海報</Tag>
                  </Subtitle>
                </TextWrapper>
              </Column1>
              <Column1>
                <TextWrapper>
                  <TopLine style={{ textAlign: 'center' }}>設計元素</TopLine>
                  <InfoRow/>
                  <Subtitle>
                    <Tag>有慶典、活潑的元素</Tag>
                  </Subtitle>
                  <Subtitle>
                    <Tag>有日曆表示活動倒數的元素</Tag>
                  </Subtitle>
                  <Subtitle>
                    <Tag>場館設施或運動的元素</Tag>
                  </Subtitle>
                </TextWrapper>
              </Column1>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/ZG/5ZG.jpg')} alt="ZG" />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column1>
              <TopLine>彩墨書畫邀請展看板</TopLine>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/ZG/8ZG.png')} alt="ZG" />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column1>
              <TopLine>週年慶宣傳海報</TopLine>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/ZG/3ZG.jpg')} alt="ZG" />
              </ImgWrap>
            </Column2>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/ZG/4ZG.jpg')} alt="ZG" />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column1>
              <TopLine>MOCK UP</TopLine>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/ZG/1ZG.jpg')} alt="ZG" />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column1>
              <TopLine>FB BANNER</TopLine>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/ZG/6ZG.png')} alt="ZG" />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/ZG/11ZG.png')} alt="ZG" />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column1>
              <TopLine>活動簡章</TopLine>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/ZG/2ZG.png')} alt="ZG" />
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

export default Works3
