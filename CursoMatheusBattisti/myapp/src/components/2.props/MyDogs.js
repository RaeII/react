/**
 * - Carregando modulo de css e estilizando em um componente
 * - Props dinamicas apenas pelo nome
 * - Condição para carregar um elemento
 * - PropTypes: tipagem de props
 * -   
 */
import MyDogs from '../style/MyDogs.module.css'
import PropTypes from 'prop-types'

function MyDoguinhos({dogName,img,cor}){
    let image =''
    let corDog =''
    if(img)  image = <img className={MyDogs.imgDog} src={img} alt={dogName}/>
    if(cor)  corDog = `com a cor ${cor}`
    return (
        <div className={MyDogs.containerDog}>
            <p>Eu tenho um dog chamado {dogName} {corDog}</p>
            {image}
        </div>
    )
}

//Não apareceu no console
MyDoguinhos.protoType = {
    dogName: PropTypes.number.isRequired,
    img: PropTypes.number,
    cor: PropTypes.array,
}

MyDoguinhos.defaultProps = {
    dogName:'NOME NÃO FORNECIDO'
}

export default MyDoguinhos