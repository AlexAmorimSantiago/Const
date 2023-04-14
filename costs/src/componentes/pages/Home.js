import style from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home(){
    return(
        <section className={style.home_container}>
            <h1>Bem - vindo ao <span>costs</span></h1>
            <p>Comece a gerenciar o seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar projeto" />
            <img src={savings} alt="Costs"/>

        </section>
    )
}
export default Home