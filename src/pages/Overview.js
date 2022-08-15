
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addsub } from '../redux/redusers/socketSlice';
import OverviewCard from '../components/OverviewCard';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useSelector } from 'react-redux';




const Overview = () => {


  const dataredux = useSelector((state) => state.userdata.value)

  const [overviewclients, setOverviewclients] = useState({total: 0, active: 0})
 

  useEffect(() => {
    const totalclients = () => {
       setOverviewclients(prev => {
        return {
          ...prev,
          total: dataredux.data[1].length
        }
       })
    }

    const activeclients = () => {
      setOverviewclients(prev => {
       return {
         ...prev,
         active: dataredux.data[1].filter(x => x.isactive==true).length
       }
      })
   }

   totalclients()
   activeclients()
  },[dataredux.data])


  return (
    <div className='flex mt-10 ml-5 justify-center'>
      <div className='flex-col'>
          <OverviewCard title="Total AUM FUND" value="1,00,00,000" icon={<CurrencyRupeeIcon />} title_c="#4e73df"/>
          <OverviewCard title="MARGIN USED" value="60,00,000" icon={<CurrencyRupeeIcon />} title_c="#1cc88a"/>
          <OverviewCard title="MARGIN AVAILABLE" value="40,00,000" icon={<CurrencyRupeeIcon />} title_c="#f6c23e"/>
      </div>
      <div className='flex-col ml-24'>
          <OverviewCard title="MTM" value="10,00,000" icon={<AccountBalanceWalletIcon />} title_c="#1cc88a"/>
          <OverviewCard title="PNL" value="10,00,000" icon={<AccountBalanceWalletIcon />} title_c="#1cc88a"/>
      </div>
      <div className='flex-col ml-24'>
          <OverviewCard title="TOTAL CLIENTS" value={overviewclients.total} icon={<PeopleAltIcon />} title_c="#858796"/>
          <OverviewCard title="ACTIVE CLIENTS" value={overviewclients.active} icon={<PeopleAltIcon />} title_c="#1cc88a"/>
          <OverviewCard title="INACTIVE CLIENTS" value={overviewclients.total-overviewclients.active} icon={<PeopleAltIcon />} title_c="#e74a3b"/>
      </div>
    </div>
  )
}

export default Overview