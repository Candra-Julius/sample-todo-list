import React from 'react'
import Card from '../Component/card'
import Navbar from '../Component/navbar'
import todolist from '../data/todolist'
import styles from '../Styles/pages/home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
    <div className={styles.nav}>    
    <Navbar/>
    </div>
        {todolist.map((e) => (
            <div className={styles.card}>
                <Card text={e.body} no={e.title}/>
            </div>
    ))}
    </div>
  )
}

export default Home