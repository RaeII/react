import MyDogs from './MyDogs'


/**
 * - Utilizando props
 * - Imagem (carregadas pela pasta public)
 * 
 */

function listDogs() {
   
  const pipi = 'pipi'

  return (
    <>
      <MyDogs />
      <MyDogs dogName={pipi} img={'./images/dogCaramelo.png'} cor='caramelo'/>
    </>
  );
}

export default listDogs;