import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
    return (
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <div className="form-group">
                        <label htmlFor="">Email address:</label>
                        <input type="email" className="form-control"
                        placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password:</label>
                        <input type="text" className="form-control"
                        placeholder="Enter Password" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
