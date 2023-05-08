import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/forgotPassword`, { email: email });
            if (response) {
                setIsEmailSent(true);
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    return (
        <div>
            <h3>Forgot Password</h3>
            {!isEmailSent ?
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" id="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form> :
                <div className="alert alert-success">
                    <strong>Reset password email sent Successfully</strong></div>
            }
        </div>
    )
}

export default ForgotPassword;