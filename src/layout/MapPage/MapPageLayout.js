import React from 'react';
import styled from 'styled-components';
import { grayPalette } from '../../lib/palette';
import { bluePalette } from '../../lib/palette';

const StyledMapLayout = styled.div`
  display: flex;
  height: 100%;
  background: ${grayPalette[1]};
  padding: 10px;
`;

const MapRight = styled.div`
  flex-basis: 82.5%;
  margin-right: 10px;
`;

const MapLeft = styled.div`
  flex-basis: 17.5%;
`;

const MapPageLayout = () => {
  return (
    <StyledMapLayout>
      <MapRight>
        {/* todo: 아래의 영역에 대한 부분은 api확인 이후에 상세구현 */}
        <div style={{ backgroundColor: `${bluePalette[1]}`, height: '80%' }}>map 화면</div>
        <div style={{ backgroundColor: `${grayPalette[3]}`, height: '20%' }}>map에 대한 정보를 확인하거나 map 관련 설정을 할 수 있는 영역</div>
      </MapRight>
      <MapLeft>
        <div style={{ backgroundColor: `${grayPalette[2]}`, height: '100%' }}>map에서 보여지는 tag를 리스트형태로 받아옴</div>
      </MapLeft>
    </StyledMapLayout>
  );
};

export default MapPageLayout;
