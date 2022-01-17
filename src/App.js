import React from 'react';
import {Provider} from 'react-redux'
import generateStore from './store/index';
import AppRouter from './routers/AppRouter';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {

  const store = generateStore()

  return (
    <Provider store={store}>
      <Router>
        <AppRouter/>
      </Router>
    </Provider>

      
     

    
  );
}

export default App;
