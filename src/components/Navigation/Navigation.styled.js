import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
// import { StyledContainer } from 'styles/GlobalStyles';

// export const NavStyledContainer = styled(StyledContainer)`
//   @media only screen and (min-width: 768px) and (max-width: 1279px) {
//     padding-left: 0;
//     padding-right: 0;
//   }
//   @media only screen and (min-width: 1280px) {
//     padding-top: 40px;
//     padding-bottom: 28px;
//   }
// `;

export const StyledNavBox = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  justify-content: center;
  overflow: visible;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    gap: 12px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  transition: all 0.3s;
  &:hover {
    filter: drop-shadow(0px 3px 10px rgba(255, 255, 255, 0.6));
  }
  &div {
    border-radius: 6px;
    width: 37px;
    height: 37px;
    overflow: hidden;
  }
  &.active {
    color: blue;
    border-radius: 5px;
    transition: all 0.3s;
    & div {
      background: white;
      border-radius: 6px;
      width: 37px;
      height: 37px;
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    }
  }

  & svg {
    fill: currentColor;
  }

  @media only screen and (min-width: 768px) {
    &.active {
      font-weight: 600;
      & div {
        width: 24px;
        height: 24px;
      }
    }

    & svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const StyledNavText = styled.span`
  color: ${({ theme }) => theme.colors.mainWhite};
  font-size: 18px;
  margin-left: 20px;
`;
