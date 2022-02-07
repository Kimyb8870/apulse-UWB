import React from 'react';
import { StyledSidebar } from './SidebarStyles';
import { routingURLList } from '../../lib/routing';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <nav>
        {routingURLList.map((route) => (
          <li>
            <Link to={route.path}>{route.type}</Link>
          </li>
        ))}
      </nav>
    </StyledSidebar>
  );
};

export default Sidebar;
