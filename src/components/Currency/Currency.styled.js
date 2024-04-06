import styled from 'styled-components';

export const StyledTableWrapper = styled.div`
  position: relative;
  background-color: rgba(74, 86, 226, 0.1);
  width: 320px;
  height: 220px;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    min-width: 336px;

    margin: 0;
  }
  @media only screen and (min-width: 1280px) {
    width: 100%;
    max-height: 395px;
    height: 350px;
  }
`;

export const StyledGraphWrapper = styled.div`
  position: relative;
  width: 100%;

  top: -6px;
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #563eaf;
    border: solid 1px #ff868d;
    left: 39px;
    top: 21px;
    z-index: 1000;
  }

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #563eaf;
    border: solid 1px #ff868d;
    left: 242px;
    top: -2px;
    z-index: 1000;
  }
  @media only screen and (min-width: 768px) {
    &::before {
      left: 42px;
      top: 21px;
    }
    &::after {
      left: 254px;
      top: -2px;
    }
  }
  @media only screen and (min-width: 1280px) {
    &::before {
      left: 58px;
      top: 29px;
      width: 9px;
      height: 9px;
    }
    &::after {
      left: 364px;
      top: -4px;
      width: 9px;
      height: 9px;
    }
    top: 26px;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  font-size: 16px;
  line-height: normal;
  border-collapse: collapse;
  padding-left: 20px;
  @media only screen and (min-width: 1280px) {
  }
`;
export const StyledThead = styled.thead`
  background: rgba(255, 255, 255, 0.2);
  font-weight: 600;
  @media only screen and (min-width: 1280px) {
  }
`;

export const StyledTh = styled.th`
  padding-top: 13px;
  padding-bottom: 13px;
  width: 33%;
  padding-left: 20px;
  @media only screen and (min-width: 1280px) {
    &:first-child {
      padding-left: 62px;
    }
    &:last-child {
      padding-right: 111px;
    }
  }
`;

export const StyledTd = styled.td`
  padding-top: 8px;
  padding-bottom: 8px;
  width: 30%;
  padding-left: 25px;
  &:last-child {
    padding-left: 46px;
  }
  @media only screen and (min-width: 1280px) {
    text-align: center;
    &:first-child {
      padding-left: 62px;
    }
    &:last-child {
      padding-right: 131px;
    }
  }
`;

export const StyledWave = styled.svg`
  position: absolute;
  width: 100%;
`;
export const StyledGradientWave = styled.svg`
  width: 100%;
  position: absolute;
  top: 6px;
  @media only screen and (min-width: 1280px) {
    top: 20px;
  }
`;

export const StyledGraphUsd = styled.div`
  position: absolute;
  left: 48px;
  top: 8px;
  color: var(--dashboard-text, #ff868d);
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
`;
export const StyledGraphEur = styled.div`
  position: absolute;
  left: 352px;
  top: -27px;
  color: var(--dashboard-text, #ff868d);
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
`;
