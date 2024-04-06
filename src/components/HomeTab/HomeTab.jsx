import TransactionsList from './components/TransactionsList';
import styled from 'styled-components';
import mobileBg from '../../images/home-tab/mobile/mobile-bg.png';
import tabletBg from '../../images/home-tab/tablet/tablet-bg.png';
import desktopBg from '../../images/home-tab/desktop/desktop-bg.png';
import { CustomScroll } from 'react-custom-scroll';
import { useMediaQuery } from 'react-responsive';
import ButtonAddTransactions from './components/ButtonAddTransactions';

const Section = styled.section``;

const Scrollbar = ({ children, className }) => {
  return <CustomScroll className={className}>{children}</CustomScroll>;
};

const StyledScrollbar = styled(Scrollbar)`
  & > div > div > div > div > div.rcs-inner-handle {
    background-color: #734aef;
  }
`;

const HomeTab = () => {
  const isMobileView = useMediaQuery({ maxWidth: 767 });
  const isTabletView = useMediaQuery({ maxWidth: 1279 });

  const FixedContent = styled.div`
    background-image: ${isMobileView && `url(${mobileBg})`};
    background-image: ${isTabletView
      ? `url(${tabletBg})`
      : `url(${desktopBg})`};
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    position: relative;
  `;

  const ScrollableContent = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: ${!isTabletView ? 'end' : 'center'};
  `;

  return (
    <Section>
      <FixedContent>
        <StyledScrollbar>
          <ScrollableContent>
            <TransactionsList />
            <ButtonAddTransactions />
          </ScrollableContent>
        </StyledScrollbar>
      </FixedContent>
    </Section>
  );
};

export default HomeTab;
