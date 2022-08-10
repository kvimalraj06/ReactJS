import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return(
    <h1>{new Date().toLocaleTimeString()}</h1>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)