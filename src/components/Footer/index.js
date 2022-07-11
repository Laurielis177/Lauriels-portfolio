import React from 'react'
import {
  FooterConatainer,
  FooterWrap,
  SocialIcons,
  SocialIconLink,
  WebSiteRights,
} from './footerElement'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { AiFillBehanceCircle, AiFillGithub } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterConatainer id="footer">
      <FooterWrap>
        <SocialIcons>
          <SocialIconLink
            href="https://www.linkedin.com/in/lauriel05451226"
            target="_blank"
            aria-label="Linkin"
          >
            <FaLinkedin size={24} />
          </SocialIconLink>
          <SocialIconLink
          href="https://github.com/lauriel7"
          target="_blank"
          aria-label="Github"
        >
          <AiFillGithub size={24} />
        </SocialIconLink>
          <SocialIconLink
            href="https://www.facebook.com/profile.php?id=100008402534857"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </SocialIconLink>
          <SocialIconLink
            href="https://www.instagram.com/lauriel_7/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </SocialIconLink>
         
        </SocialIcons>
        <WebSiteRights>
          Copyright {new Date().getFullYear()} by Lauriel's Portfolio
        </WebSiteRights>
      </FooterWrap>
    </FooterConatainer>
  )
}

export default Footer
