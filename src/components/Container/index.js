import React from 'react';
import { Styled } from './styles';

function Container({ children, title, size }) {
  switch(size) {
    case "lg":
      return <div>
        <Styled.ContainerLG>
          <Styled.Title>
            {title}
          </Styled.Title>
          {children}
        </Styled.ContainerLG>
      </div>
    case "sm":
      return <div>
        <Styled.ContainerSM>
          <Styled.Title>
            {title}
          </Styled.Title>
          {children}
        </Styled.ContainerSM>
      </div>
    default:
      break;
  }
}

export default Container;