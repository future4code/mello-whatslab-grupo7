import React from 'react';
import  './App.css';
import styled from 'styled-components';
import Messages from "./components/Messages";

const Container = styled.div`
  background-color: #d4edbb;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 600px;
  height: 100vh;
`
const AllMessagesContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-end;
  padding: 25px;
`
const FormData = styled.form`
  display: flex;
  justify-content: space-between;
  height: auto;
  padding: 10px;
  height: 40px;
  border-top: solid 1px #92ab79;
`
const InputUserName = styled.input`
width: 15%;
border-radius: 5px;
border: none;
padding: 5px;
font-size: 1rem;
outline: none;
`
const InputMessageText = styled.input`
  width: 63%;
  border: none; 
  border-radius: 5px;
  outline: none;
  font-size: 1rem;
  padding: 5px;
`
const SendButton = styled.button`
  width: 15%;
  font-size: 1rem;
  border: none;
  font-weight: bold;
  border-radius: 5px;
`

class App extends React.Component {

  render(){
    return(
      <Container>
        <AllMessagesContainer>
          olá
        </AllMessagesContainer>
        <FormData>
          <InputUserName type="text" placeholder="usuário" />
          <InputMessageText type="text" placeholder="mensagem" />
          <SendButton>Enviar</SendButton>
        </FormData>
        
      </Container>
      
    )
  }
}

export default App