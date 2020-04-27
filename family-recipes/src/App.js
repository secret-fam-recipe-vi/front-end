import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import './App.css';

import PrivateRoute from './components/PrivateRoute'
import LoginOrRegister from './components/LoginOrRegister'
import Dashboard from './components/Dashboard';
import { DataContext } from './context/data'

function App() {

  const [data, setData] = useState([])

  // useEffect(() => {
  //   axios.get(``)
  //   .then(response => {
  //     setData(response.data)
  //     console.log('Response:', response)
  //   })
  // }, [data])

  return (
    <Router>
      <div className="App">
        <DataContext.Provider value={{data}}>
          <Route exact path="/" component={LoginOrRegister} />
          <PrivateRoute path="/dashboard" component={Dashboard}/>
        </DataContext.Provider>
      </div>
    </Router>
  );
}

export default App;
