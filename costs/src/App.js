import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './componentes/pages/Home'
import Contact from './componentes/pages/Contact'
import Company from './componentes/pages/Company'
import NewProject from './componentes/pages/NewProject'


function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>  
      </ul>
      <switch>
       
        <Router exact path="/">
          <Home/>
        </Router>
        <Router exact path="/company">
          <Company/>
        </Router>
        <Router exact path="/contact">
          <Contact/>
        </Router>
        <Router exact path="/newproject">
          <NewProject/>
        </Router>
     
        
      </switch>
      <p>Footer</p>
    </Router>
  
  );
}

export default App;
