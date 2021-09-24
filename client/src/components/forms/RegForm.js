import React, {useState} from 'react'

const RegForm = () => {

const [username, setUsername] = useState(null);
const [password, setPassword] = useState(null);

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${username} and ${password}`)
}

    return (
        <div>
            <h2 className="text-center">Register</h2>
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