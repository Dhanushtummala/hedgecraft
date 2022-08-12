import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import NoteIcon from '@mui/icons-material/Note';
import WorkIcon from '@mui/icons-material/Work';
import TimelineIcon from '@mui/icons-material/Timeline';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';

export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'overview',
          icon: <AccountBalanceIcon />,
          linkurl: 'overview'
        },
      ],
    },
  
    {
      title: 'Trading',
      links: [
        {
          name: 'orders',
          icon: <NoteIcon />,
          linkurl: 'orders'
        },
        {
          name: 'holdings',
          icon: <WorkIcon />,
          linkurl: 'holdings'
        },
        {
          name: 'positions',
          icon: <TimelineIcon />,
          linkurl: 'positions'
        },
        {
          name: 'trade',
          icon: <CandlestickChartIcon />,
          linkurl: 'trade'
        },
      ],
    },
    {
      title: 'Strategies',
      links: [
        {
          name: 'Delta Strangles',
          icon: <ArchitectureIcon />,
          linkurl: 'deltastrangles'
        },
        {
          name: 'Ratio Spreads',
          icon: <GroupWorkIcon />,
          linkurl: 'na'
        },
        {
          name: 'Calender Spreads',
          icon: <CalendarMonthIcon />,
          linkurl: 'na'
        },
        {
          name: 'Expiry Trades',
          icon: <ScheduleIcon />,
          linkurl: 'na'
        },
      ],
    },
    {
      title: 'Admin',
      links: [
        {
          name: 'Modify Clients',
          icon: <PeopleIcon />,
          linkurl: 'na'
        },
        {
          name: 'Modify Grouping',
          icon: <GroupsIcon />,
          linkurl: 'na'
        },
      ],
    },
  ];


export const quant_signindata = {
    "user_id": "nDKc8RwsRr5AEoptWycbpg",
    "token": "dajc3zqh5Zw",
    "country": "in",
    "ac_details": "{\"in\": {\"ac_type\": \"pro_plus\", \"ac_validity\": \"09-Jan-23\"}}",
    "email": "dhanushtummala@gmail.com"
}

export const nifty_sub = {
  "Scrip": "NIFTY",
  "Expiry": "11-Aug-22",
  "custom_key": "chain",
  "action": "chain-pain-skew-pcr",
  "platform": "web",
  "version": "2.3.73",
  "sub_platform": "live"
}

export const banknifty = {
  "expiry": [
      "11-Aug-2022",
      "18-Aug-2022",
      "25-Aug-2022",
      "01-Sep-2022",
      "08-Sep-2022",
      "29-Sep-2022",
      "27-Oct-2022",
      "29-Dec-2022",
      "30-Mar-2023",
      "29-Jun-2023"
  ]}
