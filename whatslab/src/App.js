import React from 'react';
import  './App.css';
import styled from 'styled-components'

const Container = styled.div`
  max-width: 600px;
  height: 100vh;
  border: 1px solid black;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: #e5ddd5;
`
const AllMessagesContainer = styled.div`
  background-color: #fff;
`

class App extends React.Component {

  render(){
    return(
      <Container>
        <AllMessagesContainer>
          
        </AllMessagesContainer>
        
      </Container>
    )
  }
}

export default App