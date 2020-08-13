import { BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import PaginationContainer from './components/Pagination/PaginationContainer';


const App = () => (
  <Router>
    <Route path="/:pageId?" render={ () => < PaginationContainer allItemsCount={200} pageItemsCount={10}/> }/>
  </Router>
);
export default App;