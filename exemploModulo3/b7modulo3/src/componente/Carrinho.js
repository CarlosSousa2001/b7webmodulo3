import React, { Component } from 'react'
import styled from 'styled-components'

const AreaCarrinho = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: 2px solid red;
width: 800px;
height: 500px;
`
const CarrinhoBorder = styled.div`
text-align: center;
width: 250px;
height: 200px;
border: 1px solid black;
`  
export default class Carrinho extends Component {
  render() {
  const MostrarValores = this.props.produtosCarrinho.map((item, index) => {
    return <CarrinhoBorder>
            <p>{item.Nome} R${item.Preco}</p>
            <button onClick={() => this.props.ApagarButton(index)}>Apagar</button>
         </CarrinhoBorder>
  })
    return (
        <AreaCarrinho>
           {MostrarValores}
        </AreaCarrinho>
    )
  }
}
