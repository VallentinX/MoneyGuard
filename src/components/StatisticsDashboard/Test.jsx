import { useEffect, useState } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { fetchTransactionsSummary } from "../../redux/transactions/operations";
import styled from "styled-components";
// import { useMediaQuery } from "react-responsive";

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

const Container = styled.div``;

const Test = () => {
  // const isMobileView = useMediaQuery({ maxWidth: 767 });
  // const isTabletView = useMediaQuery({ maxWidth: 1279 });

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
    if (month.toString().length > 0 && year.toString().length > 0) {
      console.log(
        `transactions summary for the period ${month} ${year} has been requested`
      );
      dispatch(fetchTransactionsSummary({ month, year }));
    }
  }, [month, year, dispatch]);

  return (
    <Container>
      <Select
        options={months}
        // styles={selectStyling}
        defaultValue={() =>
          months.find((item) => item.value === currentDate.month)
        }
        onChange={(newMonth) => {
          setMonth(newMonth.value);
        }}
      />
      <Select
        options={years}
        // styles={selectStyling}
        defaultValue={() =>
          years.find((item) => item.value === currentDate.year)
        }
        onChange={(newYear) => {
          setYear(newYear.value);
        }}
      />
    </Container>
  );
};

export default Test;
