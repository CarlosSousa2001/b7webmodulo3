import styled from 'styled-components'

export const Container = styled.div`
display: flex;
margin: 0 auto;
width: 600px;
background-color: ${(props)=> props.colorFundo};
color: white;
padding: 20px;
span{ 
    color: aqua;
}
@media (max-width: 500px) {
    background-color: blue;
    flex-direction: column;
}
`
export const botao = styled.button`
font-size: ${(props) => props.small ? '15px' : '30px' };
background-color: ${(props) => props.bg};
`