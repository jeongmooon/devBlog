import React from 'react';
import styled from 'styled-components';
import palette from '../../libs/stlyes/palette';

const MainBlock = styled.div`
    float: right;
    width: 100%;
`

const CategoryTitle = styled.h2`
    margin: 0 auto;
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    font-family: "KOTRA_SONGEULSSI";
    margin-bottom: 20px;
`

const ItemWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    margin: 0 auto;
    max-width: 1200px;
    margin-bottom: 100px;
  }
`;

const BoardItem = styled.div`
    font-family: 'KOTRA_SONGEULSSI';
    width: 175px;
    height: 175px;
    margin: 0.5rem;
    border-radius: 5px;
    position: relative;
    background-size: cover;
    
    ::before {
    content: "";
    opacity: 0.5;
    border-radius: 5px;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: #000;
    }

    @media only screen and (min-width: 768px) {
    width: 250px;
    height: 250px;
}
`;

const BoardTitle = styled.p`
    color : ${palette.main};
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    position: relative;
    white-space: pre-wrap;
`

function MainComponent() {
  return (
      <MainBlock>
          <CategoryTitle>FrontEnd</CategoryTitle>
          <ItemWrap>
            <BoardItem src="" alt="">
                <BoardTitle>HTML</BoardTitle>                  
            </BoardItem>
            <BoardItem>
                <BoardTitle>JAVASCRIPT</BoardTitle>
            </BoardItem>
            <BoardItem>
                <BoardTitle>REACT</BoardTitle>
            </BoardItem>
          </ItemWrap>
          <CategoryTitle>BackEnd</CategoryTitle>
              <BoardItem>
                  <BoardTitle>JAVA</BoardTitle>
                  <BoardTitle>Node.js</BoardTitle>
                  <BoardTitle>REACT</BoardTitle>
              </BoardItem>
          <CategoryTitle>DB</CategoryTitle>
              <BoardItem>
                  <BoardTitle>SQL</BoardTitle>
                  <BoardTitle>MongoDB</BoardTitle>
              </BoardItem>
          <CategoryTitle>Cloud</CategoryTitle>
              <BoardItem>
                  <BoardTitle>AWS</BoardTitle>
                  <BoardTitle>Firebase</BoardTitle>
              </BoardItem>
      </MainBlock>
  )
}

export default MainComponent;
