import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
// import { Link as LinkR } from 'react-router-dom'
import {Link as LinkS } from 'react-scroll';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  height: 100%;
  width: 50%;
  background: #16454f;
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  border-radius: 20px 0px 0px 20px;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
export const Icon = styled.div`
  position: absolute;
  top: 28px;
    right: 36px;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const CloseIcon = styled(FaTimes)`

    color: #fff;
`

export const SidebarWrapper = styled.div`
  color: #fff;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 400px) {
    grid-template-rows: repeat(6, 60px);
  }
`

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #feba34;
    transition: 0.2s ease-in-out;
  }
`
