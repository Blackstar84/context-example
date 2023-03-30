import './App.css';
import Button from './Button';
import React from 'react';

const themes = {
  'dark':{
    backgroundColor: 'black',
    color: 'white'
  },
  'light':{
    backgroundColor: 'white',
    color: 'black'
  }
}
export const ThemeContext = React.createContext();

function App() {
  return (
    <div>
      <ThemeContext.Provider value={ themes.dark }>
      <Button />
      </ThemeContext.Provider>
      
    </div>
  );
}

export default App;
