import { Avatar, Badge, IconButton, Tooltip } from '@mui/material';
import React from 'react';
import { StyledTopbar, StyledTitle, FlexRow } from './TopbarStyles';
import { Bell as BellIcon } from '../../assets/icons/bell';
import { UserCircle as UserCircleIcon } from '../../assets/icons/user-circle';

const Topbar = () => {
  return (
    <StyledTopbar>
      <StyledTitle>Apulsetech-UWB</StyledTitle>
      <FlexRow>
        <Tooltip title="Notifications">
          <IconButton sx={{ mr: 2 }}>
            <Badge badgeContent={4} color="primary" variant="primary">
              <BellIcon fontSize="medium" />
            </Badge>
          </IconButton>
        </Tooltip>
        <Avatar
          sx={{
            height: 30,
            width: 30,
            ml: 1,
          }}
          src="/static/images/avatars/avatar_1.png"
        >
          <UserCircleIcon fontSize="small" />
        </Avatar>
      </FlexRow>
    </StyledTopbar>
  );
};

export default Topbar;
