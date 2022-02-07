import styled from 'styled-components';
import { bluePalette } from '../../../lib/palette';

export const StyledLinkButton = styled.div`
  width: 100%;
  border: none;
  outline: none;
  background: ${bluePalette[8]};
  margin-bottom: 10px;
  transition: all 200ms;
  border-radius: 10px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(0, 0, 0, 0.25);
  }

  a {
    padding: 10px 15px;
    display: block;
    width: 100%;
    text-decoration: none;
    font-size: 1rem;
    color: #ffffff;

    &:hover {
      color: ${bluePalette[0]};
    }
  }
`;

export const IconWrapper = styled.div`
  svg {
    fill: ${bluePalette[0]};
    margin-left: 20px;
  }
`;
