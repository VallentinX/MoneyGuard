import styled from "styled-components";

export const StyledSelectMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px 0;
  min-width: 280px;
  max-width: 280px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
    padding: 20px 0 0 0;
    min-width: 192px;
    max-width: 192px;
    margin: 0;
  }
  @media only screen and (min-width: 1280px) {
    margin-top: 60px;
    min-width: 213px;
    max-width: 213px;
    gap: 32px;
  }
`;
export const styles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    minWidth: 280,
    maxWidth: 280,
    minHeight: 50,
    borderRadius: "8px",
    background: " rgba(133, 93, 175, 0.13) ",
    "@media only screen and (min-width:768px)": {
      ...styles["@media only screen and (min-width: 768px)"],
      minWidth: 160,
      maxWidth: 160,
    },
    "@media only screen and (min-width:1280px)": {
      ...styles["@media only screen and (min-width: 1280px)"],
      minWidth: 181,
      maxWidth: 181,
    },
  }),
  option: (styles, state) => ({
    ...styles,
    backgroundColor: state.isSelected ? "#ffffff1a" : "",
    color: state.isSelected ? "#ff868d" : "",
    ":hover": {
      background: "#ffffff1a",
      color: "#ff868d",
    },
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    background:
      "linear-gradient(0deg, #572692cf 0%, #50309ae6 43.14%, #633f9fe6 73.27%, #4c2e6dcc 120.03%)",
    border: "none ",
    borderRadius: "8px ",
  }),
  menuList: (base) => ({
    ...base,

    "::-webkit-scrollbar": {
      width: "4px",
      height: "0px",
    },
    "::-webkit-scrollbar-track": {
      background: "#9065d1",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#6b438c",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#330a65",
    },
  }),
};
