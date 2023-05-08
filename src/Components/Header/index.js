import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Header = () => {
    

    

    return (
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#"><h2>Bulk Email Tool</h2></a>
          </div>
          
          
           
        </div>
      </nav>
    )
}

export default Header;