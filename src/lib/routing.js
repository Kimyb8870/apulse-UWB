import BarChartIcon from '@mui/icons-material/BarChart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export const routingURLList = [
  {
    id: '1',
    type: 'dashboard',
    path: '/',
    icon: <BarChartIcon />,
  },
  {
    id: '2',
    type: 'map',
    path: '/map',
    icon: <LocationOnIcon />,
  },
  {
    id: '3',
    type: 'alarm',
    path: '/alarm',
    icon: <NotificationsActiveIcon />,
  },
];
