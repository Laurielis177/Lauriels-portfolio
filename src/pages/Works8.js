import React, { useState } from 'react'
import Navbar2 from '../components/Navbar2'
import Sidebar2 from '../components/Sidebar2'
import Works from '../components/Works'

import Footer from '../components/Footer'
import CodeNav from '../components/Precode/CodeNav'
import CodeSideBar from '../components/Precode/CodeSideBar'
import CodeWorksCards from '../components/Precode/CodeWorksCard'
import CodeWorksObjs from '../components/Precode/CodeWorksObj'
import CodeWorksData from '../components/Precode/CodeWorksData'

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  Img,
  TopLine,
  Nothing,
} from '../components/InfoSection/InfoElement'
import { Tag2, Tag2H } from '../components/TagElement'
import CodeHome from '../components/Precode/Home'

const Works8 = () => {
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
            <Heading>個人作品集網站架設</Heading>
          </InfoRow>
          <InfoRow>
            <Subtitle>
              <Tag2H>React</Tag2H>
              <Tag2H>CSS</Tag2H>
              <Tag2H>JSX</Tag2H>
              <Tag2H>Styled-Components</Tag2H>
            </Subtitle>
          </InfoRow>
          <InfoRow>
            <Subtitle>
              在巨匠學習前端相關技能後，利用工作之餘的時間，自行進修前端框架的技能，並且使用React框架架設個人作品集網站，希望將設計及網頁前端技能應用在實作上，一同呈現在此作品集中。
            </Subtitle>
          </InfoRow>
          <InfoRow>
            <Column1></Column1>
          </InfoRow>
          <InfoRow>
            <Column1></Column1>
          </InfoRow>
          <InfoRow>
            <TopLine>Home.js首頁</TopLine>
          </InfoRow>
          <InfoRow>
            <Column1>
              <Subtitle>
                父元件作為各個子元件傳遞參數的橋樑，在鍵入元件名後，也可以加入事先定義好的參數。
              </Subtitle>
            </Column1>
          </InfoRow>
          <InfoRow>
            <CodeHome />
          </InfoRow>
          <InfoRow>
            <Column1></Column1>
          </InfoRow>
          <InfoRow>
            <Column1></Column1>
          </InfoRow>
          <InfoRow>
            <TopLine>Nav 導覽列</TopLine>
          </InfoRow>
          <InfoRow>
            <Column1>
              <Subtitle>
                在NAV中加入事件監聽及if事件，可用於控制滾軸滑動與NAV出現與否的關係。
              </Subtitle>
            </Column1>
          </InfoRow>
          <InfoRow>
            <CodeNav />
          </InfoRow>
          <InfoRow>
            <Column1></Column1>
          </InfoRow>
          <InfoRow>
            <Column1></Column1>
          </InfoRow>
          <InfoRow>
            <TopLine>Sidebar 手機版漢堡選單</TopLine>
          </InfoRow>
          <InfoRow>
            <Column1>
              <Subtitle>
                由於事先在網頁尺寸時將漢堡選單隱藏，手機瀏覽尺寸時顯示，並且將onClick事件綁定toggle參數，可控制SideBar顯示。
              </Subtitle>
            </Column1>
          </InfoRow>
          <InfoRow>
            <CodeSideBar />
          </InfoRow>
          <InfoRow>
            <Column1></Column1>
          </InfoRow>
          <InfoRow>
            <Column1></Column1>
          </InfoRow>
          <InfoRow>
            <TopLine>Works' Card 作品卡片</TopLine>
          </InfoRow>
          <InfoRow>
            <Column1>
              <Subtitle>
                由於Works Card
                不止一個，重複性高的部分可以單獨拉出作為單一Work的框架，Content則利用Data.js另外輸入。
              </Subtitle>
            </Column1>
          </InfoRow>
          <InfoRow>
            <CodeWorksCards />
          </InfoRow>
          <InfoRow>
            <Column1></Column1>
          </InfoRow>
          <InfoRow>
            <Column1></Column1>
          </InfoRow>
          <InfoRow>
            <TopLine>Works' Data 卡片內文</TopLine>
          </InfoRow>
          <InfoRow>
            <Column1>
              <Subtitle>Data用於輸入卡片內文。</Subtitle>
            </Column1>
          </InfoRow>
          <InfoRow>
            <CodeWorksData />
          </InfoRow>
          <InfoRow>
            <Column1></Column1>
          </InfoRow>
          <InfoRow>
            <Column1></Column1>
          </InfoRow>
          <InfoRow>
            <TopLine>Works' Objs 元件傳入</TopLine>
          </InfoRow>
          <InfoRow>
            <Column1>
              <Subtitle>
                將Data中的各項Obj傳入Item，即可達到重複使用的效果。
              </Subtitle>
            </Column1>
          </InfoRow>
          <InfoRow>
            <CodeWorksObjs />
          </InfoRow>
      
        </InfoWrapper>
      </InfoContainer>
      <Works/>
      <Footer />
    </>
  )
}

export default Works8
