import React from 'react';
import styled from 'styled-components';

const HtmlBlock = styled.div`
`

function HtmlComponent() {
  return (
      <HtmlBlock>
          <img src=""></img>
          <h1>내용</h1>
          <div>하드코딩</div>
      </HtmlBlock>
  );
}

export default HtmlComponent;
