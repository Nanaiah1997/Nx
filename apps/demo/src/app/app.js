import * as React from 'react';
// import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

//import Auth from  'mfe-auth/Module'        
 const Auth = React.lazy(()=>import('mfe-auth/Module'))  

export function App() {

  
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<div>welcome home</div>} />
        <Route path="/login" element={<Auth/>} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
