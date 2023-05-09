import {Route,Routes,Link,BrowserRouter} from "react-router-dom";
import Home from './componentes/pages/Home'
import Contact from './componentes/pages/Contact'
import Company from './componentes/pages/Company'
import NewProject from './componentes/pages/NewProject'
import Projects from "./componentes/pages/Projects";
import Project from "./componentes/pages/Project"
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
          <Route  path='/projects' element={<Projects />} />
          <Route  path='/company' element={<Company />} />
          <Route  path='/contact' element={<Contact />} />
          <Route  path='/newproject' element={<NewProject />} />
          <Route  path="/project/:id"/> {<Project />}
        </Routes>  
      </Container>
      <Footer/>
    </BrowserRouter>
  
  );
}

export default App;
