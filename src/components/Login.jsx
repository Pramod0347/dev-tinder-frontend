import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
    const [emailId, setEmailId] = useState("pramodtest@gmail.com");
    const [password, setPassword] = useState("test");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post(BASE_URL + "/login", {
                emailId,
                password,
            },
            {
              withCredentials: true
            });
            console.log(res);
            dispatch(addUser(res.data.data));
            return navigate('/');
        } catch (error){
            setError(error?.response?.data);
            console.log(error);
        }
        
    }
  return (


    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <div>
            <fieldset className="fieldset w-xs">
              <label className="label">Email</label>
              <input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} className="input" />

              <label className="label">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" />
              <p className="text-red-400">{error}</p>
              <button className="btn btn-neutral mt-4" onClick={handleLogin}>Login</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
