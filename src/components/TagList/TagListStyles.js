import styled from 'styled-components';
import { bluePalette, grayPalette } from '../../lib/palette';

export const StyledTagItem = styled.li`
  background: #ffffff;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  padding: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 120ms ease-in;

  &:hover {
    background: ${bluePalette[1]};
  }

  & + & {
    margin-top: 7px;
  }

  svg {
    fill: ${(props) => (props.isTagActive ? bluePalette[6] : grayPalette[6])};
    margin-right: 5px;
  }
`;

export const StyledTagList = styled.ul`
  padding: 10px;
`;
