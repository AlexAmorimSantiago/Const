import {Link} from 'react-router-dom'
import styles from '.ProjectCard.module,css'

import {BsPencil,BsFillTrashFILL, BsFillTrashFill} from 'react-icons/bs'

function ProjectCard({id, name, bugdget, categoty, hanleRemove}){

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)

    }

    return( 
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${bugtet}
            </p>
            <p className={styles.project_card}>
                <span className ={'${styles[category.toLowerCase()]'}></span> {category}
            </p>
            <div className={styles.project_card_action}>
                <Link to="/">
                    <BsPencil/>Editar
                </Link>
                <button onClick ={remove}>
                    <BsFillTrashFill/> Excluir
                </button>
            </div>
        </div>


    )
    
}
export default ProjectCard