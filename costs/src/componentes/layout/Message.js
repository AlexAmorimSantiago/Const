import { useState, useEffect } from 'react'

import styles from '.Message.module.css'

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
    ), 300)

    return () => clearTimout (timer)


    }, [msg])

      return(
        <>
        {visible &&(<div className={'${style.message} ${styles[type]}'}>{msg}</div>)}
        </>

    )
}

  
export default Message