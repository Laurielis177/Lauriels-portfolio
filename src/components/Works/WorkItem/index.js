import React from 'react'
import { Tag2H } from '../../TagElement'
import { WorksCard, WorksH2, WorksP } from './WorkItemElement'
import './Data'
// target="_blank"

const WorkItem = ({ Icon, alt, H2, tagitem1, tagitem2, tagitem3, where }) => {
  return (
    <WorksCard to={where} target="_blank">
      <img src={Icon} alt={alt} />
      <WorksH2>{H2}</WorksH2>
      <WorksP>
        <Tag2H>{tagitem1}</Tag2H>
        <Tag2H>{tagitem2}</Tag2H>
        <Tag2H>{tagitem3}</Tag2H>
      </WorksP>
    </WorksCard>
  )
}

export default WorkItem
