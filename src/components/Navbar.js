import React from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

import { IconContext } from 'react-icons';

function Navbar() {




  return (
    <>
      <IconContext.Provider value={{ color: '#6856E0', size: 35 }}>
        <div className='navbar'>
          <div className='flex'>
            <div className='logobox'>

            </div>
            <div className='menu-bars' style={{ marginTop: 9, fontSize: 22, fontWeight: 'bold' }}>

              Name Here

            </div>
          </div>
          <div className='flex'>
            <div className='logobox1'>
            </div>
            <div className='profilepic'>


            </div>
            <div className='adminname' style={{ marginRight: 60, marginLeft: 10, marginTop: 5 }}>

              <h3>
                Sumanto
              </h3><h4>Admin</h4>


            </div>


          </div>




        </div>

        <nav className='nav-menu active' >

          <ul className='nav-menu-items' >



            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} >
                    {item.icon}

                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
