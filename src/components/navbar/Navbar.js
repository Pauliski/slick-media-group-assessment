import React from 'react'
import NavbarTextIcon from '../../../public/svg/NavbarTextIcon'
import { NavbarSvgContainer, NavbarText, NavbarTextContainer, NavbarWrapper } from './style'

const Navbar = () => {
  return (
    <NavbarWrapper>
        <NavbarTextContainer>
           <NavbarSvgContainer>
              <NavbarTextIcon />
           </NavbarSvgContainer>
              
            
        </NavbarTextContainer>
    </NavbarWrapper>
  )
}

export default Navbar