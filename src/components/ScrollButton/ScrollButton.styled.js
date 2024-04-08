import styled from 'styled-components';

export const Button = styled.div`
  opacity: ${props => props.$opacity};
  position: fixed;
  bottom: 21vh;
  right: 4.5vw;
  height: 20px;
  font-size: 3rem;
  z-index: 100;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s;
  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
`;
