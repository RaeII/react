
const helloWord = ({dogName,img,cor}) => {
    var image =''
    var corDog =''
    if(img)  image = <img src={img} alt={dogName}/>
    if(cor)  corDog = `com a cor ${cor}`
    return (
        <div>
            <p>Eu tenho um dog chamado {dogName} {cor}</p>
            {image}
        </div>
    )
}

export default helloWord