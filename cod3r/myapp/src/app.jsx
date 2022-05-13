import React from 'react';//jsx é a mistura de html com java script
import Primeiro from './components/basicos/first'
import Card from './components/layout/card'
import './components/layout/card.css'
import './index.css'
import './app.css'
import ComParametro from './components/basicos/comParametros'
import ComFilhos from './components/basicos/comFilhos'
import Repeticao from './components/basicos/repeticao'
import Condicao from './components/basicos/condicaoPar'
import CondicaoIf from './components/basicos/condicaoIf'
import Pai from './components/comunicacao/direta/pai';
import Super from './components/comunicacao/indireta/super';
import Input from './components/form/input'
import Input2 from './components/form/input2'
import Contador from './components/contador/contador'
import Contador2 from './components/contador2/contador'
import MegaSena from './components/megasena/sorteador'
import MegaSena2 from './components/megasena2/sorteador'
//letra maiuscula relevante, para o importa
export default props =>
    //filhos -tags passando direto precisa ser passado por props.children

    <>  
        <Card titulo="Input" color="#e2df2b">
            <MegaSena2  >

            </MegaSena2 >
        </Card> 
        <Card titulo="Input" color="#e2df2b">
            <MegaSena >

            </MegaSena >
        </Card>
        <Card titulo="Input" color="#e2df2b">
            <Contador2 passo={10} >

            </Contador2 >
        </Card>

        <Card titulo="Input" color="#e2df2b">
            <Contador passo={2} >

            </Contador >
        </Card>
        <Card titulo="Input" color="#e2df2b">
            <Input2 >

            </Input2>
        </Card>
         <Card titulo="Input" color="#e2df2b">
            <Input >

            </Input>
        </Card>

         <Card titulo="Filho herdando do pai - comunicação Indireta" color="#8a2be2">
            <Super>
            </Super>
        </Card>

         <Card titulo="Filho herdando do pai - comunicação direta" color="#000080">
            <Pai sobrenome="prado"> {/*Pai vai chamar o filho*/}
            </Pai>
        </Card>

         <Card titulo="Condição If Par/impar" color="#000080">
            <CondicaoIf numero={12}> 
            </CondicaoIf>
        </Card>
         <Card titulo="Condição Par/impar">
            <Condicao numero={13}> 
            </Condicao>
        </Card>

        <Card titulo="Repetição">
            <Repeticao> 
            </Repeticao>
        </Card>

        <Card titulo="Primeiro componente">
            <Primeiro />
        </Card>

        <Card titulo="Com filhos">
            <ComFilhos>
                <ul>
                    <li>Connor</li>{/*Todas as tags são filhas de ComFilhos
                           um componente para outro*/}
                    <li>Pequeno</li>
                    <li>Pipi</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="Com parametros">
            
               <ComParametro
                titu="Titulo por parametro"
                subtitulo="Subtitulo por parametro" 
                 />
            <ComParametro
                titu="Ipa"
                subtitulo="Apa" />
            
        </Card>

    </>
// ComParametro ser chamado 2x Cada elemento é uma instancia então ele pode ser replicado
//quantas vezes quiser com dados diferentes