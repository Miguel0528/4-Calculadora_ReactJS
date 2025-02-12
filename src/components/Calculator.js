import { useState } from "react";





function Calculator(){

    var [numero, definirNumero] = useState(0);





    return(
        <div>
            <p>{numero}</p>
            <br></br>
            <button onClick={() => definirNumero(numero + 1)}>Adicionar</button>
            <button onClick={() => definirNumero(numero = 0)}>Reiniciar</button>
        </div>
    );




}

export default Calculator;