import styled from "styled-components";


export const Container = styled.div`
  margin-top: -50px;
  background-color: none;
  z-index: 999;

  @media (max-width: 599px) {
    margin-top: ${(props) => `${props.margin}px`};
  }
`;

export const Content = styled.div`
  background-color: white;
  width: 300px;
  height: 100px;
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
`;

export const Total = styled.div`
  text-align: center;
`;

export const icon = styled.div``

export const totalTitle = styled.h1``;

export const Title = styled.p``;
