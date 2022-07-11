import React from 'react'
import './index.css'


const CodeSideBar = () => {
    const title = String.raw`
// 定義SideBar，並且傳入參數{ toggle, isOpen }
    const Sidebar = ({ toggle, isOpen }) => {
        return (
// 點擊事件onClick及開啟事件isOpen
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to="works" onClick={toggle}>
                    Works
                </SidebarLink>
                <SidebarLink to="contact" onClick={toggle}>
                    Contact
                </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            </SidebarContainer>
        )
        }
        
        export default Sidebar
        `;
  return (
    <div className='post'>
    <pre className='codeblock'> {title} </pre>
    </div>
  )
}

export default CodeSideBar
