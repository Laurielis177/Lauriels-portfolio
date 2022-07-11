import React, { useState, useEffect } from 'react'
import { FaBars, FaRegUserCircle } from 'react-icons/fa'
import { MdWorkspacesFilled } from 'react-icons/md'
import { AiTwotonePhone } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  Img,
} from './NavbarElement'

const Navbar2 = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" scrollNav={scrollNav} target="_top">
              <Img
                style={{ width: '24px' }}
                src={require('../../Images/laurielsicon.png')}
                alt="navbar"
              />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars size={22} scrollNav={scrollNav} />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about">
                  <FaRegUserCircle style={{ marginRight: '5px' }} />
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="works">
                  <MdWorkspacesFilled style={{ marginRight: '5px' }} />
                  Other
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="footer">
                  <AiTwotonePhone style={{ marginRight: '5px' }} />
                  Contact
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar2
