import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Use Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// Pages
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
