import React, {useState} from 'react'
import Navbar2 from '../components/Navbar2'
import Sidebar2 from '../components/Sidebar2'
import Video from '../Videos/XTY.mp4'
import Works from '../components/Works'

import Footer from '../components/Footer'

import { Underline, VideoBg } from '../components/InfoSection/InfoElement'
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
import { Tag2, Tag2H } from '../components/TagElement'


const Works2 = () => {
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
            <Column1></Column1>
          </InfoRow>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>小太陽形象及平面設計</TopLine>
                <Heading>SUNNY KIDS</Heading>
                <Tag2H>AI</Tag2H>
                <Tag2H>PS</Tag2H>
                <Tag2H>Excel</Tag2H>
              </TextWrapper>
              <TextWrapper>
                <Subtitle>
                  小太陽文理補習班成立於2009年7月，位於新竹縣寶山鄉，於2010年完成立案，同時承辦雙溪國民小學109學年度起課後照顧班。
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/XTY/9XTY.png')} alt="XTY" />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <Underline />
          <InfoRow>
            <Column1>
              <TopLine>點名系統</TopLine>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column1>
              <Subtitle>
                小太陽已成立十餘年，行政作業及流程都相對成熟穩定，但舊有紙本學員資料管理已經無法應付日益增加的學員數量，有感於在行政作業上的管理不方便，便向主管提案將資料上傳雲端共享化。
              </Subtitle>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <Tag2>填寫請假表單</Tag2>
                <Subtitle>使用表單收集學生請假資訊。</Subtitle>
                <Tag2>學生資料</Tag2>
                <Subtitle>
                  輸入VLOOKUP公式，即可在表單中找到相應請假學生姓名及日期，在該欄位顯示"假"。
                </Subtitle>
                <Tag2>重複利用</Tag2>
                <Subtitle>
                  利用下拉選單選擇月份，即可顯示該月份請假資訊，並且會反黑節假日。
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </Column2>
          </InfoRow>
          <Underline />
          <InfoRow>
          <TopLine></TopLine>
        </InfoRow>
          <InfoRow>
            <Column1>
              <TopLine>LOGO REDESIGN</TopLine>
            </Column1>
          </InfoRow>
          <InfoRow>
          <TopLine></TopLine>
        </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/XTY/10XTY.png')} alt="XTY" />
              </ImgWrap>
            </Column2>
            <Column2>
              <TextWrapper>
              <InfoRow>
              <TopLine></TopLine>
            </InfoRow>
                <Subtitle>
                  原本LOGO含有太多元素，並且主要顏色太過搶眼，視覺上給人不知道重點在哪的感覺。重新設計後拿掉過多元素，並且將LOGO線條加粗，主要色也改成較為飽和沈穩的色調。
                </Subtitle>
              </TextWrapper>
            </Column2>
            <Column2>
              <Img src={require('../Images/XTY/9XTY.png')} alt="XTY" />
            </Column2>

          </InfoRow>
          <InfoRow>
          <TopLine></TopLine>
        </InfoRow>
        <InfoRow>
        <TopLine></TopLine>
      </InfoRow>
          <Underline />
          <InfoRow>
            <Column1>
              <TopLine>名片設計</TopLine>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/XTY/20XTY.png')} alt="XTY" />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/XTY/8XTY.png')} alt="XTY" />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column1>
              <TopLine>海報設計</TopLine>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/XTY/22XTY.png')} alt="XTY" />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={require('../Images/XTY/21XTY.png')} alt="XTY" />
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

export default Works2
