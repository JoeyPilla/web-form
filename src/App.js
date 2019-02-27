import React, { Component } from 'react';
import Form from './components/form';
import styled from 'styled-components';
class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Form />
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
