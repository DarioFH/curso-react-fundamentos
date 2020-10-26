import './App.css'
import React from 'react'

import Aleatorio from './components/basico/Aleatorio'
import ComParametro from './components/basico/ComParametro'
import Fragmento from './components/basico/Fragmento'
import Primeiro from './components/basico/Primeiro'
import Card from './components/layout/Card'

export default props => {
    return (
        <div className='App'>

            <h1>Fundamentos React</h1>



            <div className="Cards">
                <Card titulo="#04 - Desafio Aleatório">
                    <Aleatorio min={1} max={60} />
                </Card>


                <Card titulo="#03 - Fragmento">
                    <Fragmento></Fragmento>
                </Card>

                <Card titulo="#02 - Com Parametro">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Luizinho"
                        nota={9.3} />
                </Card>

                <Card titulo="#01 - Primeiro Componente">
                    <Primeiro />
                </Card>
            </div>

        </div>
    )
}