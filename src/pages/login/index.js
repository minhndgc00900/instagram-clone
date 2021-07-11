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
    const [isInvalid, setIsInvalid] = useState(false)

    return (
        <p>
          I'm the login page  
        </p>
    )
}

Login.propTypes = {

}

export default Login

