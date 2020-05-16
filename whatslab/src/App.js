import React from 'react';
import  './App.css';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #c0d7eb;
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
const MsgContainer = styled.div`
  background-color: ${props =>{
    if(props.side !== "right"){
      return "#ffffff"
    } else {
      return "#d5f5bc"
    }
  }};
  display: flex;
  flex-direction: column;
  max-width: 50%;
  border-radius: 5px;
  padding: 10px 10px;
  margin-bottom: 10px;
  text-align: ${props => props.side};
  align-self: ${props => {
    if(props.side === "right"){
      return 'flex-end'
    } else {
      return 'flex-start'
    }
  }};
`
const UserContainer = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
`



class App extends React.Component {
  state = {
    mensagensDoApp : [],
     valorInputUsuario: "",
     valorInputMensagem: ""
  };

  adicionaMensagem = (event) => {
    event.preventDefault()
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagemDoUsuario: this.state.valorInputMensagem
    };

    const novasMensagens = [...this.state.mensagensDoApp, novaMensagem];

    this.setState({ mensagensDoApp: novasMensagens, valorInputMensagem: "", valorInputUsuario: ""});

  };
  

  onChangeInputUsuario = (event) => {
    this.setState({valorInputUsuario: event.target.value});
  };

  onChangeInputMensagem = (event) => {
    this.setState({valorInputMensagem: event.target.value});
  };

  
  render(){

    let side
    let userStyle


    let listaMensagens = this.state.mensagensDoApp.map((msg, idx) => {
      if(msg.usuario === 'eu'){
        side = "right"
        return(
         <MsgContainer key={idx} side={side}>
          {msg.mensagemDoUsuario}
        </MsgContainer>
        )
      } else{
        side = "left"
        userStyle = <UserContainer>{msg.usuario}</UserContainer>
        return(
          <MsgContainer key={idx} side={side}>
            {userStyle}
            {msg.mensagemDoUsuario}
         </MsgContainer>
        )
      }
    })
 
     
    return(
      <Container>
        <AllMessagesContainer>
          {listaMensagens}
        </AllMessagesContainer>
        
        <FormData>
          <InputUserName 
          type="text" 
          placeholder="usuário" 
          value={this.state.valorInputUsuario}
          onChange={this.onChangeInputUsuario} />
          <InputMessageText 
          type="text" 
          placeholder="mensagem"
          value={this.state.valorInputMensagem}
          onChange={this.onChangeInputMensagem} />
          <SendButton onClick={this.adicionaMensagem}>Enviar</SendButton>
        </FormData>
        
        
      </Container>
      
    )
  }
}

export default App