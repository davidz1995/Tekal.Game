import React, {useState} from 'react';
import '../Styles/facebookButton.css'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import {
    useLocation
} from "react-router-dom";

const ChangePassword = () => {
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')

    const passwordReject = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
        
    var token = useLocation().search.replace('?', '');
    try {
        let obj = jwt.verify(token, process.env.REACT_APP_SECRETWORD);
        async function postNewPassword(){
            var emailandPasswor={
                email:obj.email,
                password: password}
        await axios.post(`${process.env.REACT_APP_API_URL}changepassword`, emailandPasswor)
        window.location.href='./'
        }
        return (
            <div>
                <label htmlFor='Password'> Password </label>
                <input name='Password' type='text' onChange={(e) => setpassword(e.target.value)} />
                <label  htmlFor='RepeatPassword'> Repeat Password </label>
                <input name='RepeatPassword' type='text' onChange={(e) => setconfirmpassword(e.target.value)}/>
                <button onClick={()=>{
                    if (!passwordReject.test(password) && password.length >= 0){
                        alert("Maximum 15 characters \n At least one capital number \n At least one capital letter \n At least one lower case letter \n No blanks")
                        return;
                    }
                    if(password !== confirmpassword){
                        return;
                    }
                    postNewPassword(obj.email, password)

                }}>submit</button>
            </div>
        );
        
    } catch(err) {
        // err
        return (
            <h1>
                Error
            </h1>
        );
    }
}

export default ChangePassword;