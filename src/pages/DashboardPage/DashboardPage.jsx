import Balance from 'components/Balance/Balance';

import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Currency from 'components/Currency/Currency';
import { useMediaQuery } from 'react-responsive';
import {
  StyledDashBoardBox,
  StyledDashBoardContainer,
  StyledDeskContainer,
} from './DashboardPage.styled';
import Loader from 'components/Loader/Loader';
import ScrollButton from 'components/ScrollButton/ScrollButton';

const DashboardPage = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <>
      <Header />
      <StyledDeskContainer>
        <StyledDashBoardContainer>
          <StyledDashBoardBox>
            <Navigation />
            <Balance />
          </StyledDashBoardBox>
          {isTablet && <Currency />}
        </StyledDashBoardContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ScrollButton />
      </StyledDeskContainer>
    </>
  );
};

export default DashboardPage;
