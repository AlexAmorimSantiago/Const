import styles from './Project.module.js'

import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Loading from '../layout/Loading.js'
import Container from '../layout/Container.js'

function Project(){

    const {id} = useParams()
    console.log(id)

    const [project, setProject] = useState([])
    const [showProjectForm,setShowProjectForm] = useState(false)

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

    },[id])





    return (<>
        {project.name ? (
            <div className={styles.project_details}>
                <Container customClass="column">
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
                                    <p>detalhes do projeto</p>
                                </div>
                            )}

                    </div>

                </Container>

            </div>
             ) : (
            <Loading /> 
        )}
    </>)
}
    
export default Project