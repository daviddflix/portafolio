import { Alert, Button } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react'
import s from './contact.module.css'
import { Github } from '../About/about';
import {MdOutlineMail} from 'react-icons/md'
import whatsapp from '../Assets/whatsapp.png'
import github from '../Assets/github.png'

export default function Contact(){

    const link =`https://wa.me/5491137858227?text=Hi%20`

    const [data, setData] = useState({
        name: '',
        message: ''
    })

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    console.log('data', data)

    const handleSucces = () => {
        alert('enviado')
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(data));
        setIsSubmitting(true);
      };

      useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
          handleSucces()
        }
      }, [formErrors, isSubmitting]);

    return(
        <div className={s.main}>
             <Github/>
            <h2 className={s.mainTitle}>Contact</h2>
            <div className={s.submain}>
                <form className={s.form}>
                    <div className={s.container}>
                        <h3 className={s.title}>Name</h3>
                        <input name='name' value={data.name} onChange={handleChange} placeholder='Name' className={s.input} />
                    {formErrors.name &&  <Alert  className={s.error} severity="error">{formErrors.name}</Alert>}
                    </div>
                    <div className={s.container}>
                        <h3 className={s.title}>Message</h3>
                        <textarea name='message' value={data.message} onChange={handleChange} placeholder='Message' className={s.message} />
                    {formErrors.message &&  <Alert className={s.error} severity="error">{formErrors.message}</Alert>}
                    </div>
                    <Button className={s.btn} onClick={handleSubmit} variant='contained' >Send</Button>
            </form>
            <div className={s.containerLogos}>
                <a href={link} className={s.subcontainerLogos}>
                    <img src={whatsapp} alt='whatsapp' className={s.whatsapp}/>
                </a>
                <a href='https://github.com/daviddflix' className={s.subcontainerLogos}>
                    <img src={github} alt='Github' className={s.github}/>
                    
                </a>
                <a href='mailto:david-972010@hotmail.com?body=Hola' className={s.subcontainerLogos}>
                    <MdOutlineMail className={s.email}/>
                    <h3 className={s.titleEmail}>david-972010@hotmail.com</h3>
                </a>
            </div>
            </div>
          
        </div>
    )
}




const validate = (values) => {
    let errors = {};
    // const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    // const regexTable = /^[1-9][0-9]?$|^100$/

    if (!values.name) {
      errors.name = "Name can`t be empty!";
    } 

    if (!values.message) {
      errors.message= "Message can`t be empty!";
    } 
    return errors;
  };


