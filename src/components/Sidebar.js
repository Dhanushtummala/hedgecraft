import React from 'react'
import { links } from '../data/maindata'
import { NavLink, useLocation} from 'react-router-dom'
import './sidebar.css'



const Sidebar = () => {

  let location = useLocation();
  
  return (
    <div className='drop-shadow-2xl pb-10 h-screen overflow-auto' id="sidebar">
        <div className='flex h-16 border-b-4 items-center pl-2 text-center tracking-widest text-3xl font-extrabold text-white'><div id='title-side'>HEDGECRAFT</div></div>
        <div className='mt-10 pl-3'>
            {
                links.map((item) => {
                 return (
                    <div key={item.title}>
                        <p className='text-white ml-3 mt-6 uppercase font-bold text-xl'>{item.title}</p>  
                        <div className='text-gray-300'>
                          {item.links.map((x) => (
                            <NavLink
                            to={`/auth/dashboard/${x.linkurl}`}
                            key={x.name}
                            className={({ isActive }) => {
                              return (isActive?'active-link':'inactive-link')
                            }}
                            >
                            <div className='flex gap-3 p-2 text-lg items-center hover:shadow-2xl capitalize sidebar-subcomponents' >
                              <div >{x.icon}</div>
                              <div > {x.name}</div>
                            </div>
                            </NavLink>
                          ))}
                        </div> 
                    </div>
                 )   
                })
            }

        </div>
    </div>
  )
}

export default Sidebar