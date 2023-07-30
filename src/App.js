import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './components/Nav'

import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  
  return (
      <Router className="App">
        <Nav />
        <AnimatedRoutes />
      </Router>
  );
}

export default App;
