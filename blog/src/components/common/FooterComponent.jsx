import React from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  background-color: #2a2a2a;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "GowunDodum-Regular";
  color: #fff;
  font-size: 15px;
`;

const FooterElement = styled.li`
  float: left;

  & + & {
    margin-left: 10px;
  }
`;

function FooterComponent() {
  return (
      <FooterWrap>
          <ul>
            <FooterElement>블로그</FooterElement>
            <FooterElement>github</FooterElement>
          </ul>
      </FooterWrap>
  );
}

export default FooterComponent;
