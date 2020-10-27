import './App.css'
import React from 'react'

import Aleatorio from './components/basico/Aleatorio'
import ComParametro from './components/basico/ComParametro'
import Fragmento from './components/basico/Fragmento'
import Primeiro from './components/basico/Primeiro'
import Card from './components/layout/Card'
import Familia from './components/basico/Familia'

export default props => {
    return (
        <div className='App'>

            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo="#05 - Card Familia" color="#227">
                    <Familia sobrenome="Fernandes"/>
                </Card>

                <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card>


                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento></Fragmento>
                </Card>

                <Card titulo="#02 - Com Parametro" color="#E8B71A">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Luizinho"
                        nota={9.3} />
                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#588C73">
                    <Primeiro />
                </Card>
            </div>

        </div>
    )
}