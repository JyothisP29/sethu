
import React, { useState } from 'react';
import SearchBar from '../components/Search';

// import Sethu from './sethu'
import Table2 from './Table2';



function Reports() {
  const [show, setIsShow] = useState(false);
  const ClickHandler = () => {
    setIsShow(true);
  }
  const backHandler = () => {
    setIsShow(false);
  }
  return (

    <div className='reports'>

      <div className='white-bg'>
        <div className='dashboard-container1'>

          <h1 style={{ marginTop: 10 }}>SURVEY</h1>
          <div className='addsurvey'>

            <div style={{ textAlign: "center", marginTop: 12, fontSize: 12 }} onClick={ClickHandler}>ADD SURVEY</div>
          </div>
        </div>


      </div>

      <div className='main-box'>

        <div className='sec-box'>

          <div className='tablebox'>

            <div className='menu'>
              <SearchBar />


              <div className='blah'>
                <div className='box'>

                </div>

                <div className='box1'>

                </div>



              </div>

            </div>

            <Table2 />

          </div>



        </div>

      </div>

    </div>
  );
}

export default Reports;
