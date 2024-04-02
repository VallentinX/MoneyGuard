import styled from 'styled-components';

export const StyledChartP = styled.p`
  position: absolute;
  left: 50%;
  top: 53%;
  transform: translate(-50%, -50%);
  color: var(--white, #fbfbfb);
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
`;

export const StyledChartDiv = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  margin-top: 8px;
  padding: 0 auto;
  @media only screen and (min-width: 768px) {
    width: 336px;
    height: 336px;
    margin-top: 20px;
  }
  @media only screen and (min-width: 1280px) {
    width: 288px;
    height: 288px;
  }
`;
