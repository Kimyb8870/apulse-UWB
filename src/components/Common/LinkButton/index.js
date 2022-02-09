import React from 'react';
import { StyledLinkButton, IconWrapper } from './LInkButtonStyles';

const LinkButton = ({ icon, children, ...restProps }) => {
  return (
    <StyledLinkButton {...restProps}>
      <IconWrapper>{icon}</IconWrapper>
      {children}
    </StyledLinkButton>
  );
};

export default LinkButton;
