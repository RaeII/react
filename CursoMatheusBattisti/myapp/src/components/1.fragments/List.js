import Item from "./Item"
const list = () => {
    
    /**
     * Fragment <></>
     * 
     * - Não há necessidade de uma tag pai para exportar 
     */

    return (
        <>
            <h3> Lista dos meus dogs </h3>
            <ul>
                <Item dog='Connor'/>
                <Item dog='Pipi'/>
            </ul>
        </>
    )
}

export default list