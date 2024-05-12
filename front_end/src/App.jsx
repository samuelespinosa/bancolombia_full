import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AppView from './sections/overview/view/app-view';
import SearchView from './sections/search/search-view';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SearchView/>} />
        <Route  path="/detalles/:cuenta" element={<AppView/>} />
      </Routes>
    </Router>
  );
};

export default App;
