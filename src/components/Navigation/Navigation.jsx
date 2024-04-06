import React from "react";
import sprite from "../../images/sprite.svg";
import {
  NavList,
  NavStyledContainer,
  StyledNavLink,
  StyledNavText,
} from "./Navigation.style";
import { useMediaQuery } from "react-responsive";

const Navigation = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return (
    <>
      <nav>
        <NavStyledContainer>
          <NavList>
            <li>
              <StyledNavLink to="/">
                <div>
                  {" "}
                  <svg width="38" height="38">
                    <use href={`${sprite}#homepage`} />
                  </svg>
                </div>

                {isDesktopOrLaptop && <StyledNavText>Home</StyledNavText>}
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/statistics">
                <div>
                  <svg width="38" height="38">
                    <use href={`${sprite}#statistics`} />
                  </svg>
                </div>

                {isDesktopOrLaptop && <StyledNavText>Statistics</StyledNavText>}
              </StyledNavLink>
            </li>
            {isMobile ? (
              <li>
                <StyledNavLink to="/currency">
                  <div>
                    {" "}
                    <svg width="38" height="38">
                      <use href={`${sprite}#dollar`} />
                    </svg>
                  </div>
                </StyledNavLink>
              </li>
            ) : null}
          </NavList>
        </NavStyledContainer>
      </nav>
    </>
  );
};

export default Navigation;
