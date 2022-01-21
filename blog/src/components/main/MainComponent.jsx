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
    position: relative;
    width: 175px;
`

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
              <BoardItem>
                  <BoardTitle>HTML</BoardTitle>
                  <BoardTitle>JAVASCRIPT</BoardTitle>
                  <BoardTitle>REACT</BoardTitle>
              </BoardItem>
          </ItemWrap>
          <CategoryTitle>BackEnd</CategoryTitle>
          <CategoryTitle>Cloud</CategoryTitle>
      </MainBlock>
  )
}

export default MainComponent;
