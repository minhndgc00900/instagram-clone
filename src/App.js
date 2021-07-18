/* eslint-disable prettier/prettier */
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import * as PATH_NAME from './constants/routes';
import './styles/app.css';

// lazy import
const LoginComponent = lazy(() => import('./pages/login/index'))
const SignUpComponent = lazy(() => import('./pages/sign-up/index'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={PATH_NAME.PROFILE}>
            <Redirect to="/login" />  
          </Route>
          <Route exact path={PATH_NAME.LOGIN} component={LoginComponent} />
          <Route exact path={PATH_NAME.SIGN_UP} component={SignUpComponent} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
