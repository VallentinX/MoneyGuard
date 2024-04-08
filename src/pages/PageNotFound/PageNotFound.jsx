import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledBox, StyledLink, StyledTitle } from "./PageNotFound.style";

const PageNotFound = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();

  const handleMouseMove = (e) => {
    const offsetX = (e.nativeEvent.offsetX / e.target.offsetWidth - 0.5) * 20;
    const offsetY = (e.nativeEvent.offsetY / e.target.offsetHeight - 0.5) * 20;

    setX(offsetX);
    setY(offsetY);
  };
  return (
    <StyledBox
      onMouseMove={handleMouseMove}
      style={{
        textShadow: `${x}px ${y}px 10px rgba(255, 255, 255, 0.5)`,
      }}
    >
      <StyledTitle>
        Error $404.04
        <br />
        Money not found
      </StyledTitle>
      <Link to={"/"}>
        You can go to <StyledLink>home page</StyledLink> to find your money
      </Link>
    </StyledBox>
  );
};

export default PageNotFound;
