import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../Styles/component/navbar.module.css'

const Navbar = () => {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/add')
    }
  return (
    <div className={styles.container}>
        <h1>To Do List</h1>
        <button className={styles.circle} onClick={()=>onClick()}>
        +
        </button>
    </div>
  )
}

export default Navbar