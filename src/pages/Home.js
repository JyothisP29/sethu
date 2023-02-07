// import React from 'react';
import SearchBar from '../components/Search';

import React, { useState } from 'react';
import Sethu from './sethu'


import { Drawer } from 'antd';

// import Drawerapp from '../components/drawer';

function Home() {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (

    <div className='home'>
      <Drawer

        width={"25vw"}

        style={{ color: "#342B6C" }}
        placement='right'
        closable={false}
        onClose={onClose}
        open={open}

      ><div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>
            Nike Air Max Plus SE
          </h1>
          <div onClick={onClose} style={{ fontSize: 50 }}>
            *
          </div>
        </div>
        <div style={{ height: 5 }}></div>
        <div style={{ height: "40vh", backgroundColor: "gray" }}>

        </div>
        <div style={{ height: 100 }}></div>
        <p style={{ color: "#5541D7" }}><h2>Survey Details:</h2></p>
        <div style={{ height: 50 }}></div>
        <div style={{ display: "flex" }}>
          <div style={{ width: 120, height: 120, backgroundColor: "grey", borderRadius: 10 }}></div>
          <div style={{ marginTop: 20, marginLeft: 10 }}>
            <h1>
              Nike Air Max Plus SE
            </h1>
            <h2>
              ID:AAA1</h2>
            <h3>
              Size,Comfront,type
            </h3>
          </div>
        </div>
      </Drawer>
      <div className='white-bg'>
        <div className='dashboard-container'>
          <h1 style={{ marginTop: 10 }} >DASHBOARD</h1>
        </div>

      </div>

      <div className='main-box'>
        <div className='sec-box'>
          <div className='graphcon'>
            <div className='rating-summery'>
              <div className='headers'>
                Rating Summery

              </div>




              <div>


                <select style={{ height: 30, borderRadius: 10, borderColor: '#E8E8E8', borderWidth: 2, fontSize: 14, marginRight: 10 }} name="cars" id="cars">
                  <option value="volvo">Filter</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>

                <select style={{ height: 30, borderRadius: 10, borderColor: '#E8E8E8', borderWidth: 2, fontSize: 14, }} name="cars" id="cars">
                  <option value="volvo">Monthly</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>



            </div>
          </div>

          <div className='graphcon1'>
            <div className='headers'>
              Last Received
            </div>
            <div style={{ height: 50 }}>
            </div>
            <Sethu />
          </div>

        </div>
        <div className='item-list'>
          <div>
            Overall rating
          </div>
          <div style={{ height: 40 }}>
          </div>

          <div  >

            <SearchBar />
          </div>

          <div style={{ height: 10 }}>
          </div>
          <div
            className='list-con'
          >
            <div className='item'>
              <div style={{ display: "flex", paddingLeft: 20, paddingTop: 15 }}>
                <div className='logobox3'></div>
                <div style={{ paddingLeft: 10, paddingTop: 5 }}>
                  Nike Design Max</div>
              </div>
              <div style={{ paddingLeft: 20, paddingTop: 5 }}>
                <h1>* * * * * </h1></div>
            </div>
            <div className='right'>
              <h1 style={{ paddingRight: 20, paddingTop: 25, color: "#3D3C68" }}> 4.2</h1></div>
          </div>
          <div
            className='list-con'
          >
            <div className='item'>
              <div style={{ display: "flex", paddingLeft: 20, paddingTop: 15 }}>
                <div className='logobox3'></div>
                <div style={{ paddingLeft: 10, paddingTop: 5 }}>
                  Nike Design Max</div>
              </div>
              <div style={{ paddingLeft: 20, paddingTop: 5 }}>
                <h1>* * * * * </h1></div>
            </div>
            <div className='right'>
              <h1 style={{ paddingRight: 20, paddingTop: 25, color: "#3D3C68" }}> 4.2</h1></div>
          </div>

          <div
            className='list-con'
          >
            <div className='item'>
              <div style={{ display: "flex", paddingLeft: 20, paddingTop: 15 }}>
                <div className='logobox3'></div>
                <div style={{ paddingLeft: 10, paddingTop: 5 }}>
                  Nike Design Max</div>
              </div>
              <div style={{ paddingLeft: 20, paddingTop: 5 }}>
                <h1>* * * * * </h1></div>
            </div>
            <div className='right'>
              <h1 style={{ paddingRight: 20, paddingTop: 25, color: "#3D3C68" }}> 4.2</h1></div>
          </div>
          <div
            className='list-con'
          >
            <div className='item'>
              <div style={{ display: "flex", paddingLeft: 20, paddingTop: 15 }}>
                <div className='logobox3'></div>
                <div style={{ paddingLeft: 10, paddingTop: 5 }}>
                  Nike Design Max</div>
              </div>
              <div style={{ paddingLeft: 20, paddingTop: 5 }}>
                <h1>* * * * * </h1></div>
            </div>
            <div className='right'>
              <h1 style={{ paddingRight: 20, paddingTop: 25, color: "#3D3C68" }}> 4.2</h1></div>
          </div>
          <div
            className='list-con'
          >
            <div className='item'>
              <div style={{ display: "flex", paddingLeft: 20, paddingTop: 15 }}>
                <div className='logobox3'></div>
                <div style={{ paddingLeft: 10, paddingTop: 5 }}>
                  Nike Design Max</div>
              </div>
              <div style={{ paddingLeft: 20, paddingTop: 5 }}>
                <h1>* * * * * </h1></div>
            </div>
            <div className='right'>
              <h1 style={{ paddingRight: 20, paddingTop: 25, color: "#3D3C68" }}> 4.2</h1></div>
          </div>       <div
            className='list-con'
          >
            <div className='item'>
              <div style={{ display: "flex", paddingLeft: 20, paddingTop: 15 }}>
                <div className='logobox3'></div>
                <div style={{ paddingLeft: 10, paddingTop: 5 }}>
                  Nike Design Max</div>
              </div>
              <div style={{ paddingLeft: 20, paddingTop: 5 }}>
                <h1>* * * * * </h1></div>
            </div>
            <div className='right'>
              <h1 style={{ paddingRight: 20, paddingTop: 25, color: "#3D3C68" }}> 4.2</h1></div>
          </div>         <div
            className='list-con'
          >
            <div className='item'>
              <div style={{ display: "flex", paddingLeft: 20, paddingTop: 15 }}>
                <div className='logobox3'></div>
                <div style={{ paddingLeft: 10, paddingTop: 5 }}>
                  Nike Design Max</div>
              </div>
              <div style={{ paddingLeft: 20, paddingTop: 5 }}>
                <h1>* * * * * </h1></div>
            </div>
            <div className='right'>
              <h1 style={{ paddingRight: 20, paddingTop: 25, color: "#3D3C68" }}> 4.2</h1></div>
          </div>       <div
            className='list-con'
          >
            <div className='item'>
              <div style={{ display: "flex", paddingLeft: 20, paddingTop: 15 }}>
                <div className='logobox3'></div>
                <div style={{ paddingLeft: 10, paddingTop: 5 }}>
                  Nike Design Max</div>
              </div>
              <div style={{ paddingLeft: 20, paddingTop: 5 }}>
                <h1>* * * * * </h1></div>
            </div>
            <div className='right'>
              <h1 style={{ paddingRight: 20, paddingTop: 25, color: "#3D3C68" }}> 4.2</h1></div>
          </div>

        </div>
      </div>
    </div >

  );
}

export default Home;
