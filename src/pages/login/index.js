/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import FirebaseContext from '../../context/firebase';

function Login(props) {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')
  // const [isInvalid, setIsInvalid] = useState(false)
  const isInvalid = password === '' || emailAddress === '';

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
      </div>
      <div className="flex flex-col w-2/5">
        <h1 className='flex justify-center'>
          <img
            src='/images/logo.png'
            alt='Instagram'
            className='w-6/12 mt-2 mb-4'
          />
        </h1>
      </div>
    </div>
  )
}

Login.propTypes = {

}

export default Login

