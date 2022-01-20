import React from 'react'
import styled from 'styled-components'
import palette from '../../libs/stlyes/palette'
import Responsive from './Responsive'


const NavbarBlock = styled.div`
    padding: 1rem 0;
    width: 100%;
    height: 40px;
    position: fixed;
    top: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    z-index: 999;
    background: ${palette.main};
`

const NavbarWrapper = styled(Responsive)`
    display: flex;
    justify-content: space-between;
    line-height: 40px;

    .left {
    display: flex;
    align-items: center;
    }
    .right {
    display: flex;
    align-items: center;
    }
`

const NavText = styled.div`
  font-size: 1.5rem;
  border: 1;
  text-align: center;
  display: flex;
  color: ${palette.back};
  cursor: pointer;

  & + & {
    margin-left: 2rem;
  }
`

const SubMenuBlock = styled.div`
  width: 100%;
  height: 0;
`

const SubMenuWrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  line-height: 40px;

  .left {
  display: flex;
  align-items: center;
  }
  .right {
  display: flex;
  align-items: center;
  }
`

const SubMenu = styled.div`
  z-index: 999;
  background-color: #fff;

    .show-menu{
    width: 700px;
    height: 500px;
    position: absolute;
    left: 0px;
    transition: 1s;
    font-size: 1.2rem;
    border: 1;
    }

    .hide-menu{
    width: 376px;
    height: 500px;
    position: absolute;
    left: -376px;
    transition: 1s;
    }
`

function NavBarCompoent({toggleMEnu, isOpen}) {
  return (
    <NavbarBlock>
      <NavbarWrapper>
        <div className='left'>
          <NavText onClick={()=>toggleMEnu()}>공부한것들</NavText>
        </div>
        <div className='right'>
          <NavText>JeongMoonBlog</NavText>
        </div>
      </NavbarWrapper>
      <SubMenuBlock>
        <SubMenuWrapper>
          {isOpen ? (
          <SubMenu className="show-menu">
            <li>HTML</li>
            <li>JavScript</li>
            <li>Java</li>
            <li>React</li>
          </SubMenu>
          ):(
            ""
          )}
        </SubMenuWrapper>
      </SubMenuBlock>
    </NavbarBlock>
  )
}

export default NavBarCompoent;
