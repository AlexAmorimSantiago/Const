import {Route,Routes,Link,BrowserRouter} from "react-router-dom";
import Home from './componentes/pages/Home'
import Contact from './componentes/pages/Contact'
import Company from './componentes/pages/Company'
import NewProject from './componentes/pages/NewProject'

import Container from './componentes/layout/Container'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='/newproject'>Novo Projeto</Link>
      </div>
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/ element'element={<Home />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/newproject' element={<NewProject />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </BrowserRouter>
  );
}

export default App;
