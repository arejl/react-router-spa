import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ThemeContext from './ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';

function App() {
  const [currentTheme, setCurrentTheme] = React.useState(localStorage.selectedTheme || 'light');
  React.useEffect(() => { localStorage.setItem('selectedTheme', currentTheme) }, [currentTheme]);
  return (
    <ThemeContext.Provider value={{
      currentTheme,
      switchTheme: () => {
        (currentTheme === 'light') ? setCurrentTheme('dark') : setCurrentTheme('light');                
      }
  }}>{
      <Router>
        <main className={`App ${currentTheme}`}>
            <Navbar />
            <div className="container">
            <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
            </div>
          
        </main>
      </Router>
  }      
  </ThemeContext.Provider>
  );
}

export default App;
