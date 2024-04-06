import styled from 'styled-components';

export const StyledBalanceDiv = styled.div`
  border-radius: 8px;
  background: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  padding: 8px 74px 12px 32px;
  width: 280px;
  height: 80px;

  @media only screen and (min-width: 768px) {
    padding: 8px 122px 12px 40px;
    width: 336px;
  }
  @media only screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const StyledBalanceTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;

export const StyledBalanceSupTitle = styled.h4`
  color: ${({ theme }) => theme.colors.subColor};
  font-family: 'Poppins';
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 12px;
`;
