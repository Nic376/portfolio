import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './main/reducers/configureStore';
import AppNavigator from './main/navigation/AppNavigator';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './main/navigation/Header'
import { I18nextProvider } from 'react-i18next';
import i18n from "./main/i18n"


const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <I18nextProvider i18n={i18n}>
          <Router>
            <Header />

            <AppNavigator />
          </Router>
        </I18nextProvider>


      </div>
    </Provider>
  );
}

export default App;
