import Item from "./Item"
const item = ({dog}) => {
    
    /**
     * Fragment <></>
     * 
     * - Não há necessidade de uma tag pai para exportar 
     */

    return (
        <>
          <li> {dog} </li>
        </>
    )
}

export default item