import React from 'react';
import { Provider } from 'react-redux';
import ThemeSelect from './main/components/ThemeSelect';
import configureStore from './main/reducers/configureStore';

const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>App react</h1>
        <ThemeSelect />
      </div>
    </Provider>
  );
}

export default App;
