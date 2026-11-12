import React from "react";

class Botao extends React.Component{
    render() {
        const estaAtivo = true
        const styles = {
            backgroundColor: estaAtivo
        }
        return (
            <button style={{backgroundColor: "purple"}}>
            Botão
            </button>
        )
    }
}
export default Botao