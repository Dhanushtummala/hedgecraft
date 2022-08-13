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
          linkurl: 'modifyclients'
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


  export const dummydata = [
    {
      "OrderID": 10248,
      "CustomerID": "VINET",
      "OrderDate": "1996-07-04T00:00:00.000Z",
      "ShippedDate": "1996-07-16T00:00:00.000Z",
      "Freight": 32.38,
      "ShipName": "Vins et alcools Chevalier",
      "ShipAddress": "59 rue de l\"Abbaye",
      "ShipCity": "Reims",
      "ShipRegion": null,
      "ShipCountry": "France"
    },
    {
      "OrderID": 10249,
      "CustomerID": "TOMSP",
      "OrderDate": "1996-07-05T00:00:00.000Z",
      "ShippedDate": "1996-07-10T00:00:00.000Z",
      "Freight": 11.61,
      "ShipName": "Toms Spezialitäten",
      "ShipAddress": "Luisenstr. 48",
      "ShipCity": "Münster",
      "ShipRegion": null,
      "ShipCountry": "Germany"
    },
    {
      "OrderID": 10250,
      "CustomerID": "HANAR",
      "OrderDate": "1996-07-08T00:00:00.000Z",
      "ShippedDate": "1996-07-12T00:00:00.000Z",
      "Freight": 65.83,
      "ShipName": "Hanari Carnes",
      "ShipAddress": "Rua do Paço, 67",
      "ShipCity": "Rio de Janeiro",
      "ShipRegion": "RJ",
      "ShipCountry": "Brazil"
    },
    {
      "OrderID": 10251,
      "CustomerID": "VICTE",
      "OrderDate": "1996-07-08T00:00:00.000Z",
      "ShippedDate": "1996-07-15T00:00:00.000Z",
      "Freight": 41.34,
      "ShipName": "Victuailles en stock",
      "ShipAddress": "2, rue du Commerce",
      "ShipCity": "Lyon",
      "ShipRegion": null,
      "ShipCountry": "France"
    },
    {
      "OrderID": 10252,
      "CustomerID": "SUPRD",
      "OrderDate": "1996-07-09T00:00:00.000Z",
      "ShippedDate": "1996-07-11T00:00:00.000Z",
      "Freight": 51.3,
      "ShipName": "Suprêmes délices",
      "ShipAddress": "Boulevard Tirou, 255",
      "ShipCity": "Charleroi",
      "ShipRegion": null,
      "ShipCountry": "Belgium"
    },
    {
      "OrderID": 10253,
      "CustomerID": "HANAR",
      "OrderDate": "1996-07-10T00:00:00.000Z",
      "ShippedDate": "1996-07-16T00:00:00.000Z",
      "Freight": 58.17,
      "ShipName": "Hanari Carnes",
      "ShipAddress": "Rua do Paço, 67",
      "ShipCity": "Rio de Janeiro",
      "ShipRegion": "RJ",
      "ShipCountry": "Brazil"
    },
    {
      "OrderID": 10254,
      "CustomerID": "CHOPS",
      "OrderDate": "1996-07-11T00:00:00.000Z",
      "ShippedDate": "1996-07-23T00:00:00.000Z",
      "Freight": 22.98,
      "ShipName": "Chop-suey Chinese",
      "ShipAddress": "Hauptstr. 31",
      "ShipCity": "Bern",
      "ShipRegion": null,
      "ShipCountry": "Switzerland"
    },
    {
      "OrderID": 10255,
      "CustomerID": "RICSU",
      "OrderDate": "1996-07-12T00:00:00.000Z",
      "ShippedDate": "1996-07-15T00:00:00.000Z",
      "Freight": 148.33,
      "ShipName": "Richter Supermarkt",
      "ShipAddress": "Starenweg 5",
      "ShipCity": "Genève",
      "ShipRegion": null,
      "ShipCountry": "Switzerland"
    },
    {
      "OrderID": 10256,
      "CustomerID": "WELLI",
      "OrderDate": "1996-07-15T00:00:00.000Z",
      "ShippedDate": "1996-07-17T00:00:00.000Z",
      "Freight": 13.97,
      "ShipName": "Wellington Importadora",
      "ShipAddress": "Rua do Mercado, 12",
      "ShipCity": "Resende",
      "ShipRegion": "SP",
      "ShipCountry": "Brazil"
    },
    {
      "OrderID": 10257,
      "CustomerID": "HILAA",
      "OrderDate": "1996-07-16T00:00:00.000Z",
      "ShippedDate": "1996-07-22T00:00:00.000Z",
      "Freight": 81.91,
      "ShipName": "HILARION-Abastos",
      "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
      "ShipCity": "San Cristóbal",
      "ShipRegion": "Táchira",
      "ShipCountry": "Venezuela"
    },
    {
      "OrderID": 10258,
      "CustomerID": "ERNSH",
      "OrderDate": "1996-07-17T00:00:00.000Z",
      "ShippedDate": "1996-07-23T00:00:00.000Z",
      "Freight": 140.51,
      "ShipName": "Ernst Handel",
      "ShipAddress": "Kirchgasse 6",
      "ShipCity": "Graz",
      "ShipRegion": null,
      "ShipCountry": "Austria"
    },
    {
      "OrderID": 10259,
      "CustomerID": "CENTC",
      "OrderDate": "1996-07-18T00:00:00.000Z",
      "ShippedDate": "1996-07-25T00:00:00.000Z",
      "Freight": 3.25,
      "ShipName": "Centro comercial Moctezuma",
      "ShipAddress": "Sierras de Granada 9993",
      "ShipCity": "México D.F.",
      "ShipRegion": null,
      "ShipCountry": "Mexico"
    },
    {
      "OrderID": 10260,
      "CustomerID": "OTTIK",
      "OrderDate": "1996-07-19T00:00:00.000Z",
      "ShippedDate": "1996-07-29T00:00:00.000Z",
      "Freight": 55.09,
      "ShipName": "Ottilies Käseladen",
      "ShipAddress": "Mehrheimerstr. 369",
      "ShipCity": "Köln",
      "ShipRegion": null,
      "ShipCountry": "Germany"
    },
    {
      "OrderID": 10261,
      "CustomerID": "QUEDE",
      "OrderDate": "1996-07-19T00:00:00.000Z",
      "ShippedDate": "1996-07-30T00:00:00.000Z",
      "Freight": 3.05,
      "ShipName": "Que Delícia",
      "ShipAddress": "Rua da Panificadora, 12",
      "ShipCity": "Rio de Janeiro",
      "ShipRegion": "RJ",
      "ShipCountry": "Brazil"
    },
    {
      "OrderID": 10262,
      "CustomerID": "RATTC",
      "OrderDate": "1996-07-22T00:00:00.000Z",
      "ShippedDate": "1996-07-25T00:00:00.000Z",
      "Freight": 48.29,
      "ShipName": "Rattlesnake Canyon Grocery",
      "ShipAddress": "2817 Milton Dr.",
      "ShipCity": "Albuquerque",
      "ShipRegion": "NM",
      "ShipCountry": "USA"
    },
    {
      "OrderID": 10263,
      "CustomerID": "ERNSH",
      "OrderDate": "1996-07-23T00:00:00.000Z",
      "ShippedDate": "1996-07-31T00:00:00.000Z",
      "Freight": 146.06,
      "ShipName": "Ernst Handel",
      "ShipAddress": "Kirchgasse 6",
      "ShipCity": "Graz",
      "ShipRegion": null,
      "ShipCountry": "Austria"
    },
    {
      "OrderID": 10264,
      "CustomerID": "FOLKO",
      "OrderDate": "1996-07-24T00:00:00.000Z",
      "ShippedDate": "1996-08-23T00:00:00.000Z",
      "Freight": 3.67,
      "ShipName": "Folk och fä HB",
      "ShipAddress": "Åkergatan 24",
      "ShipCity": "Bräcke",
      "ShipRegion": null,
      "ShipCountry": "Sweden"
    }
  ]