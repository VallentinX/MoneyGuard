import styled from "styled-components";

export const AddButton = styled.button`
  width: 44px;
  height: 44px;
  border: none;

  background-image: linear-gradient(to right, #ffc727, #9e40ba);
  color: white;
  position: fixed;
  border-radius: 22px;
  box-shadow: 1px 9px 15px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  bottom: 3vh;
  right: 5vw;
  z-index: 1;

  @media only screen and (min-width 769) {
    bottom: 40px;
    right: 40px;
  }
`;
