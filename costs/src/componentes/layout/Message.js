import { useState, useEffect } from 'react'

import style from './Message.module.css'

function Message({type, msg}){

    const [visible, setVisible] = useState (false)

    useEffect(() =>{
        if(!msg){
            setVisible(false)
            return
        }
    setVisible(true)

    const timer = setTimout(() => (
        setVisible(false)
    ), 3000)

    return () => clearTimout (time)


    }, [msg])

    return(
        <>
        {visible &&(
        <div className={'${style.message} ${styles[type]}'}>{msg}</div>)}
        </>

    )
}
export default Message