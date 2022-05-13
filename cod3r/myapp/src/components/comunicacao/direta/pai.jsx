import React from 'react';

import Filho from './filho';

 export default props =>
    <div>
        <Filho sobrenome="Zeferino" > Israel</Filho>
        <Filho sobrenome={props.sobrenome} > Rael</Filho>{/*Pegar as propiedade do componente*/}
        <Filho {...props} > Vivi</Filho>{/*Pegar as propiedade do componente*/}
    </div>