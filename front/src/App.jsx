
import './global.css'
import './components/formularioEnvio.css'
import { useEffect, useState } from 'react'
import { Input } from './components/Input'
import { Resultado } from './components/Resultado'
import { Inform } from './components/Inform'
import { Button } from './components/Button'

function App() {
  const [insurance, setInsurance] = useState('')

  useEffect(() => {
    console.log(insurance)
  },[insurance])

  return (
    <main className='main'>
      <div>
        <h1>Descubra quanto cobrar de aluguel com apenas algumas informações</h1>
      </div>

      <form className='formularioEnvio'>
      
        <Input 
          label="Taxa de Incêndio"
          placeholder="valor da taxa"
          onChange={(evento)=>setInsurance(evento.target.value)} />

        <Input
          label="IPTU"
          placeholder="valor do IPTU" />

        <Input 
          label="Vaga de Estacionamento"
          placeholder="qtd de vagas" />

        <Input 
          label="Banheiro"
          placeholder="qtd de banheiro" />
        
        <Input 
          label="Quartos"
          placeholder="qtd de quartos" />
        
        <Input 
          label="Condominio"
          placeholder="valor do condominio" />
        
        <Button />
        <Resultado />
      </form>
      
        <Inform />
    </main>
  )
}

export default App
