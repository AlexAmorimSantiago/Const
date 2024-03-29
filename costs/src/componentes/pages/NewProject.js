import {useNavigate} from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

import style from './NewProject.module.css'

function NewProject(){

    const navigate = useNavigate () 

    function createPost(project){

        //inicializar o projeto cost e serviço
        project.costs = 0
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
            navigate.push('/project',{message: 'projecto criado com sucesso!'})
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