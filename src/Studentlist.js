import React from "react";
import {Link,Outlet} from 'react-router-dom';
const Studentlist = () => {
    const Students=[
        {
            name:"Lalitha",
            reg:"20b01a1260",
            branch:'IT'
        },
        {
            name:"Smriti",
            reg:"20B01A1261",
            branch:'IT'
        },
        {
            name:"Mithali",
            reg:"20B01A1262",
            branch:'IT'
        },
        {
            name:"jemi",
            reg:"20B01A1263",
            branch:'IT'
        },
        {
            name:"deepthi",
            reg:"20B01A1264",
            branch:'IT'
        },
        {
            name:"harman",
            reg:"20B01A1265",
            branch:'IT'
        },
        {
            name:"sneha",
            reg:"20B01A1266",
            branch:'IT'
        },
    ]
    return (
        <div >
            {
               Students.map((invoice)=>
                <h3><li key={invoice.reg}><Link to={`/stdlist/${invoice.name}/${invoice.reg}/${invoice.branch}`}>{invoice.name}</Link></li></h3>
               )
            }
            <Outlet />
        </div>
    );
};

export default Studentlist;