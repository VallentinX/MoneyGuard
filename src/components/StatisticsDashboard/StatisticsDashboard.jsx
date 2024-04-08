import styled from "styled-components";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchTransactionsSummary } from "../../redux/transactions/operations";

const months = [
  {
    value: 1,
    label: "January",
  },
  {
    value: 2,
    label: "February",
  },
  {
    value: 3,
    label: "March",
  },
  {
    value: 4,
    label: "April",
  },
  {
    value: 5,
    label: "May",
  },
  {
    value: 6,
    label: "June",
  },
  {
    value: 7,
    label: "July",
  },
  {
    value: 8,
    label: "August",
  },
  {
    value: 9,
    label: "September",
  },
  {
    value: 10,
    label: "October",
  },
  {
    value: 11,
    label: "November",
  },
  {
    value: 12,
    label: "December",
  },
];

const years = [
  {
    value: 2020,
    label: "2020",
  },
  {
    value: 2021,
    label: "2021",
  },
  {
    value: 2022,
    label: "2022",
  },
  {
    value: 2023,
    label: "2023",
  },
  {
    value: 2024,
    label: "2024",
  },
];

function getCurrentDate() {
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  return { month, year };
}

const selectStyling = {
  container: (styles) => ({
    ...styles,
    width: "100%",
  }),
  control: (styles, state) => ({
    ...styles,
    backgroundColor: "rgba(74,86,226,0.1)",
    borderColor: state.isFocused ? "white" : "rgba(255,255,255,0.6)",
    "&:hover": {
      borderColor: "white",
    },
    boxShadow: "none",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "white",
  }),
  option: (styles, state) => ({
    ...styles,
    backgroundColor: state.isSelected && "rgba(255,255,255,0.1)",
    color: state.isSelected && "rgb(255,134,141)",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.1)",
    },
  }),
  menu: (styles) => ({
    ...styles,
    background:
      "linear-gradient(to top, rgb(83, 61, 186), rgb(80, 48, 154), rgb(106, 70, 165), rgb(133,93,175))",
  }),
};

const Container = styled.div`
  display: flex;
  padding-bottom: 20px;
  width: 100%;
  gap: 32px;

  @media screen and (max-width: 768px) {
    gap: 20px;
    flex-direction: row;
  }

  @media screen and (max-width: 320px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const StatisticsDashboard = () => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const dispatch = useDispatch();
  const currentDate = getCurrentDate();

  useEffect(() => {
    const date = getCurrentDate();
    setMonth(date.month);
    setYear(date.year);
  }, []);

  useEffect(() => {
    if (month.length > 0 && year.length > 0) {
      //   console.log(
      //     `transactions summary for the period ${month} ${year} has been requested`
      //   );
      dispatch(fetchTransactionsSummary({ month, year }));
    }
  }, [month, year, dispatch]);

  return (
    <Container>
      <Select
        options={months}
        styles={selectStyling}
        defaultValue={() =>
          months.find((item) => item.value === currentDate.month)
        }
        onChange={(newMonth) => {
          setMonth(newMonth.value);
        }}
      />
      <Select
        options={years}
        styles={selectStyling}
        defaultValue={() =>
          years.find((item) => item.value === currentDate.year)
        }
        onChange={(newYear) => {
          setYear(newYear.value);
        }}
      />
      {/* <Test /> */}
    </Container>
  );
};

export default StatisticsDashboard;
