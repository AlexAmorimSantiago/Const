import style from './Input.module.css'

function Input (type, name, placeholder, handleOnChange, value){
    return(
        <div className={style.form_control}>
            <label htmlFor={name}>{text}</label>
            <input 
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                Onchange={handleOnChange}
                value={value}
            />

        </div>

    )
}
export default Input