import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdWorkspacesFilled } from 'react-icons/md'
import { AiTwotonePhone } from 'react-icons/ai'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElement'

const Sidebar2 = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon size={24} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            <FaRegUserCircle style={{ marginRight: '5px' }} />
            About
          </SidebarLink>
          <SidebarLink to="works" onClick={toggle}>
            <MdWorkspacesFilled style={{ marginRight: '5px' }} />
            Other
          </SidebarLink>
          <SidebarLink to="footer" onClick={toggle}>
            <AiTwotonePhone style={{ marginRight: '5px' }} />
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar2
