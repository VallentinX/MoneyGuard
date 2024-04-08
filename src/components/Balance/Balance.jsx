import React from "react";
import {
  StyledBalanceDiv,
  StyledBalanceSupTitle,
  StyledBalanceTitle,
} from "./Balance.styled";
import { useSelector } from "react-redux";
import { selectBalance } from "../../redux/auth/selectors";

const Balance = () => {
  const balance = useSelector(selectBalance);
  return (
    <StyledBalanceDiv>
      <StyledBalanceSupTitle>Your Balance</StyledBalanceSupTitle>
      <StyledBalanceTitle>&#8364;{balance.toFixed(2)}</StyledBalanceTitle>
    </StyledBalanceDiv>
  );
};

export default Balance;
