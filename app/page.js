//o UseRef só funciona com o useClient
//useRef é um hook em React, uma biblioteca JavaScript popular para construir interfaces de usuário. O useRef é utilizado para criar e acessar referências a elementos do DOM ou para armazenar valores mutáveis que não causam a re-renderização do componente quando são modificados
'use client';

import {useEffect, useRef} from "react"

function App (){

  const labelRef = useRef('')
  const inputRef = useRef('')
  
  //referencias↓
  useEffect (() =>{
    labelRef.current.innerHtml = "NOME DO USUÁRIO"
    labelRef.current.style.fontStyle = 'italic'
  }, []);

  const enviarFormulario = (evento) => {
    evento.preventDefault()
    //enviar dados
    inputRef.current.focus()
  }
  return(
      <div className="App">
          <form onSubmit={enviarFormulario}>
              <div>
              <label ref={labelRef}>Nome</label>
              </div>
              <div>
                <input placeholder="Digite seu nome" ref={inputRef} type="name"/>
              </div>
              <div>
              <label>Email</label>
              </div>
              <div>
                <input placeholder="Digite seu Email" type="email"/>
              </div>
              <button>Salvar</button>
          </form>
      </div>
  )
}

export default App























/*export default function Home (){
  
  return(
    <h1>Home page</h1>
   
  )
}*/


