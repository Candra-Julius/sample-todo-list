import React, { useEffect } from 'react'
import styles from '../Styles/component/card.module.css'


const Card = ({text, no}) => {
  return (
    <div className={styles.container}>
    <div className={styles.title}>
    <h3>{no}</h3>
    </div>
    <div className={styles.line}/>
    <div className={styles.body}>
    <p>{text}</p>
    </div>
    </div>
  )
}

export default Card