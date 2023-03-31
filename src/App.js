import './App.css';

import React, { useState } from 'react';
import Form from './Form';
import MainInfo from './MainInfo';
import Skills from './Skills';

export const FormContext = React.createContext();

function App() {
  const [email, setEmail] = useState("hola@gmail.com");
  const [password, setPassword] = useState("");
  const [likes, setLikes] = useState("");

  return (
    <div>
    
      <form>
        <FormContext.Provider value={{email,password,likes, setEmail, setLikes, setPassword}} >
          <MainInfo />
          <Skills />
        </FormContext.Provider>
        <div>
          <p>Email: {email}</p>
          <p>Contraseña: {password}</p>
          <p>Lenguajes: {likes}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
