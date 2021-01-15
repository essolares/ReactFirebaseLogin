import React, {  useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { signup, signInWithGoogle, signInWithGitHub , signInWithFacebook} from "../helpers/auth";
import Header from '../components/Header';
import Footer from '../components/Footer';

const SignUp = () => {
    const [error, setError] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
          await signup(email, password);
        } catch (error) {
          setError(error.message);
        }
      }

      const googleSignIn = async () => {
        try {
          await signInWithGoogle();
        } catch (error) {
            setError(error.message);
        }
      }
      const githubSignIn = async () => {
        try {
          await signInWithGitHub();
        } catch (error) {
          console.log(error)
          setError(error.message);
        }
      }
      const facebookSignIn = async () => {
        try {
          await signInWithFacebook();
        } catch (error) {
          console.log(error)
          setError(error.message);
        }
      }

      return (
        <div className="home">
        <Header></Header>
        <div className="jumbotron jumbotron-fluid py-1">
        <div className='container text-center py-4'>
          <form onSubmit={handleSubmit}>
            <h1>
              Welcome to my first
            <Link to="/"> React Firebase Login</Link>
            </h1>
            <p>Fill in the form below to create an account.</p>
            <div>
              <input placeholder="Email" name="email" type="email" onChange={e => setEmail(e.target.value)} value={email}></input>
            </div>
            <div>
              <input placeholder="Password" name="password" onChange={e => setPassword(e.target.value)} value={password} type="password"></input>
            </div>
            <div>
              {error ? <p>{error}</p> : null}
              <button className="btn btn-primary mr-1" type="submit">Sign up</button>
            </div>
            <br/>
            <p>You can also sign up with any of these services</p>
            <div>
            <button className="btn btn-danger mr-2" type="button" onClick={googleSignIn}>
              Sign up with Google
            </button>
            <button className="btn btn-secondary" type="button" onClick={githubSignIn}>
              Sign up with GitHub
            </button>
            </div>
            <button className="btn btn-primary"  type="button" onClick={facebookSignIn}>
              Sign up with Facebook
            </button>
            <hr></hr>
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </form>
        </div>
        </div>
        <Footer></Footer>
        </div>
      )
      
}

export default SignUp;