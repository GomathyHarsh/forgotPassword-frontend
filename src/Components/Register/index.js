import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () =>{
    
    const [userDetails,setUserDetails]= useState({
        name: '',
        email: '',
        password: '',
        mobileNumber: '',
        role: 1
    })
    const navigate = useNavigate();
    
    const handleForm = value =>{ 
        return setUserDetails(cred =>{
            return {...cred,...value}
        })
    }

    

    const handleRegisteration = async (event) =>{
     try{
      event.preventDefault(); // to prevant data and state,to carry the event- entire function execution
     // console.log('Logging in');
      const response= await axios.post(`${process.env.REACT_APP_BASE_URL}/register`,userDetails,{withCredentials:true});
      if(response){
        navigate('/login');
      }
      
     }catch(error){
      console.log('error:',error);
     }
    }
    return(
        <div>
            <div>Register an User</div>
            <h3>User Register</h3>
        <form onSubmit={handleRegisteration}>
<div className="form-group">
<label>Email address:</label>
<input type="email" className="form-control" id="email" value={userDetails.email}  placeholder="Enter email" onChange={(e) => handleForm({email:e.target.value})}/>

</div>
<div className="form-group">
                    <label>Name: </label>
                    <input type="text" className="form-control" id="name" value={userDetails.name} placeholder="Enter name" onChange={(e) => handleForm({name: e.target.value})} />
                </div>
<div className="form-group">
<label>Password</label>
<input type="password" className="form-control" id="password" value={userDetails.password} placeholder="Password"  onChange={(e) => handleForm({password:e.target.value})}/>
</div>
<div className="form-group">
                    <label>Mobile Number: </label>
                    <input type="text" className="form-control" id="mobileNumber" value={userDetails.mobileNumber} placeholder="Enter mobile number" onChange={(e) => handleForm({mobileNumber: e.target.value})} />
                </div>
<button type="submit" className="btn btn-primary">Register</button>
</form>
    </div>
    )
}

export default Register;
