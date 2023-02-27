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
      <conteiner>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/company">
          <Company/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/newproject">
          <NewProject/>
        </Route>
      </conteiner>

      <p>Footer</p>
    </Router>

  
  );
}

export default App;
