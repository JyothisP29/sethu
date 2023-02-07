import { Divider } from "antd";

import { Drawer } from 'antd';
import React, { useState } from 'react';
import '../components/helper.css';
function Table3() {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (<form>
        <Drawer

            width={"30vw"}

            style={{ color: "#342B6C" }}
            placement='right'
            closable={false}
            onClose={onClose}
            open={open}

        ><div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="flex">
                    <h1>
                        Anonyms
                    </h1>
                    <div style={{ width: 10 }}></div>
                    <div style={{ height: 25, backgroundColor: "green", borderRadius: 10, marginTop: 7 }}>
                        <div style={{ color: "white", textAlign: "center", marginTop: 3, paddingRight: 20, paddingLeft: 20 }}> Contact back</div>
                    </div>
                </div>
                <div onClick={onClose} style={{ fontSize: 50 }}>
                    *
                </div>
            </div>
            <div style={{ width: "100%", backgroundColor: "grey", height: 1 }}></div>
            <div style={{ height: 35 }}></div>
            <h2 style={{ marginLeft: 10, fontSize: 14, color: "black" }}>Name</h2>

            <div>
                <input style={{ width: "100%" }} type="text" name="search" placeholder="Search..">

                </input>
            </div>
            <div style={{ height: 35 }}></div>
            <h2 style={{ marginLeft: 10, fontSize: 14, color: "black" }}>Mobile Number</h2>

            <div>
                <input style={{ width: "100%" }} type="text" name="search" placeholder="Search..">

                </input>
            </div>

            <div style={{ height: 35 }}></div>
            <h2 style={{ marginLeft: 10, fontSize: 14, color: "black" }}>Email ID</h2>

            <div>
                <input style={{ width: "100%" }} type="text" name="search" placeholder="Search..">

                </input>
            </div>
            <div style={{ height: 35 }}></div>
            <div style={{ justifyContent: "space-between" }}>
                <div className="flex" style={{ width: "100%" }}>
                    <div>
                        <h2 style={{ marginLeft: 10, fontSize: 14, color: "black" }}>Date of Birth</h2>

                        <div>
                            <input style={{ width: 225 }} type="text" name="search" placeholder="Search..">

                            </input>
                        </div>
                    </div>
                    <div style={{ width: 50 }}></div>
                    <div>
                        <h2 style={{ marginLeft: 10, fontSize: 14, color: "black" }}>Age</h2>

                        <div>
                            <input style={{ width: 225 }} type="text" name="search" placeholder="Search..">

                            </input>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: 35 }}></div>
            <h2 style={{ marginLeft: 10, fontSize: 14, color: "black" }}>Address</h2>

            <div >
                <textarea style={{ width: "100%" }} rows="6" cols="50"></textarea>
            </div>



            <div style={{ height: 50 }}></div>
            <p style={{ color: "#5541D7" }}><h2>Feedback:</h2></p>
            <div style={{ height: 30 }}></div>
            <div style={{ width: "100%", backgroundColor: "wheat", borderRadius: 10, paddingLeft: 25, paddingTop: 20, paddingRight: 25, paddingBottom: 20 }}>

                <div className="flex">
                    <div style={{ fontWeight: "bold", fontSize: 20 }}>Q1 : </div><div style={{ fontSize: 20, marginLeft: 5 }}>How often do you buy shoes?</div>
                </div>
                <div style={{ height: 5 }}></div>
                <div className="flex">
                    <div style={{ fontWeight: "bold", fontSize: 16 }}>Ans : </div><div style={{ fontSize: 16, marginLeft: 5 }}> Every 6 Month</div>
                </div>
            </div>
            <div style={{ height: 30 }}></div>
            <div style={{ width: "100%", backgroundColor: "wheat", borderRadius: 10, paddingLeft: 25, paddingTop: 20, paddingRight: 25, paddingBottom: 20 }}>
                <div className="flex">
                    <div style={{ fontWeight: "bold", fontSize: 20 }}>Q2:</div><div>
                        <div style={{ fontSize: 20, marginLeft: 5 }}>On a scale from 1 to 5, how would you rate the comfort of the shoes you use?</div>
                        <div style={{ fontSize: 30 }}>****4.0</div>
                    </div>
                </div>

            </div>
            <div style={{ height: 30 }}></div>
            <div style={{ width: "100%", backgroundColor: "grey", height: 1 }}></div>
            <div style={{ height: 30 }}></div>
            <div className='flex' style={{ justifyContent: "flex-end" }}>

                <div className='save' style={{ paddingTop: 5 }}>
                    <h2 style={{ fontWeight: "normal" }}>
                        Cancel
                    </h2>
                </div>
            </div>

        </Drawer>
        <table style={{ width: "94%", marginLeft: "25", marginRight: "25" }} >
            <thead style={{ backgroundColor: "#C6C6FF", height: "65px", }} >
                <tr >
                    <th></th>
                    <th style={{ fontSize: 18, color: "#363857", textAlign: "left", paddingLeft: 30 }}>
                        Date
                    </th>
                    <th style={{ fontSize: 18, color: "#363857", textAlign: "left", paddingLeft: 30 }}>
                        Users
                    </th>
                    <th style={{ fontSize: 18, color: "#363857", textAlign: "left", paddingLeft: 30 }}>
                        Mobile
                    </th>
                    <th style={{ fontSize: 18, color: "#363857", textAlign: "left", paddingLeft: 30 }}>
                        Contact Back
                    </th>
                    <th style={{ fontSize: 18, color: "#363857", textAlign: "left", paddingLeft: 30 }}>
                        Overall Rating
                    </th>
                    <th style={{ fontSize: 18, color: "#363857", textAlign: "left", paddingLeft: 30 }}>
                        View
                    </th>
                    <th >

                    </th>

                </tr>
            </thead>

            <Divider></Divider>
            <tr onClick={showDrawer}>
                <th >

                </th>
                <td style={{ paddingLeft: 15 }} >
                    <h2 style={{ fontWeight: "normal" }}>24.12.2022</h2>

                    <h2 style={{ fontWeight: "lighter", color: "GrayText", font: "small-caption" }}>11:16 AM</h2>

                </td>

                <td style={{ paddingLeft: 15 }}>
                    <h2>Anonyms</h2>

                </td>
                <td style={{ paddingLeft: 15 }}>
                    <h2>  (316)555-0116</h2>

                </td>
                <td >
                    <h1 style={{ color: "green", paddingLeft: 15 }}>Phone Call</h1>
                </td>
                <td >
                    <div style={{ fontSize: 25, paddingLeft: 15 }}>* * * *4.2  </div>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <div>{">"}</div>
                </td>
            </tr>
            <Divider style={{ height: 1, color: "black", width: 100 }}></Divider>
            <tr>
                <th >

                </th>
                <td style={{ paddingLeft: 15 }} >
                    <h2 style={{ fontWeight: "normal" }}>24.12.2022</h2>

                    <h2 style={{ fontWeight: "lighter", color: "GrayText", font: "small-caption" }}>11:16 AM</h2>

                </td>

                <td style={{ paddingLeft: 15 }}>
                    <h2>Anonyms</h2>

                </td>
                <td style={{ paddingLeft: 15 }}>
                    <h2>  (316)555-0116</h2>

                </td>
                <td >
                    <h1 style={{ color: "green", paddingLeft: 15 }}>Phone Call</h1>
                </td>
                <td >
                    <div style={{ fontSize: 25, paddingLeft: 15 }}>* * * *4.2  </div>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <div>{">"}</div>
                </td>
            </tr>
            <Divider style={{ height: 1, color: "black", width: 100 }}></Divider>
            <tr>
                <th >

                </th>
                <td style={{ paddingLeft: 15 }} >
                    <h2 style={{ fontWeight: "normal" }}>24.12.2022</h2>

                    <h2 style={{ fontWeight: "lighter", color: "GrayText", font: "small-caption" }}>11:16 AM</h2>

                </td>

                <td style={{ paddingLeft: 15 }}>
                    <h2>Anonyms</h2>

                </td>
                <td style={{ paddingLeft: 15 }}>
                    <h2>  (316)555-0116</h2>

                </td>
                <td >
                    <h1 style={{ color: "green", paddingLeft: 15 }}>Phone Call</h1>
                </td>
                <td >
                    <div style={{ fontSize: 25, paddingLeft: 15 }}>* * * *4.2  </div>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <div>{">"}</div>
                </td>
            </tr>   <Divider style={{ height: 1, color: "black", width: 100 }}></Divider>
            <tr>
                <th >

                </th>
                <td style={{ paddingLeft: 15 }} >
                    <h2 style={{ fontWeight: "normal" }}>24.12.2022</h2>

                    <h2 style={{ fontWeight: "lighter", color: "GrayText", font: "small-caption" }}>11:16 AM</h2>

                </td>

                <td style={{ paddingLeft: 15 }}>
                    <h2>Anonyms</h2>

                </td>
                <td style={{ paddingLeft: 15 }}>
                    <h2>  (316)555-0116</h2>

                </td>
                <td >
                    <h1 style={{ color: "green", paddingLeft: 15 }}>Phone Call</h1>
                </td>
                <td >
                    <div style={{ fontSize: 25, paddingLeft: 15 }}>* * * *4.2  </div>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <div>{">"}</div>
                </td>
            </tr>   <Divider style={{ height: 1, color: "black", width: 100 }}></Divider>
            <tr>
                <th >

                </th>
                <td style={{ paddingLeft: 15 }} >
                    <h2 style={{ fontWeight: "normal" }}>24.12.2022</h2>

                    <h2 style={{ fontWeight: "lighter", color: "GrayText", font: "small-caption" }}>11:16 AM</h2>

                </td>

                <td style={{ paddingLeft: 15 }}>
                    <h2>Anonyms</h2>

                </td>
                <td style={{ paddingLeft: 15 }}>
                    <h2>  (316)555-0116</h2>

                </td>
                <td >
                    <h1 style={{ color: "green", paddingLeft: 15 }}>Phone Call</h1>
                </td>
                <td >
                    <div style={{ fontSize: 25, paddingLeft: 15 }}>* * * *4.2  </div>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <div>{">"}</div>
                </td>
            </tr>
            <Divider style={{ height: 1, color: "black", width: 100 }}></Divider>       <tr>
                <th >

                </th>
                <td style={{ paddingLeft: 15 }} >
                    <h2 style={{ fontWeight: "normal" }}>24.12.2022</h2>

                    <h2 style={{ fontWeight: "lighter", color: "GrayText", font: "small-caption" }}>11:16 AM</h2>

                </td>

                <td style={{ paddingLeft: 15 }}>
                    <h2>Anonyms</h2>

                </td>
                <td style={{ paddingLeft: 15 }}>
                    <h2>  (316)555-0116</h2>

                </td>
                <td >
                    <h1 style={{ color: "green", paddingLeft: 15 }}>Phone Call</h1>
                </td>
                <td >
                    <div style={{ fontSize: 25, paddingLeft: 15 }}>* * * *4.2  </div>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <div>{">"}</div>
                </td>
            </tr>
            <Divider style={{ height: 1, color: "black", width: 100 }}></Divider>       <tr>
                <th >

                </th>
                <td style={{ paddingLeft: 15 }} >
                    <h2 style={{ fontWeight: "normal" }}>24.12.2022</h2>

                    <h2 style={{ fontWeight: "lighter", color: "GrayText", font: "small-caption" }}>11:16 AM</h2>

                </td>

                <td style={{ paddingLeft: 15 }}>
                    <h2>Anonyms</h2>

                </td>
                <td style={{ paddingLeft: 15 }}>
                    <h2>  (316)555-0116</h2>

                </td>
                <td >
                    <h1 style={{ color: "green", paddingLeft: 15 }}>Phone Call</h1>
                </td>
                <td >
                    <div style={{ fontSize: 25, paddingLeft: 15 }}>* * * *4.2  </div>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <div>{">"}</div>
                </td>
            </tr>

            <Divider style={{ height: 1, color: "black", width: 100 }}></Divider>
        </table>
    </form >);
}


export default Table3;