/* eslint-disable prettier/prettier */
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import * as PATH_NAME from './constants/routes';
import './styles/app.css';


const LoginComponent = lazy(() => import('./pages/login/index'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={PATH_NAME.LOGIN} component={LoginComponent} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
