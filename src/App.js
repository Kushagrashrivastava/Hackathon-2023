import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Institute from './components/Institute';
import Student from './components/Student';
import StudentPortal from './components/StudentPortal';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/institute" component={Institute} />
          <Route path="/student" component={Student} />
          <Route path="/studentPortal" component={StudentPortal} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

