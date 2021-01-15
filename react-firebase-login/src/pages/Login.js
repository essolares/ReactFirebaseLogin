import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signin } from "../helpers/auth";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = (props) => {
    const [error, setError] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

      const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        try {
          await signin(email, password);
        } catch (error) {
          setError(error.message);
        }
      }

      return (
        <div className="home">
        <Header></Header>
        <div className="jumbotron jumbotron-fluid py-1">
        <div className='container text-center py-4'>          
        <form autoComplete="off" onSubmit={handleSubmit} >
            <h1>Login to 
              <Link to="/"> React Firebase Login </Link>
            </h1>
            <p>Fill in the form below to login to your account. </p>
            <div>
              <input
                placeholder="Email"
                name="email"
                type="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <input
                placeholder="Password"
                name="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
              />
            </div>
            <div>
              {error ? (
                <p>{error}</p>
              ) : null}
              <button className="btn btn-primary mr-1" type="submit">Login</button>
            </div>
            <hr />
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
          </div>
        </div>
        <Footer></Footer>
        </div>
              );
}

export default Login;