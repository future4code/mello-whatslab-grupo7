import React from 'react';
import styled from 'styled-components'

const ContainerMessages = styled.div `
    background-color: white;
    border: 1px solid black;
    display: flex;
    width: 500px;
    height: 40px;

`

export class Messages extends React.Component {

    render() {
        return(
            <ContainerMessages>

            </ContainerMessages>
        )
    }
}

export default Messages