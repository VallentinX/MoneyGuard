import styled from "styled-components";
import { StyledContainer } from "../../styles/GlobalStyles";

export const StyledDashBoardContainer = styled(StyledContainer)`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    padding: 0;
    justify-content: space-between;
    margin-bottom: 20px;

    &::before {
      content: "";
      width: 330px;
      height: 333px;
      border-radius: 333px;
      background: #b223c4;
      position: absolute;
      left: 420px;
      top: 600px;

      filter: blur(150px);
    }
  }
  @media only screen and (min-width: 1280px) {
    flex-direction: column;
    max-width: 480px;
    padding: 0;
    margin: 0;
    height: calc(100vh - 70px);
    justify-content: space-between;
    gap: 32px;
    border-right: 1px solid ${({ theme }) => theme.colors.subColor};
    &::after {
      content: "";
      width: 285px;
      height: 265.381px;
      top: 430px;
      left: calc(100vw - 400px);
      z-index: -1;
      position: absolute;
      border-radius: 362.381px;
      background: linear-gradient(220deg, #cd54eb 28.31%, #9902ff 66.76%);
      filter: blur(150px);
    }
  }
`;

export const StyledDashBoardBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  gap: 12px;

  margin-top: 12px;
  margin-bottom: 32px;
  @media only screen and (min-width: 768px) {
    gap: 28px;
    margin-bottom: 0;
    margin-top: 40px;
    align-items: baseline;
  }
  @media only screen and (min-width: 1280px) {
    &::before {
      content: "";
      width: 739px;
      height: 500px;
      border-radius: 366.105px;
      background: #5e3ede;

      filter: blur(200px);
      z-index: -1;

      position: absolute;
      left: -30px;
      top: 100px;
    }
    &::after {
      content: "";
      width: 363px;
      height: 366px;
      border-radius: 366px;
      background: #2f2da3;
      z-index: -1;
      filter: blur(150px);
      position: absolute;
      left: calc(100vw - 450px);
      top: 80px;
    }
  }
`;

export const StyledDeskContainer = styled(StyledContainer)`
  @media only screen and (max-width: 767px) {
    padding-left: 0;
    padding-right: 0;
  }
  @media only screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 480px auto;
    padding-left: 0;
    padding-right: 0;
    gap: 69px;
  }
`;
