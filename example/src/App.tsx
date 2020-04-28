import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
  color: red;
`;

export interface TestComponentProps {
  text?: string;
}

export const TestComponent: React.FC<TestComponentProps> = ({ text }) => (
  <Wrapper>{text ? text : 'Test Component'}</Wrapper>
);


const StyledDiv = styled.div`
  padding: 10px;
  background-color: blue;
  color: white;
`;

class App extends Component {
  render() {
    return (
      <div>
        <TestComponent text="Styled Component from React library" />
        <StyledDiv>Example App styled component</StyledDiv>
      </div>
    );
  }
}

export default App;
