import React, { Component } from 'react'
import TimeLineItem from './TimeLineItem'
import {
  TimeLineObj1,
  TimeLineObj3,
  TimeLineObj4,
  TimeLineObj5,
  TimeLineObj6,
  TimeLineObj7,
  TimeLineObj8,
  TimeLineObj9,
  TimeLineObj10,
} from '../TimeLine/TimeLineItem/Data'
import './index.css'

export default class TineLine extends Component {
  render() {
    return (
      <>
        <div className="timeline-container">
          <div style={{ height: '60px' }}></div>

          <div className="timeline-header">
            <h2 className="timeline-header__title">EXPERIENCE</h2>
          </div>
          <div style={{ height: '100px' }}></div>
          <div className="timeline">
            <TimeLineItem {...TimeLineObj1} />
            <TimeLineItem {...TimeLineObj3} />
            <TimeLineItem {...TimeLineObj4} />
            <TimeLineItem {...TimeLineObj7} />
            <TimeLineItem {...TimeLineObj5} />
            <TimeLineItem {...TimeLineObj8} />
            <TimeLineItem {...TimeLineObj9} />
            <TimeLineItem {...TimeLineObj10} />
            <TimeLineItem {...TimeLineObj6} />

          </div>
        </div>
      </>
    )
  }
}
