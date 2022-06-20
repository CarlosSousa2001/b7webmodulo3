import * as C from './componenteStyled/AppStyled'

const App = () => {

  return (
    <div>
    <C.Container colorFundo="green">
      <span>texto do componente</span>
      <C.botao bg="red">Botao grande</C.botao>
      <C.botao bg="yellow" small>botao pequeno</C.botao>
    </C.Container>
    </div>
  )
}
export default App;