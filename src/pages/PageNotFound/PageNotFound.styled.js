import styled from 'styled-components';
// import loginTablet from '../../images/login-bg/bg-login-tablet.webp';
// import loginDesktop from '../../images/login-bg/bg-login-web.webp';

export const StyledTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
`;

export const StyledBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url(${loginTablet});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 1280px) {
    background-image: url(${loginDesktop});
  }
`;

export const StyledLink = styled.span`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.incomeColor};
`;
