
import React, { useState } from 'react';
import SearchBar from '../components/Search';

// import Sethu from './sethu'
import Table3 from './Table3';

import { Divider } from "antd";

import { Drawer } from 'antd';

function ViewAll() {
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

                    <h1 style={{ marginTop: 10 }}>ANSWERS</h1>

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

                        <Table3 />

                    </div>



                </div>

            </div>

        </div>
    );
}

export default ViewAll;
