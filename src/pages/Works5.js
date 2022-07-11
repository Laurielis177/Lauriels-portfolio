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
  Infopack,
} from '../components/InfoSection/InfoElement'
import { Tag2, Tag, Tag2H } from '../components/TagElement'

const Works5 = () => {
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
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/WOFU/5wofu.png')} alt="WOFU" />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Heading>五福印刷行</Heading>
          </InfoRow>
          <InfoRow>
            <TopLine>數位｜傳統印刷廣告客製化產品</TopLine>
          </InfoRow>
          <InfoRow>
            <Subtitle>
              <Tag2H>AI</Tag2H>
              <Tag2H>PS</Tag2H>
            </Subtitle>
          </InfoRow>
          <Subtitle style={{ textAlign: 'center' }}>
            擁有講究品質、認真負責的特色，主要經營的業務有裝訂制冊、客製化商品、美工設計、廣告設計...等多樣化服務。
          </Subtitle>

          <InfoRow>
            <Column1 />
          </InfoRow>
          <Underline />
          <InfoRow>
            <Column1></Column1>
          </InfoRow>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>設計需求</TopLine>
                <InfoRow></InfoRow>
                <Subtitle>
                  <Tag>LOGO設計</Tag>
                  <Subtitle
                    style={{
                      fontSize: '14px',
                      marginTop: '-8px',
                      marginLeft: '20px',
                    }}
                  >
                    希望有鉛字排版的效果
                  </Subtitle>
                </Subtitle>

                <Subtitle>
                  <Tag>名片設計</Tag>
                </Subtitle>
                <Subtitle>
                  <Tag>FB Banner設計</Tag>
                </Subtitle>
              </TextWrapper>
            </Column1>

            <Column1>
              <TextWrapper>
                <ImgWrap>
                  <Img src={require('../Images/WOFU/8wofu.jpg')} alt="WOFU" />
                </ImgWrap>
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
        <Infopack>
          <InfoWrapper>
            <InfoRow>
              <ImgWrap>
                <Img src={require('../Images/WOFU/1wofu.png')} alt="WOFU" />
              </ImgWrap>
            </InfoRow>
            <InfoRow>
              <Column2>
                <ImgWrap>
                  <Img src={require('../Images/WOFU/2wofu.png')} alt="WOFU" />
                </ImgWrap>
              </Column2>
              <Column1>
                <TextWrapper>
                  <Column1>
                    <TopLine></TopLine>
                  </Column1>
                  <Column1>
                    <TopLine></TopLine>
                  </Column1>
                  <TopLine style={{ color: '#fff' }}>創作理念</TopLine>
                  <Column1>
                    <Subtitle></Subtitle>
                  </Column1>
                  <Subtitle style={{ color: '#fff' }}>
                    將五福二字的筆畫做結合，再將文字分割切入方塊中，融合鉛字印刷的意象，LOGO整體稍稍傾斜，體現活字版的立體感。
                  </Subtitle>
                </TextWrapper>
              </Column1>
            </InfoRow>
          </InfoWrapper>
        </Infopack>
        <InfoWrapper>
        <InfoRow>
            <Column1></Column1>
          </InfoRow>
        <InfoRow>
        <TopLine>名片設計</TopLine>
      </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/WOFU/4wofu.png')} alt="WOFU" />
              </ImgWrap>
            </Column2>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/WOFU/3wofu.png')} alt="WOFU" />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/WOFU/7wofu.jpg')} alt="WOFU" />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column1></Column1>
          </InfoRow>
          <InfoRow>
            <TopLine>FB Banner設計</TopLine>
          </InfoRow>

          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/WOFU/5wofu.png')} alt="WOFU" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      <Works/>

      <Footer />
    </>
  )
}

export default Works5
