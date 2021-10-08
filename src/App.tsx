import React from 'react';
import { Provider } from 'react-redux';
import ThemeBox from './main/components/ThemeBox';
import ThemeSelect from './main/components/ThemeSelect';
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

          <ThemeSelect />

          <AppNavigator />
        </Router>

        <ThemeBox />
      </div>
    </Provider>
  );
}

export default App;
