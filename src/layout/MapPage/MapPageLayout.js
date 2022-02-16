import React from 'react';
import styled from 'styled-components';
import { grayPalette } from '../../lib/palette';
import { bluePalette } from '../../lib/palette';
import TagList from '../../components/TagList';
import MapInfo from '../../components/MapInfo';

const StyledMapLayout = styled.div`
  display: flex;
  background: ${grayPalette[1]};
  padding: 10px;
  height: 90%;
`;

const MapRight = styled.div`
  flex-basis: 85%;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
`;

const MapRightTop = styled.div`
  background-color: ${grayPalette[0]};
  flex-basis: 80%;
  max-height: 80%;
`;

const MapRightBottom = styled.div`
  background-color: ${grayPalette[2]};
  flex-basis: 20%;
`;

const MapLeft = styled.div`
  flex-basis: 15%;
  overflow-y: scroll;
  background-color: ${grayPalette[2]};
`;

const MarginBottom = styled.div`
  height: 0;
  margin-bottom: 10px;
`;

const MapPageLayout = () => {
  return (
    <StyledMapLayout>
      <MapRight>
        {/* todo: 아래의 영역에 대한 부분은 api확인 이후에 상세구현 */}

        <MapRightTop>
          {/* todo: 아래 이미지 api확인 이후에 iframe으로 교체하기 */}
          <img
            src="https://images.homify.com/image/upload/a_0,c_fill,f_auto,h_632,q_auto,w_632/v1519137567/p/photo/image/2443557/1_%C3%9A_%C3%88%C2%B5%C2%B5.jpg"
            style={{
              height: '100%',
              width: '100%',
              padding: '50px',
            }}
          />
        </MapRightTop>

        <MarginBottom />

        <MapRightBottom>
          {/* todo: Map 관련 info를 확인할 수 있는 구역, 기능 및 디자인 추가 기획 필요함 */}
          <MapInfo />
        </MapRightBottom>
      </MapRight>

      <MapLeft>
        {/* todo: 리덕스 모듈 적용 후 연동 */}
        <TagList />
      </MapLeft>
    </StyledMapLayout>
  );
};

export default MapPageLayout;
