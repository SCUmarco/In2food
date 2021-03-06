import React from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

// import fakeAuth from './Components/FakeAuth';

import Login from './Components/Login';
import Dashboard from './Components/Management/Dashboard';

// Authenticate function with fake-auth component
// function PrivateRoute({ children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={() =>
//         (
//           fakeAuth.isAuthenticated ? (children) : (<Redirect to="/login" />)
//         )
//       }
//     />
//   );
// }

export default function AppRouter() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={Login} />
      
      {/* Test router for management page */}
      <Route exact path="/dashboard" component={Dashboard} />

      {/* Authenticate router for management page */}
      {/* <PrivateRoute exact path="/management">
        <Dashboard />
      </PrivateRoute> */}
    </Router>
  )
}