import React, { useState, useEffect, useCallback } from 'react';
import {
  AccountName,
  DividerImg,
  ExitText,
  HeaderInfo,
  LogoBox,
  LogoImg,
  LogoName,
  LogoutBtn,
  LogoutImg,
  LogoutName,
  OverlayStyle,
  ModalWindowStyle,
  ConfirmationMessage,
  LogOutButtonStyle,
  CancelButtonStyle,
  LogoutLogoBox,
  StyledHeaderContainer,
} from './Header.styled';
import logoMoneyGuard from '../../images/logo_money_guard.svg';
import exitIcon from '../../images/exit.svg';
import dividerIcon from '../../images/straight_line.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { useMediaQuery } from 'react-responsive';
import { logoutThunk } from 'redux/auth/operations';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const userData = useSelector(selectUser);
  const email = userData?.username || 'name.surname';
  const index = email.indexOf('@');
  const nameFromEmail = email.slice(0, index);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const disableBodyScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const enableBodyScroll = useCallback(() => {
    document.body.style.overflow = 'auto';
  }, []);

  const handleCancel = () => {
    setShowLogoutConfirmation(false);
    enableBodyScroll();
  };
  const handleEscapeKey = useCallback(
    e => {
      if (e.key === 'Escape') {
        setShowLogoutConfirmation(false);
        enableBodyScroll();
      }
    },
    [enableBodyScroll]
  );

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
    disableBodyScroll();
    document.addEventListener('keydown', handleEscapeKey);
  };

  const confirmLogout = () => {
    dispatch(logoutThunk());
    setShowLogoutConfirmation(false);
    enableBodyScroll();
    document.removeEventListener('keydown', handleEscapeKey);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handleEscapeKey]);

  return (
    <>
      <header>
        <StyledHeaderContainer>
          <Link to="/">
            <LogoBox>
              <LogoImg src={logoMoneyGuard} alt="logo" />
              <LogoName>Money Guard</LogoName>
            </LogoBox>
          </Link>
          <HeaderInfo>
            <AccountName>{nameFromEmail}</AccountName>
            {isDesktopOrLaptop && (
              <DividerImg src={dividerIcon} alt="divider-icon" />
            )}
            <LogoutBtn onClick={handleLogout}>
              <img src={exitIcon} alt="exit" />
              {isDesktopOrLaptop && <ExitText>Exit</ExitText>}
            </LogoutBtn>
          </HeaderInfo>
        </StyledHeaderContainer>
      </header>

      {showLogoutConfirmation && (
        <OverlayStyle>
          <ModalWindowStyle>
            <LogoutLogoBox>
              <LogoutImg src={logoMoneyGuard} alt="logo" />
              <LogoutName>Money Guard</LogoutName>
            </LogoutLogoBox>
            <ConfirmationMessage>
              Are you sure you want to logout?
            </ConfirmationMessage>
            <div>
              <LogOutButtonStyle onClick={confirmLogout}>
                Logout
              </LogOutButtonStyle>
              <CancelButtonStyle onClick={handleCancel}>
                Cancel
              </CancelButtonStyle>
            </div>
          </ModalWindowStyle>
        </OverlayStyle>
      )}
    </>
  );
};

export default Header;
