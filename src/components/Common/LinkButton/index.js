import React from 'react';
import { StyledLinkButton, IconWrapper } from './LInkButtonStyles';

const LinkButton = ({ icon, children }) => {
  return (
    <StyledLinkButton>
      <IconWrapper>{icon}</IconWrapper>
      {children}
    </StyledLinkButton>
  );
};

export default LinkButton;
