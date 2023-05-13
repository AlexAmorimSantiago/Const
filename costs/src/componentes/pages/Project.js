import styles from './Project.module.js'

import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Loading from '../layout/Loading.js'
import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm.js'
import Message from '../layout/Message'


function Project(){

    const {id} = useParams()
    console.log(id)

    const [project, setProject] = useState([])
    const [showProjectForm,setShowProjectForm] = useState(false)
    const [showServiceForm,setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type , setType] = useState()

    useEffect(() => {
        setTimeout(() =>{
            
        fetch(`http://localhost:5000/project/${id}`,{
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
            },
         })
         .then(resp => resp.json())
         .then((data) => {
            setProject(data)
         })
         .catch(err => console.log)


        }, 300)

        function toggleProjectForm (){
            setShowProjectForm(!showProjectForm)    
        }

        function toggleServiceForm (){
            setShowServiceForm(!showServiceForm)    
        }

    },[id])

    function editPost (project){

        setMessage('')
        // budget validation
        if(project.budget < project.cost){
            setMessage('O orçamento não pode ser menor que o custo do projeto')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}` ,{
            method: 'PATCH',
            headers:(
                'content-type': 'application/json'
            ),
            body: JSON.stringify(project),
        })
        .then(resp => resp, json())
        .then((data) =>{

            setProject(data)
            setShowProjectForm(false)
            setMessage('Projeto atualizado')
            setType('sucess')


        })
        .catch(err =>console.log(err))


    }





    return (<>
        {project.name ? (
            <div className={styles.project_details}>
                <Container customClass="column">
                    {message && <Message type={type} msg={message} />}
                    <div className={styles.details_container }>
                        <h1>Projeto: {project.name}</h1>
                        <button className={styles.btn} onClick ={togglePorjectForm}>{!showProjectForm ? 'Editar projeto' : 'Fechar'}</button>
                        {!showProjectForm ?(
                            <div className={styles.project_info}>
                                <p>
                                    <span>Categoria:</span>{project.category.name}
                                </p>
                                <p>
                                    <span>Total de Orçamento:</span>R${project.budget}
                                </p>
                                <p>
                                    <span>Total de utilizado:</span>R${project.costs}
                                </p>
                            </div> ) : (
                                <div className={styles.project_info}>
                                    <p><ProjectForm handleSubmit={editPost} btnText="Concluir Edição" projectData={project}/></p>
                                </div>
                            )}

                    </div>

                    <div className={styles.service_form_container}>
                        <h2>Adicione um serviço:</h2>
                        <button className={styles.btn} onClick ={toggleServiceForm}>{!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                        </button>
                        
                        <div  className={styles.project_info}>
                            {showServiceForm &&(
                                <ServiceForm/>

                            )}
                        </div>
                        <h2>Serviço</h2>
                        <Container customClass="start">
                            <p>Itens de Serviços</p>

                        </Container>

                    </div>

                </Container>

            </div>
             ) : (
            <Loading /> 
        )}
    </>)
}
    
export default Project