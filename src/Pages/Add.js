import React, { useEffect, useState } from 'react'
// import Navbar from '../Component/navbar'
import NavbarAdd from '../Component/navbarAdd'
import styles from '../Styles/pages/add.module.css'
import todolist from '../data/todolist'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        title: '',
        body: ''
    })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    useEffect(()=>{
        console.log(form)
    })
    const hanldeSubmit = (e) => {
        e.preventDefault()
        const data = {
            title: form.title,
            body: form.body
        }
        todolist.push(data)
        console.log(todolist);
        navigate('/')
    }
  return (
    <div className={styles.container}>
    <div className={styles.nav}>    
    <NavbarAdd/>
    </div>
    <div className={styles.input}>
        <input type={'text'}  placeholder='Title' name={'title'} onChange={(e)=>handleChange(e)}/>
        <textarea placeholder='Boddy here' name={'body'} onChange={(e)=>handleChange(e)} />
        <button className={styles.submit} type='submit' onClick={hanldeSubmit}><p>Submit</p></button>
    </div>
    </div>
  )
}

export default Add