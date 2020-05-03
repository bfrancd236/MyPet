import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'
import './styles.css'

import Logo from '../../assets/dog.png'

export default function Login() {
   const [nome, setNome] = useState('')
   const [senha, setSenha] = useState('')
   const history = useHistory()

   async function handleLogin(event) {
      event.preventDefault()

      try {
         const response = await api.post('sessions', { nome })

         localStorage.setItem('nome', setNome)
         localStorage.setItem('nome', response.data.name)

         history.push('/profile')
      } catch(error) {
         alert(error)
      }
   }

   return (
      <div className="container">
         <section className="form">
         <img src={Logo} alt="Logo" />
            <form onSubmit={handleLogin}>
               <h1>MEU PET</h1>

               <input 
                  placeholder="Digite seu nome de usuário" 
                  value={nome}
                  onChange={e => setNome(e.target.value)}
               />
                <input 
                  type="password"
                  placeholder="Digite sua senha" 
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
               />
               <button className="button" type="submit">Entrar</button>

               <Link className="back-link" to="/register">
                  Não tem uma conta? Clique aqui para criar
               </Link>
            </form>
         </section>         
      </div>
   )
}