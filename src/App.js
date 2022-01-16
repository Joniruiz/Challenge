import React from 'react';
import {Provider} from 'react-redux'
import generateStore from './store/index';
import Main from './components/Main'
import Search from './components/Search'
import BandsResult from './components/BandsResult'
import Filter from './components/Filter'

function App() {

  const store = generateStore()

  return (
    <Provider store={store}>
      <Router>
        
    <Main/>
    <Search/>
    <BandsResult/>
      </Router>
   <Filter/>
    
    </Provider>

      
     

    
  );
}

export default App;
