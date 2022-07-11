import React from 'react'
import { WorksContainer, WorksH1, WorksWrapper } from './WorksElement'
import WorkItem from './WorkItem'
import {
  WorkObj1,
  WorkObj2,
  WorkObj3,
  WorkObj4,
  WorkObj5,
  WorkObj6,
  WorkObj7,
  WorkObj8,
} from './WorkItem/Data'

const Works = () => {
  return (
    <>
    <WorksContainer id="works" >
      <WorksH1>WORKS</WorksH1>
      <WorksWrapper>
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
    </>
  )
}

export default Works
