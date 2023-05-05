import {useLocation} from 'react-router-dom'

import {useState, useEffect} from 'react'
import Message from '../layout/Message'
import Container from '../layout/Container'
import Loading from '../layout/Loading'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '..project/ProjectCard'


import styles from './Projects.module.css'

function Projects(){

    const [project, setProject] = useState([])
    const [removerLoading, setRemoveLoading] = useState(fase)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect (() =>{

       setTimeout(
        () =>{
            fetch('http://localhost:5000/projects', {
                method: 'GET'
                headers: {
                    'Content -Type': 'application/json'
                },
            }).then(resp => resp.json())
            .then(data => {
                console.log(data)
                setProject (data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
    
    
        }, 300)

        }, [])

    function removeProject(id){

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
        .then(data => {
            setProject(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso')
        })
        
        .catch(err => console.log(err))
    }
    


    return (
        <div className={styles.project_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto"/>
        </div>
        {Message && <Message type="success" msg={Message}/>}
        {projectMessage && <Message type="success" msg={projectMessage}/>}
        <Container customClass="start">
           {Projects.length > 0 &&
            project.map((project) => 
            <ProjectCard 
            id={project.id}
            name={project.name}
            budget={project.budgey}
            category={project.category.name}
            key={project.id}
            handleRemove ={removeProject}
            />)} 
            {!removerLoading && <Loading/>}
            {removeLoading && Projects.length === 0 && (
               <p>
                Não há projetos cadastadros
               </p> 
            )}

        </Container>


    </div>
    )
}
export default Projects