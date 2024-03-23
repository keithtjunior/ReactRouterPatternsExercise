//https://blog.logrocket.com/authentication-react-router-v6/

import { useState } from "react";
import { useAuth } from "./hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    // mock authentication
    if (username === "user" && password === "password") {
      // replace with authentication logic
      await login({ username });
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div style={{margin: '2rem'}}>
      <form aria-label="login-form" onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            aria-label="username-input"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            aria-label="password-input"
            id="password"
            type="password"
            value={password}
            style={{marginTop: '10px'}}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button style={{marginTop: '10px'}} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;