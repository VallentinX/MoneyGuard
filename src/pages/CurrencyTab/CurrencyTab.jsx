import Currency from "../../components/Currency/Currency";
import React from "react";
import { useMediaQuery } from "react-responsive";

const CurrencyTab = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  return <>{!isDesktopOrLaptop && <Currency />}</>;
};

export default CurrencyTab;
