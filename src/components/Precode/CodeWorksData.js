import React from 'react'
import './index.css'


const CodeWorksData = () => {
    const title = String.raw`
  // 寫入各項資料到Obj，即可重複使用多次。
  export const WorkObj1 = {
    Icon: require('../../../Images/10HiLife.png'),
    alt: 'hilife',
    H2: 'HI-LIFE萊爾富APP',
    tagitem1: 'UI設計',
    tagitem2: 'Figma',
    tagitem3: '...',
    where: '/works1',
  }
        `;
  return (
    <div className='post'>
    <pre className='codeblock'> {title} </pre>
    </div>
  )
}

export default CodeWorksData