// Packages
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// Context API
import { AuthContext } from './authContext';
import { ToastContainer } from 'react-toastify';
import './scss/index.scss';
import 'react-toastify/dist/ReactToastify.css';
import { getItemFromSessionStore } from './utils.js';
const Login = React.lazy(() => import('./Components/Auth/Login'));
const Register = React.lazy(() => import('./Components/Auth/Register'));

function App() {
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedIn = getItemFromSessionStore('userId');
    if (loggedIn) {
      setAuthed(true);
    }

    setLoading(false);
  }, []);
  return loading ? (
    'loading...'
  ) : (
    <AuthContext.Provider value={{ authed, setAuthed }}>
        <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route path='/login' exact component={Login} />
              <Route path='/register' exact component={Register} />

            </Switch>
          </React.Suspense>
        </BrowserRouter>
      <ToastContainer />
    </AuthContext.Provider>
  );
}

export default App;
