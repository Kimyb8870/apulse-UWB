import styled from 'styled-components';
import { bluePalette, grayPalette } from '../../lib/palette';

export const StyledTopbar = styled.div`
  flex-basis: 10%;

  background-color: ${grayPalette[0]};
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.05);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const StyledTitle = styled.h1`
  color: ${bluePalette[6]};
  font-weight: 700;
  letter-spacing: 1.5px;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
