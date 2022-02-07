import React from 'react';
import { StyledSidebar, Logo, Separator, LinkButtonWrapper } from './SidebarStyles';
import { routingURLList } from '../../lib/routing';
import { Link } from 'react-router-dom';
import apulseLogo from '../../assets/image/apulsetechlogo.png';
import LinkButton from '../Common/LinkButton';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo src={apulseLogo} />
      <Separator />
      <LinkButtonWrapper>
        {routingURLList.map((route) => (
          <LinkButton icon={route.icon}>
            <Link to={route.path}>{route.type}</Link>
          </LinkButton>
        ))}
      </LinkButtonWrapper>
      <Separator />
    </StyledSidebar>
  );
};

export default Sidebar;
