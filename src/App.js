// import logo from './logo.svg';
import './App.css';
import Forms from './PropExample/Forms';
import Sample from './Sample';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  // console.log("mode set now " + theme);
  const handleTogggle = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  useEffect(() => {
    fetch("/users.json")
      .then(res => res.json())
      .then(data => {
        // console.log(data.users[1].name+` prefer `+data.users[1].mode +` mode`)
        localStorage.setItem('theme', data.users[1].mode);
      })
    document.body.className = theme;
  }, [theme])

  return (
    <div className={`App ${theme}`}>
      <Forms />
      <button className='border my-2 p-1 rounded' onClick={handleTogggle}>Toggle Mode</button>
      <Sample></Sample>
    </div>
  );
}

export default App;
