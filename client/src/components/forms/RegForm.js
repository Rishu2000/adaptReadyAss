import React, {useState} from 'react'
import axios from '../axiosCall/axios';

const RegForm = () => {

const [success, setSuccess] = useState(null);
const [error, setError] = useState(null);
const [username, setUsername] = useState(null);
const [password, setPassword] = useState(null);

const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/register',{username, password}).then((res) => {
        setSuccess(res.data.Message);
        setError(null);
    }).catch((err) => {
        setError(err.response.data);
        setSuccess(null)
    })
}

    return (
        <div>
            <h2 className="text-center">Register</h2>
            {success && (
                <div className="alert alert-success">User {success} has been created.</div>
            )}
            {error && (
                <div className="alert alert-danger">{error}</div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control"
                        onChange={(e) => setUsername(e.target.value)}
                        id="exampleInputUsername1" aria-describedby="UsernameHelp"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" 
                        onChange={(e) => setPassword(e.target.value)}
                        id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default RegForm