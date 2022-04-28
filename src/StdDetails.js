import React from "react";
import { useParams } from "react-router-dom";
const StdDetails = () => {
    const param=useParams();
    const regno=param.regno;
    const name=param.name;
    const branch=param.branch;
    return (
        <div >
            <table border='1' >
                  <tr>
                      <td>Name</td>
                      <td>regidter number</td>
                      <td>Branch</td>
                  </tr>
                    <tr>
                        <td>{name}</td>
                        <td>{regno}</td>
                        <td>{branch}</td>
                    </tr> 
            </table>

        </div>
    );
};


export default StdDetails;