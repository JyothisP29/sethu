import { Divider } from "antd";
import { Link } from "react-router-dom";
import { Drawer } from 'antd';
import React, { useState } from 'react';
import '../components/helper.css';
function Table2() {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (<form>
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
        <table style={{ width: "94%", marginLeft: "25", marginRight: "25" }} >
            <thead style={{ backgroundColor: "#C6C6FF", height: "65px", }} >
                <tr >
                    <th style={{ fontSize: 18, color: "#363857", textAlign: "left", paddingLeft: 30 }}>
                        ID
                    </th>
                    <th style={{ fontSize: 18, color: "#363857", textAlign: "left", paddingLeft: 30 }}>
                        Survey Name
                    </th>
                    <th style={{ fontSize: 18, color: "#363857", textAlign: "left", paddingLeft: 30 }}>
                        Description
                    </th>
                    <th style={{ fontSize: 18, color: "#363857", textAlign: "left", paddingLeft: 30 }}>
                        Rating
                    </th>
                    <th style={{ fontSize: 18, color: "#363857", textAlign: "left", paddingLeft: 30 }}>
                        Users
                    </th>
                    <th style={{ fontSize: 18, color: "#363857", textAlign: "left", paddingLeft: 30 }}>
                        Download
                    </th>
                    <th >

                    </th>

                </tr>
            </thead>

            <Divider></Divider>
            <tr>
                <td style={{ paddingLeft: 15 }}>
                    <h2>  BAA432</h2>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <tr className="flex">
                        <div className="logobox2"></div><div><Link to="/team" style={{ textDecoration: 'none' }}><nav><h2 style={{ paddingTop: 10, paddingLeft: 15, color: "#261D62" }}>Nike Air Max Plus SE</h2></nav></Link></div>

                    </tr>

                </td>
                <td style={{ paddingLeft: 15 }}>
                    <h2>Size,Comfort,type</h2>

                </td>
                <td style={{ paddingLeft: 15 }}>
                    <div style={{ fontSize: 25 }}>* * * *4.2  </div>

                </td>
                <td style={{ paddingLeft: 15, display: "flex" }}>
                    <div style={{ paddingTop: 3, paddingRight: 10, paddingLeft: 10, paddingBottom: 3, backgroundColor: "#F1E7B0", display: "flex", borderRadius: 10, }}>
                        <div style={{ color: "#A7A07A", marginTop: 2, fontSize: 12 }}>Annonymous</div><div style={{ marginLeft: 5, color: "#9C5F04", fontSize: 15 }}>1845</div>
                    </div>
                    <div style={{ paddingTop: 3, paddingRight: 10, paddingLeft: 10, paddingBottom: 3, backgroundColor: "#7FE79C", display: "flex", marginLeft: 10, borderRadius: 10 }}>
                        <div style={{ fontSize: 12, color: "#437B53", marginTop: 2 }}>Named</div><div style={{ color: "#0B5C1D", fontSize: 15, marginLeft: 5, }}>1845</div>
                    </div>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <div onClick={showDrawer} className="hov"></div>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <h2>  l</h2>
                </td>
            </tr>
            <Divider style={{ height: 1, color: "black", width: 100 }}></Divider>
            <tr>
                <td style={{ paddingLeft: 15 }}>
                    <h2>  BAA432</h2>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <tr className="flex">
                        <div className="logobox2"></div><h2 style={{ paddingTop: 10, paddingLeft: 15, color: "#261D62" }}>Nike Air Max Plus SE</h2>

                    </tr>

                </td>
                <td style={{ paddingLeft: 15 }}>
                    <h2>Size,Comfort,type</h2>

                </td>
                <td style={{ paddingLeft: 15 }}>
                    <div style={{ fontSize: 25 }}>* * * *4.2  </div>

                </td>
                <td style={{ paddingLeft: 15, display: "flex" }}>
                    <div style={{ paddingTop: 3, paddingRight: 10, paddingLeft: 10, paddingBottom: 3, backgroundColor: "#F1E7B0", display: "flex", borderRadius: 10, }}>
                        <div style={{ color: "#A7A07A", marginTop: 2, fontSize: 12 }}>Annonymous</div><div style={{ marginLeft: 5, color: "#9C5F04", fontSize: 15 }}>1845</div>
                    </div>
                    <div style={{ paddingTop: 3, paddingRight: 10, paddingLeft: 10, paddingBottom: 3, backgroundColor: "#7FE79C", display: "flex", marginLeft: 10, borderRadius: 10 }}>
                        <div style={{ fontSize: 12, color: "#437B53", marginTop: 2 }}>Named</div><div style={{ color: "#0B5C1D", fontSize: 15, marginLeft: 5, }}>1845</div>
                    </div>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <div className="hov"></div>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <h2>  l</h2>
                </td>
            </tr>
            <Divider style={{ height: 1, color: "black", width: 100 }}></Divider>
            <tr>
                <td style={{ paddingLeft: 15 }}>
                    <h2>  BAA432</h2>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <tr className="flex">
                        <div className="logobox2"></div><h2 style={{ paddingTop: 10, paddingLeft: 15, color: "#261D62" }}>Nike Air Max Plus SE</h2>

                    </tr>

                </td>
                <td style={{ paddingLeft: 15 }}>
                    <h2>Size,Comfort,type</h2>

                </td>
                <td style={{ paddingLeft: 15 }}>
                    <div style={{ fontSize: 25 }}>* * * *4.2  </div>

                </td>
                <td style={{ paddingLeft: 15, display: "flex" }}>
                    <div style={{ paddingTop: 3, paddingRight: 10, paddingLeft: 10, paddingBottom: 3, backgroundColor: "#F1E7B0", display: "flex", borderRadius: 10, }}>
                        <div style={{ color: "#A7A07A", marginTop: 2, fontSize: 12 }}>Annonymous</div><div style={{ marginLeft: 5, color: "#9C5F04", fontSize: 15 }}>1845</div>
                    </div>
                    <div style={{ paddingTop: 3, paddingRight: 10, paddingLeft: 10, paddingBottom: 3, backgroundColor: "#7FE79C", display: "flex", marginLeft: 10, borderRadius: 10 }}>
                        <div style={{ fontSize: 12, color: "#437B53", marginTop: 2 }}>Named</div><div style={{ color: "#0B5C1D", fontSize: 15, marginLeft: 5, }}>1845</div>
                    </div>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <div className="hov"></div>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <h2>  l</h2>
                </td>
            </tr>    <Divider style={{ height: 1, color: "black", width: 100 }}></Divider>
            <tr>
                <td style={{ paddingLeft: 15 }}>
                    <h2>  BAA432</h2>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <tr className="flex">
                        <div className="logobox2"></div><h2 style={{ paddingTop: 10, paddingLeft: 15, color: "#261D62" }}>Nike Air Max Plus SE</h2>

                    </tr>

                </td>
                <td style={{ paddingLeft: 15 }}>
                    <h2>Size,Comfort,type</h2>

                </td>
                <td style={{ paddingLeft: 15 }}>
                    <div style={{ fontSize: 25 }}>* * * *4.2  </div>

                </td>
                <td style={{ paddingLeft: 15, display: "flex" }}>
                    <div style={{ paddingTop: 3, paddingRight: 10, paddingLeft: 10, paddingBottom: 3, backgroundColor: "#F1E7B0", display: "flex", borderRadius: 10, }}>
                        <div style={{ color: "#A7A07A", marginTop: 2, fontSize: 12 }}>Annonymous</div><div style={{ marginLeft: 5, color: "#9C5F04", fontSize: 15 }}>1845</div>
                    </div>
                    <div style={{ paddingTop: 3, paddingRight: 10, paddingLeft: 10, paddingBottom: 3, backgroundColor: "#7FE79C", display: "flex", marginLeft: 10, borderRadius: 10 }}>
                        <div style={{ fontSize: 12, color: "#437B53", marginTop: 2 }}>Named</div><div style={{ color: "#0B5C1D", fontSize: 15, marginLeft: 5, }}>1845</div>
                    </div>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <div className="hov"></div>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <h2>  l</h2>
                </td>
            </tr>    <Divider style={{ height: 1, color: "black", width: 100 }}></Divider>
            <tr>
                <td style={{ paddingLeft: 15 }}>
                    <h2>  BAA432</h2>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <tr className="flex">
                        <div className="logobox2"></div><h2 style={{ paddingTop: 10, paddingLeft: 15, color: "#261D62" }}>Nike Air Max Plus SE</h2>

                    </tr>

                </td>
                <td style={{ paddingLeft: 15 }}>
                    <h2>Size,Comfort,type</h2>

                </td>
                <td style={{ paddingLeft: 15 }}>
                    <div style={{ fontSize: 25 }}>* * * *4.2  </div>

                </td>
                <td style={{ paddingLeft: 15, display: "flex" }}>
                    <div style={{ paddingTop: 3, paddingRight: 10, paddingLeft: 10, paddingBottom: 3, backgroundColor: "#F1E7B0", display: "flex", borderRadius: 10, }}>
                        <div style={{ color: "#A7A07A", marginTop: 2, fontSize: 12 }}>Annonymous</div><div style={{ marginLeft: 5, color: "#9C5F04", fontSize: 15 }}>1845</div>
                    </div>
                    <div style={{ paddingTop: 3, paddingRight: 10, paddingLeft: 10, paddingBottom: 3, backgroundColor: "#7FE79C", display: "flex", marginLeft: 10, borderRadius: 10 }}>
                        <div style={{ fontSize: 12, color: "#437B53", marginTop: 2 }}>Named</div><div style={{ color: "#0B5C1D", fontSize: 15, marginLeft: 5, }}>1845</div>
                    </div>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <div className="hov"></div>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <h2>  l</h2>
                </td>
            </tr>
            <Divider style={{ height: 1, color: "black", width: 100 }}></Divider>   <tr>
                <td style={{ paddingLeft: 15 }}>
                    <h2>  BAA432</h2>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <tr className="flex">
                        <div className="logobox2"></div><h2 style={{ paddingTop: 10, paddingLeft: 15, color: "#261D62" }}>Nike Air Max Plus SE</h2>

                    </tr>

                </td>
                <td style={{ paddingLeft: 15 }}>
                    <h2>Size,Comfort,type</h2>

                </td>
                <td style={{ paddingLeft: 15 }}>
                    <div style={{ fontSize: 25 }}>* * * *4.2  </div>

                </td>
                <td style={{ paddingLeft: 15, display: "flex" }}>
                    <div style={{ paddingTop: 3, paddingRight: 10, paddingLeft: 10, paddingBottom: 3, backgroundColor: "#F1E7B0", display: "flex", borderRadius: 10, }}>
                        <div style={{ color: "#A7A07A", marginTop: 2, fontSize: 12 }}>Annonymous</div><div style={{ marginLeft: 5, color: "#9C5F04", fontSize: 15 }}>1845</div>
                    </div>
                    <div style={{ paddingTop: 3, paddingRight: 10, paddingLeft: 10, paddingBottom: 3, backgroundColor: "#7FE79C", display: "flex", marginLeft: 10, borderRadius: 10 }}>
                        <div style={{ fontSize: 12, color: "#437B53", marginTop: 2 }}>Named</div><div style={{ color: "#0B5C1D", fontSize: 15, marginLeft: 5, }}>1845</div>
                    </div>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <div className="hov"></div>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <h2>  l</h2>
                </td>
            </tr>
            <Divider style={{ height: 1, color: "black", width: 100 }}></Divider>   <tr>
                <td style={{ paddingLeft: 15 }}>
                    <h2>  BAA432</h2>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <tr className="flex">
                        <div className="logobox2"></div><h2 style={{ paddingTop: 10, paddingLeft: 15, color: "#261D62" }}>Nike Air Max Plus SE</h2>

                    </tr>

                </td>
                <td style={{ paddingLeft: 15 }}>
                    <h2>Size,Comfort,type</h2>

                </td>
                <td style={{ paddingLeft: 15 }}>
                    <div style={{ fontSize: 25 }}>* * * *4.2  </div>

                </td>
                <td style={{ paddingLeft: 15, display: "flex" }}>
                    <div style={{ paddingTop: 3, paddingRight: 10, paddingLeft: 10, paddingBottom: 3, backgroundColor: "#F1E7B0", display: "flex", borderRadius: 10, }}>
                        <div style={{ color: "#A7A07A", marginTop: 2, fontSize: 12 }}>Annonymous</div><div style={{ marginLeft: 5, color: "#9C5F04", fontSize: 15 }}>1845</div>
                    </div>
                    <div style={{ paddingTop: 3, paddingRight: 10, paddingLeft: 10, paddingBottom: 3, backgroundColor: "#7FE79C", display: "flex", marginLeft: 10, borderRadius: 10 }}>
                        <div style={{ fontSize: 12, color: "#437B53", marginTop: 2 }}>Named</div><div style={{ color: "#0B5C1D", fontSize: 15, marginLeft: 5, }}>1845</div>
                    </div>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <div className="hov"></div>
                </td>
                <td style={{ paddingLeft: 15 }}>
                    <h2>  l</h2>
                </td>
            </tr>

            <Divider style={{ height: 1, color: "black", width: 100 }}></Divider>
        </table>
    </form >);
}


export default Table2;