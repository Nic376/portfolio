import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './main/reducers/configureStore';
import AppNavigator from './main/navigation/AppNavigator';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './main/navigation/Header'


const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <div>

        <Router>
          <Header />


          <AppNavigator />
        </Router>

      </div>
    </Provider>
  );
}

export default App;
