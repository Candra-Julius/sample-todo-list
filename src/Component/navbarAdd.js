import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../Styles/component/navbar.module.css'

const NavbarAdd = () => {
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/')
    }
  return (
    <div className={styles.container}>
        <h1>Add To Do List</h1>
        <button className={styles.circle} onClick={()=>onClick()}>
        {'>'}
        </button>
    </div>
  )
}

export default NavbarAdd