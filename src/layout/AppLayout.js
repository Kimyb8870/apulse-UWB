import React from 'react';
import { StyledAppLayout, FlexColumn, Main } from './AppLayoutStyles';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const AppLayout = ({ children }) => {
  return (
    <StyledAppLayout>
      <Sidebar />
      <FlexColumn>
        <Topbar />
        {children}
      </FlexColumn>
    </StyledAppLayout>
  );
};

export default AppLayout;
