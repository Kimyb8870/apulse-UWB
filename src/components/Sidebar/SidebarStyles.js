import { Link as ReactRouterDomLink } from 'react-router-dom';
import styled from 'styled-components';
import { bluePalette } from '../../lib/palette';

export const StyledSidebar = styled.div`
  background-color: ${bluePalette[8]};
  padding-left: 15px;
  padding-right: 15px;
  flex-basis: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Separator = styled.div`
  width: 100%;
  height: 0;
  border-bottom: 1px solid ${bluePalette[9]};
`;

export const LinkButtonWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
