import React from 'react'
import { MdOutlinePlace } from 'react-icons/md'
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiFigma,
  SiReact,
  SiBootstrap,
  SiWordpress,
  SiMicrosoftoffice,
} from 'react-icons/si'
import { FaHtml5, FaCss3Alt } from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di'
import { Tag2, Tag2H, TagH } from '../TagElement'
import {
  Column2,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TextWrapperNoMax,
  TopLine,
  Heading,
  Subtitle,
  Img,
  Infopack,
} from './InfoElement'

const InfoSection = () => {
  return (
    <>
      <InfoContainer id="about">
        <Infopack>
          <InfoWrapper>
            <InfoRow>
              <TopLine></TopLine>
            </InfoRow>
            <InfoRow>
              <TopLine></TopLine>
            </InfoRow>
            <InfoRow>
              <Column2>
                <Img src={require('../../Images/SF_me.png')} alt="h3" />
              </Column2>
              <Column1>
                <TextWrapper>
                  <TopLine style={{ color: '#fff' }}>
                    Hi 我是詠琪 Lauriel
                  </TopLine>
                  <Heading style={{ color: '#fff' }}>ABOUT ME</Heading>
                  <InfoRow>
                    <TopLine />
                  </InfoRow>
                  <Subtitle style={{ color: '#fff' }}>
                    1998.03.06 <MdOutlinePlace />
                    Hsinchu
                  </Subtitle>
                  <Subtitle style={{ color: '#fff' }}>
                    銘傳大學 華語教育學系
                  </Subtitle>
                  <InfoRow>
                    <TopLine></TopLine>
                  </InfoRow>
                  <Subtitle style={{ color: '#fff' }}>
                    對新事物充滿好奇心、豐富想像力，除了主修語言及教育，畢業後更挖掘出對於設計領域的興趣，善於觀察及享受將複雜的事物以簡單有效率的方式呈現。將創意從無到有、落地生根，也是我成就感的來源。
                  </Subtitle>
                </TextWrapper>
              </Column1>
            </InfoRow>
          </InfoWrapper>
        </Infopack>

        <InfoWrapper>
          <InfoRow>
            <TopLine></TopLine>
          </InfoRow>
          <InfoRow>
            <TopLine></TopLine>
          </InfoRow>
          <InfoRow>
            <TopLine>專長 STRENGTH</TopLine>
          </InfoRow>

          <InfoRow style={{ textAlign: 'center' }}>
            <Subtitle style={{ textAlign: 'center' }}>
              <Tag2H>平面設計</Tag2H>
            </Subtitle>

            <Subtitle style={{ textAlign: 'center' }}>
              <Tag2H>品牌形象</Tag2H>
            </Subtitle>

            <Subtitle style={{ textAlign: 'center' }}>
              <Tag2H>排版編輯</Tag2H>
            </Subtitle>

            <Subtitle style={{ textAlign: 'center' }}>
              <Tag2H>插圖繪畫</Tag2H>
            </Subtitle>

            <Subtitle style={{ textAlign: 'center' }}>
              <Tag2H>RWD網頁架設</Tag2H>
            </Subtitle>
          </InfoRow>

          <InfoRow>
            <TopLine></TopLine>
          </InfoRow>
          <InfoRow>
            <TopLine>技能 SKILLS</TopLine>
          </InfoRow>
          <InfoRow>
            <Column1>
              <Subtitle>
                <Tag2>
                  <SiAdobeillustrator
                    size={16}
                    style={{ marginRight: '5px' }}
                  />
                  Illustrator
                </Tag2>
              </Subtitle>
              <Subtitle>
                <Tag2>
                  <SiAdobephotoshop size={16} style={{ marginRight: '5px' }} />
                  Photoshop
                </Tag2>
              </Subtitle>
              <Subtitle>
                <Tag2>
                  <SiAdobeindesign size={16} style={{ marginRight: '5px' }} />
                  Indesign
                </Tag2>
              </Subtitle>
              <Subtitle>
                <Tag2>
                  <SiFigma size={16} style={{ marginRight: '5px' }} />
                  Figma
                </Tag2>
              </Subtitle>
            </Column1>
            <Column1>
              <Subtitle >
                <Tag2>
                  <FaHtml5 size={16} style={{ marginRight: '5px' }} />
                  HTML
                </Tag2>
              </Subtitle>
              <Subtitle>
                <Tag2>
                  <FaCss3Alt size={16} style={{ marginRight: '5px' }} />
                  CSS
                </Tag2>
              </Subtitle>
              <Subtitle>
                <Tag2>
                  <DiJavascript1 size={16} style={{ marginRight: '5px' }} />
                  JS
                </Tag2>
              </Subtitle>
              <Subtitle>
                <Tag2>
                  <SiReact size={16} style={{ marginRight: '5px' }} />
                  React
                </Tag2>
              </Subtitle>
            </Column1>
            <Column1>
              <Subtitle>
                <Tag2>
                  <SiBootstrap size={16} style={{ marginRight: '5px' }} />
                  bootstrap
                </Tag2>
              </Subtitle>
              <Subtitle>
                <Tag2>
                  <SiWordpress size={16} style={{ marginRight: '5px' }} />
                  WordPress
                </Tag2>
              </Subtitle>
              <Subtitle>
                <Tag2>
                  <SiMicrosoftoffice size={16} style={{ marginRight: '5px' }} />
                  Office
                </Tag2>
              </Subtitle>
            </Column1>
          </InfoRow>
        </InfoWrapper>
        <Infopack>
          <InfoWrapper>
            <InfoRow>
              <TopLine></TopLine>
            </InfoRow>
            <InfoRow>
              <TopLine></TopLine>
            </InfoRow>
            <InfoRow></InfoRow>
            <InfoRow>
              <TopLine style={{ color: '#fff' }}>證照 CERTIFICATIONS</TopLine>
            </InfoRow>
            <InfoRow>
              <TopLine></TopLine>
            </InfoRow>
            <InfoRow style={{ textAlign: 'center' }}>
              <Column1>
                <TextWrapperNoMax>
                  <Subtitle>
                    <TagH>Visual Design</TagH>
                  </Subtitle>
                  <Subtitle>
                    <TagH>Graphic Design & Illustration 2019</TagH>
                  </Subtitle>
                  <Subtitle>
                    <TagH>Visual Design using Adobe Photoshop 2019</TagH>
                  </Subtitle>
                  <Subtitle>
                    <TagH>JLPT日文檢定 N3 合格</TagH>
                  </Subtitle>
                  <Subtitle>
                    <TagH>TOEIC 多益 755分 藍色證書</TagH>
                  </Subtitle>
                </TextWrapperNoMax>
              </Column1>
              <Column1>
                <TextWrapperNoMax>
                  <Subtitle>
                    <TagH>TQC-OA POWERPOINT(實用級)</TagH>
                  </Subtitle>
                  <Subtitle>
                    <TagH>TQC-OA WORD(實用級)</TagH>
                  </Subtitle>
                  <Subtitle>
                    <TagH>TQC-OA 英文輸入</TagH>
                  </Subtitle>
                  <Subtitle>
                    <TagH>AIDA 2 自由潛水證照</TagH>
                  </Subtitle>
                </TextWrapperNoMax>
              </Column1>
            </InfoRow>
          </InfoWrapper>
        </Infopack>

        <InfoWrapper>
          <InfoRow>
            <TopLine></TopLine>
          </InfoRow>
          <InfoRow>
            <TopLine></TopLine>
          </InfoRow>
          <InfoRow></InfoRow>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <Subtitle style={{ textAlign: 'center' }}>
                  <Tag2>#積極進取</Tag2>
                  <Tag2>#自主學習</Tag2>
                </Subtitle>
                <InfoRow>
                  <TopLine></TopLine>
                </InfoRow>
                <Subtitle>
                  從小便對於繪畫美術特別感興趣，在大學畢業後，除去專業技能外，深感自身能力不足，興趣使然報名了設計類型講座及課程，期間認識志同道合的朋友、老師，對於產業的了解越深入，越了解需要學習的東西更多，在工作之餘更能夠抓緊時間，自學各式相關技能，如前端工程語言。
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column1>
              <TextWrapper>
                <Subtitle style={{ textAlign: 'center' }}>
                  <Tag2>#發現問題</Tag2>
                  <Tag2>#解決問題</Tag2>
                </Subtitle>
                <InfoRow>
                  <TopLine></TopLine>
                </InfoRow>
                <Subtitle>
                  補習班任職期間，在熟悉工作內容後，除了在教學上運用在校學習到的知識，豐富課程內容外，也發現現有的行政工作上不合理、不順暢的流程，在腦中有了大致的想法及實行方法後，勇於向主管提案，並獲得同意後著手改善補習班學生資料的管理、雲端點名表、經營社群、請假單的更新等。
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column1></Column1>
          </InfoRow>

          <InfoRow>
            <TopLine></TopLine>
          </InfoRow>
        </InfoWrapper>

        <Infopack>
          <InfoWrapper>
            <InfoRow>
              <TopLine></TopLine>
            </InfoRow>
            <InfoRow>
              <TopLine></TopLine>
            </InfoRow>
            <InfoRow></InfoRow>
            <InfoRow>
              <Column1>
                <TextWrapper>
                  <Subtitle style={{ textAlign: 'center' }}>
                    <Tag2H>#團隊合作</Tag2H>
                    <Tag2H>#組織企劃能力</Tag2H>
                    <Tag2H>#責任感</Tag2H>
                  </Subtitle>
                  <InfoRow>
                    <TopLine></TopLine>
                  </InfoRow>
                  <Subtitle style={{ color: '#fff' }}>
                    大學時期曾擔任系會生輔副組長，參與主辦過兩場校際活動及協辦數次活動，從組織系會成員到安排活動流程皆一手承包，更有幸在107學年度新生盃合唱比賽中為系所摘金，參與活動過程中充分認知到組織企劃及溝通能力的重要，也因此得到藉由數個大大小小的活動不斷反覆訓練能力的寶貴經驗。
                  </Subtitle>
                </TextWrapper>
              </Column1>
              <Column1>
                <TextWrapper>
                  <Subtitle style={{ textAlign: 'center' }}>
                    <Tag2H>#勇於挑戰</Tag2H>
                    <Tag2H>#高企圖心</Tag2H>
                    <Tag2H>#尋求創新</Tag2H>
                  </Subtitle>
                  <InfoRow>
                    <TopLine></TopLine>
                  </InfoRow>
                  <Subtitle style={{ color: '#fff' }}>
                    不管是求學生涯還是職場工作都喜歡積極參與各項活動，追求拓展視野、體驗新事物，包括在學期間參與各種國際校園參訪及爭取國外實習機會，即使畢業後也常利用工作之餘報名興趣班及職業講座。如出於對大海的熱愛，而考取自由潛水證照；爭取菲律賓靈惠學院實習機會；線上英語學伴為偏鄉孩童提供課堂外的幫助等。
                  </Subtitle>
                </TextWrapper>
              </Column1>
            </InfoRow>
            <InfoRow>
              <TopLine></TopLine>
            </InfoRow>
          </InfoWrapper>
        </Infopack>
      </InfoContainer>
    </>
  )
}

export default InfoSection
