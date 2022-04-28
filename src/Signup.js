import React,{useState} from "react";


const Signup = () => {
    const [login,setLogin] = useState({
        named:"",
        reg:"",
        gender:"",
        branch:""
    })
   const  Submit =(eve)=>
    {
         eve.preventDefault();
         console.log(login)
         console.log(login.named);
         console.log(login.reg);
         console.log(login.gender);
         console.log(login.branch);
    }
   const  inputhandle =(e)=>
   {    
        
        console.log(e.target.value)
        const names=e.target.name;
        const value=e.target.value
     setLogin({...login,[names]:value,});
     //  setLogin(e.target.value)
   }
 
     return (
         <div>
        
          <form action="" onSubmit={Submit}>
              <h1></h1>
              <div>
                  <input type="text"
                   name="named" 
                  onChange={inputhandle}
                  value={login.named}
                  
                  id="" />
                <input type="text"
                   name="reg" 
                  onChange={inputhandle}
                  value={login.reg}
                  
                  id="" />
                 <input type="radio"
                   name="gender" 
                  onChange={inputhandle}
                  value={login.gender}
                  
                  id="" />Male
                    <input type="radio"
                     name="gender" 
                     onChange={inputhandle}
                     value={login.gender}
                  
                  id="" /> Female
                  
                   <select
                name="branch"
                value={login.branch}
                onChange={inputhandle}
              >
                <option value={"select branch"}>Select branch</option>
                <option value={"CSE"}>CSE</option>
                <option value={"IT"}>IT</option>
                <option value={"CIVIL"}>CIVIL</option>
                <option value={"Mechanical"}>MECHANICAL</option>
                <option value={"EEE"}>EEE</option>
              </select>
                  <button >Submit</button>
 
              </div>
              </form>
   
        </div>
    );
};


export default Signup;