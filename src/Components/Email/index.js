
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';




const Email = () => {
    const navigate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies(['accessToken']);
    const handleLogout = async () => {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/signout`, {userCredentials: true});
        if(response){
            removeCookie('accessToken');
            navigate('/login')
        }
    }



    return (
        <div>
         <div className="nav navbar-nav navbar-right">
            <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}
export default Email;

