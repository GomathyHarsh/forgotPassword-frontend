import {useState} from "react";
import { Routes,Route } from 'react-router-dom';
import UserContext from "./Context/UserContext";
import useFindUser from "./Hooks/useFindUser";

import Login from "./Components/Login";
import Register from "./Components/Register";
import Authenticate from "./Components/Authenticate";
import PublicRoutes from "./Routes/PublicRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";
import ResetPassword from "./Components/ResetPassword";
import ForgotPassword from "./Components/ForgotPassword";

function App() {
  const [user,setUser,loading] = useFindUser();

  return (
    <UserContext.Provider value={{user,loading}}>
        <div >

          
          
    <Routes>
      <Route element={<PublicRoutes/>}>
      <Route path='/' element={<Login/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/forgotPassword' element={<ForgotPassword/>} />
      <Route path='/passwordReset' element={<ResetPassword/>} />
      
      </Route>
      <Route element={<PrivateRoutes/>}>
      <Route path='/auth' element={<Authenticate/>} />
      </Route>
     

    </Routes>
    </div>
    </UserContext.Provider>
  );
}

export default App;
