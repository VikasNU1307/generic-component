
import './App.css';
// import Filters from './components/filters';
import React, { useState } from 'react';
import Checkbox from './components/CheckBox';
// import home from './components/home';
import Data from './components/Forms/Data';
import Pagination from './components/Paginations/Pagination';
function App() {
  

  return (
    <div className="App">
      <div>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>CheckBox Component
      </h1>
      <p>without the value below tile is undefined</p>
      <Checkbox></Checkbox> 
      <p>with the value of Checkbox bolow title</p>
      <Checkbox value = "Checkbox"> w</Checkbox>
      <div style={{ marginTop: '20px' }}>
        <p>
          The checkbox above is a simple React component. When checked, it
          Return  "True," and when unchecked, it Return
          "False."
        </p>
      </div>
    </div>
    </div>
     <Data/>
     <Pagination/>
    </div>
  );
}

export default App;
