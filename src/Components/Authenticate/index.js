
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';




const Authenticate = () => {
    const navigate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies(['accessToken']);
    const handleLogout = async () => {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/signout`);
        if(response){
            removeCookie('accessToken');
            navigate('/login')
        }
    }



    return (
        <div>
            <p>Welcome To Athentication Tool</p>
            <button type="button" onClick={handleLogout} class="btn btn-danger">Logout</button>
        </div>
    )
}
export default Authenticate;

