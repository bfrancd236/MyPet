import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImg from '../../assets/dog.png'

export default function Register() {
   const [nome, setNome] = useState('')
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')
   const [confirmacaoSenha, setConfirmacaoSenha] = useState('')

   const history = useHistory();

   async function handleRegister(event) {
      event.preventDefault()

      const data = {
         nome, 
         email, 
         senha,
         confirmacaoSenha,

      }

      //console.log(data)

      try {
         const response = await api.post('', data)
         alert(` Sua conta foi criada com sucesso.`)
         history.push('/')
      } catch(error) {
         alert('Erro ao cadastrar, tente novamente.')
      }
   }

   return (
      <div className="register-container">
         <div className="content">
            <section>
               <img src={logoImg}/>

               <h1>Cadastro</h1>
               <p>Faça seu cadastro, entre na plataforma e ajude os animais abandonados.</p>

               <Link className="back-link" to="/">
                  <FiArrowLeft size={16} />
                  Voltar
               </Link>            
            </section>

            <form onSubmit={handleRegister}>
               <input 
                  placeholder="Nome" 
                  value={nome}
                  onChange={e => setNome(e.target.value)}
               />
               <input type="email" 
                  placeholder="E-mail" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
               <input 
                  type='password'
                  placeholder="Senha" 
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
               />
               <div className="input-group">
                  <input
                     type='password' 
                     placeholder="Confirme sua senha" 
                     value={confirmacaoSenha}
                     onChange={e => setConfirmacaoSenha(e.target.value)}   
                  />
               </div>
               <button className="button" type="submit">Cadastrar</button>
            </form>
         </div>
      </div>
   )
}