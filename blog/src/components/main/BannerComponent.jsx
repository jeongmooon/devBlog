import React from 'react';
import styled from 'styled-components';

const BannerBlock = styled.div`
    width: 100%;
    height: 15vh;
    margin-bottom: relative;
    cursor: pointer;
`

const BannerImg = styled.img`
    display: block;
    width: 100%;
    height: 15vh;
    object-fit: cover;
    opacity: 0.7;
`

function BannerComponent() {
  return (
      <BannerBlock>
          <BannerImg src="https://cdn.gamemeca.com/data_center/177/433/20190626113031.jpg" alt='' />
      </BannerBlock>
  );
}

export default BannerComponent;
