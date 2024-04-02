// import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
// import MobileList from 'components/TransactionsList/MobileList';
// import TransactionsList from 'components/TransactionsList/TransactionsList';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { StyledHomeTabContainer } from './HomeTab.styled';

const HomeTab = () => {
  const isTable = useMediaQuery({
    query: '(min-width:768px)',
  });
  return (
    <StyledHomeTabContainer>
      {isTable ? <TransactionsList /> : <MobileList />}
      <ButtonAddTransactions />
    </StyledHomeTabContainer>
  );
};

export default HomeTab;
