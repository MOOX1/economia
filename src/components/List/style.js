import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  `;
export const Content = styled.div`
  width: 65vw;
  background-color: white;
  height: 300px;
  border-radius: 5px;
  padding: 10px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
  display:none;
}
`;

export const TitleUl = styled.ul`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #00000026;
  padding: 10px;

  li {
    color: black;
  }

  .valor {
    text-align: left;
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #00000026;
  padding: 10px;
  flex-wrap: wrap;
  .valor {
    text-align: left;
  }
  `

export const Li = styled.li`
  list-style: none;
  color: #0000007d;
  text-align: center;
  min-width: 100px;
`;
