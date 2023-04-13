import {Route,Routes,Link,BrowserRouter} from "react-router-dom";
import Home from './componentes/pages/Home'
import Contact from './componentes/pages/Contact'
import Company from './componentes/pages/Company'
import NewProject from './componentes/pages/NewProject'
import Projects from "./componentes/pages/Projects";
import Container from './componentes/layout/Container'
import Navbar from './componentes/layout/Navbar.js'
import Footer from './componentes/layout/Footer.js'



function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/newproject' element={<NewProject />} />
        </Routes>  
      </Container>
      <Footer/>
    </BrowserRouter>
  
  );
}

export default App;
