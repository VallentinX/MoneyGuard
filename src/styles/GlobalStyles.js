import styled, { createGlobalStyle } from 'styled-components';
import fontRegular from '../fonts/Poppins-Regular.ttf';
import fontBold from '../fonts/Poppins-Bold.ttf';
import fontSemiBold from '../fonts/Poppins-SemiBold.ttf';

export const GlobalStyles = createGlobalStyle`
 
 @font-face {
  font-family: 'Poppins';
  font-weight: 400 600 700;
  src: url(${fontRegular}),url(${fontSemiBold}), url(${fontBold}) ;
}
body{
font-family: 'Poppins', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
}

p:last-child {
  margin-bottom: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}


body {
    background: ${({ theme }) => theme.backgrounds.backgroundGradient};
    color: ${({ theme }) => theme.colors.mainWhite};
    @media only screen and (max-width: 767px) {
    }
}
 
`;

export const StyledContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;

  overflow: hidden;
  margin-right: auto;
  min-width: 320px;
  max-width: 425px;

  @media only screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 1279px;
  }
  @media only screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
    max-width: 1280px;
  }
  @media only screen and (max-width: 767px) {
    &::after {
      content: '';
      z-index: -1;
      width: 100%;
      height: 454px;
      border-radius: 901px;
      background: rgba(93, 44, 214, 40%);
      filter: blur(100px);
      position: fixed;
      left: -250px;
      top: 20px;
    }

    &::before {
      content: '';
      width: 362px;
      height: 200px;
      border-radius: 362.381px;
      background: linear-gradient(220deg, #9b467a 28.31%, #581684 66.76%);
      filter: blur(121.80889129638672px);
      position: fixed;
      bottom: 0px;
      right: -40px;
      z-index: -1;
    }
  }
  @media only screen and (min-width: 768px) {
    &::before {
      content: '';
      width: 90%;
      height: 201px;
      border-radius: 366.105px;
      background: #432f92;

      filter: blur(200px);
      z-index: -1;

      position: absolute;
      right: 30px;
      top: 150px;
    }
  }
  @media only screen and (min-width: 1280px) {
    &::before {
      display: none;
    }
  }
`;
