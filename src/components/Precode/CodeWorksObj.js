import React from 'react'
import './index.css'


const CodeWorksObjs = () => {
    const title = String.raw`
  const Works = () => {
    return (
      <WorksContainer id="works">
        <WorksH1>WORKS</WorksH1>
        <WorksWrapper>
        
          // 傳入Data.js中的各項Obj
          <WorkItem {...WorkObj8} />
          <WorkItem {...WorkObj1} />
          <WorkItem {...WorkObj2} />
          <WorkItem {...WorkObj3} />
          <WorkItem {...WorkObj4} />
          <WorkItem {...WorkObj5} />
          <WorkItem {...WorkObj6} />
          <WorkItem {...WorkObj7} />
        </WorksWrapper>
      </WorksContainer>
    )}
  
  export default Works
        `;
  return (
    <div className='post'>
    <pre className='codeblock'> {title} </pre>
    </div>
  )
}

export default CodeWorksObjs