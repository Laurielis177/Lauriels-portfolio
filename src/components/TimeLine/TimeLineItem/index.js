import React from 'react'
import './index.css'
import './Data'


const TimeLineItem = ({Pics, TimeLineH2, TimeLineP,alt,style}) => {
  return (
    <div className="timeline-item">
              <div className="timeline__content">
                <img 
                  style={{style}}
                  className="timeline__img"
                  src={Pics}
                  alt={alt}
                />
                <h2 className="timeline__content-title">{TimeLineH2}</h2>
                <p className="timeline__content-desc">
                  {TimeLineP}
                </p>
              </div>
            </div>
  )
}

export default TimeLineItem
