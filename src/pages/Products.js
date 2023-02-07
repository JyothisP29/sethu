
import { Divider } from 'antd';
import React from 'react';

import { Link } from "react-router-dom";
import ToggleSwitch from "../components/ToggleSwitch";


function Products() {

  return (
    <div className='products'>
      <div className='white-bg'>
        <div className='dashboard-container1'>
          <h1 style={{ marginTop: 10 }} >ADD SURVEY</h1>

        </div>



      </div>

      <div className='main-box'>
        <div className='sec-box'>
          <div className='tablebox' style={{ paddingLeft: 50, paddingRight: 50, paddingTop: 30 }}>

            <div className='first-box'>
              <h2 style={{ marginLeft: 10 }}>ID</h2>
              <div style={{ height: 10 }}></div>
              <div>
                <input style={{ width: "100%" }} type="text" name="search" placeholder="Search..">

                </input>
              </div>
              <div style={{ height: 30 }}></div>
              <div className='shoe'>
                <div className='shoedp  '>
                </div>
                <div style={{ width: 20 }}></div>
                <div>
                  <div style={{ marginTop: 15 }}>
                    <h2>  Nike.png</h2></div>
                  <div style={{ height: 5 }}></div>
                  <div className='addsurvey' style={{ backgroundColor: "#5541D7", paddingTop: 9, width: 130 }}>

                    <div style={{ textAlign: "center", fontSize: 16 }}>Browse</div>
                  </div>
                </div>

              </div>
              <div style={{ height: 30 }}></div>
              <h2 style={{ marginLeft: 10 }}>Survey Name</h2>
              <div style={{ height: 10 }}></div>
              <div>
                <input style={{ width: "100%" }} type="text" name="search" placeholder="Search..">

                </input>
              </div>
              <div style={{ height: 30 }}></div>
              <h2 style={{ marginLeft: 10 }}> Description</h2>
              <div style={{ height: 10 }}></div>
              <div >
                <textarea style={{ width: "100%" }} rows="4" cols="50"></textarea>
              </div>
            </div>
            <div style={{ height: 100 }}>
            </div>
            <div className='questions' style={{ backgroundColor: "" }}>

              <div className='ques1'>
                <div style={{ marginTop: 5, fontSize: 28 }}>
                  Question 1
                </div>

                <div className='flex'>
                  <div style={{ marginTop: 15, fontSize: 18 }}>
                    Required
                  </div>
                  <div style={{ width: 10 }}>

                  </div>
                  <React.Fragment>
                    <ToggleSwitch label="R" />

                  </React.Fragment>
                  <div style={{ width: 40 }}></div>
                  <div >


                    <select style={{ width: 200, height: 50, borderRadius: 10, borderColor: 'grey', borderWidth: 2, fontSize: 18, fontWeight: "bold" }} name="cars" id="cars">
                      <option value="volvo">Multiple Choice</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </div>
              </div>
              <div style={{ height: 30 }} ></div>
              <div style={{ display: 'flex' }}>
                <input style={{ width: "100%" }} type="text" name="search" placeholder="Search..">

                </input>
                <div style={{ width: 30 }} ></div>
                <div className='img  '>
                </div>

              </div>
              <div style={{ height: 30 }} >
              </div>
              <div style={{ display: 'flex' }}>
                <input style={{ width: "100%" }} type="text" name="search" placeholder="Search..">

                </input>
                <div style={{ width: 30 }} ></div>
                <div className='img  '>
                </div>

              </div>
              <div style={{ height: 30 }} ></div>
              <input style={{ width: "95%" }} type="text" name="search" placeholder="Search..">

              </input>
              <div style={{ height: 20 }}></div>
              <div className='flex' style={{ justifyContent: 'flex-end' }}>
                <div className='box1' style={{ width: 30, height: 30 }}>


                </div>
                <div style={{ width: 10 }}>
                </div>
                <div className='box' style={{ width: 30, height: 30 }}></div>
              </div>
            </div>
            <div style={{ height: 50 }}>
            </div>

            <div>
              <h2>Add Question</h2>

            </div>
            <div style={{ height: 50 }}>
            </div>
            <div className='enable'>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>
                  Enable data collection form
                </h1>
                <React.Fragment>
                  <ToggleSwitch label="k" />

                </React.Fragment>
              </div>
              <Divider></Divider>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>
                  Enable data collection form
                </h1>
                <React.Fragment>
                  <ToggleSwitch label="l" />

                </React.Fragment>
              </div>

            </div>

            <div style={{ height: 50 }}></div>


            <div className='flex' style={{ justifyContent: "flex-end" }}>
              <div className='cancel' style={{ justifyContent: "center" }}>
                <h2>
                  Cancel
                </h2>
              </div>
              <div style={{ width: 30 }} ></div>
              <div className='save' >
                <Link to="/reports" >
                  <nav>   <h2 style={{ color: 'white' }}>
                    Save
                  </h2></nav></Link>
              </div>
            </div>
            <div style={{ height: 50 }}></div>
          </div>



        </div>

      </div>

    </div >

  );
}

export default Products;
