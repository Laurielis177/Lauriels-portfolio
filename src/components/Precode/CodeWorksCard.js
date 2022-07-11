import React from 'react'
import './index.css'


const CodeWorksCards = () => {
    const title = String.raw`
  const WorkItem = ({ 
    Icon, 
    alt, 
    H2, 
    tagitem1,
    tagitem2,
    tagitem3,
    where
  }) => {
    return (
      <WorksCard>
        // 卡片用內容用參數替代，可以重複使用多次。
        <img src={Icon} alt={alt} />
        <WorksH2>{H2}</WorksH2>
        <WorksP>
        <Tag2H>{tagitem1}</Tag2H>
        <Tag2H>{tagitem2}</Tag2H>
        <Tag2H>{tagitem3}</Tag2H>
        </WorksP>
        <Button to={where} target="_blank">MORE</Button>
      </WorksCard>
    )
  }
  
  export default WorkItem
        `;
  return (
    <div className='post'>
    <pre className='codeblock'> {title} </pre>
    </div>
  )
}

export default CodeWorksCards