/* eslint-disable prettier/prettier */
import React, { 
  useContext, 
  useEffect, 
  useState 
} from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from '../../context/firebase';
import * as ROUTES from '../../constants/routes'

function Login(props) {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')
  // const [isInvalid, setIsInvalid] = useState(false)
  const isInvalid = password === '' || emailAddress === '';

  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  const handleLogin = async event => {
    event.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    }
  }

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
          <h1 className='flex justify-center'>
            <img
              src='/images/logo.png'
              alt='Instagram'
              className='w-6/12 mt-2 mb-4'
            />
          </h1>

          {error && (
            <p className='mb-4 text-xs text-red-500'>
              {error}
            </p>
          )
          }

          <form onSubmit={handleLogin} methods='POST'>
            <input
              aria-label='Enter your email address'
              type='text'
              placeholder='Email address'
              className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <input
              aria-label='Enter your password'
              type='password'
              placeholder='Password'
              className='text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2'
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              type='submit'
              className={
                `bg-blue-medium 
                 text-white 
                 w-full 
                 rounded 
                 h-8 font-bold 
                 ${isInvalid && 'opacity-50'}`
              }
            >
              Login
            </button>
          </form>
        </div>
        <div className='flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary'>
          <p className='text-sm'>
            Don't have an account?{` `}
          </p>
          <Link to={ROUTES.SIGN_UP} className='font-bold text-blue-medium'>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {

}

export default Login

