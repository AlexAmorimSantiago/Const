import {useHistory} from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

import style from './NewProject.module.css'

function NewProject(){

    const history =useHistory()

    function createPost(project){

        //inicializar o projeto cost e serviço
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/project",{
            method: 'POST',
            header: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
        })
        .catch((err) => console.log(err))
    }


    return (
    <div className={style.newproject_container}>
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
    </div>

    )
}
export default NewProject