import style from './ProjectForm.module.css'

function ProjectForm(){
    return(
        <form>
            <div className={style.form}>
            <input type="text" placeholder="Insira o nome do projeto" />
            </div>
            <div>
            <input type="number" placeholder="Insira o valor do orçamento" />
            </div>
            <div>
            <select name="category_id">
                <option desabled selected>
                    Selecione a categaria
                </option>
            </select>
            <input tupe="submit" value="Criar projeto"/>
            </div>
        </form>

    )
}
export default ProjectForm