import React from 'react';
import {Provider} from 'react-redux'
import generateStore from './store/index';
import Main from './components/Main'
import Search from './components/Search'
import BandsResult from './components/BandsResult'
import Filter from './components/Filter'
import AppRouter from './routers/AppRouter';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {

  const store = generateStore()

  return (
    <Provider store={store}>
      <Router>
        <AppRouter/>
      </Router>
   <Filter/>
    
    </Provider>

      
     

    
  );
}

export default App;
