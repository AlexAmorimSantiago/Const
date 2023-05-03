import {useLocation} from 'react-router-dom'


import Message from '../layout/Message'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'

import styles from './Projects.module.css'

function Projects(){

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }


    return (
    <div className={styles.project_container}>
        <h1 className={styles.tille_container}>Meus Projetos</h1>
        <linkButton to="/newproject" text="Criar Projeto"/>
        <a href="#">novo projeto</a>
        {message && <Message type="sucess" msg={message}/>}
        <Container customClass="start">
            <p>Projetos...</p>

        </Container>


    </div>
    )
}
export default Projects