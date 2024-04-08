import Chart from "components/Chart/Chart";
import styled from "styled-components";
import { CustomScroll } from "react-custom-scroll";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesSummary } from "../../redux/transactions/selectors";
import StatisticsDashboard from "components/StatisticsDashboard/StatisticsDashboard";
import StatisticsTable from "components/StatisticsTable/StatisticsTable";
import { useMediaQuery } from "react-responsive";

const Section = styled.section`
  height: 100vh;
`;

const Scrollbar = ({ children, className }) => {
  return <CustomScroll className={className}>{children}</CustomScroll>;
};

const StyledScrollbar = styled(Scrollbar)`
  & > div > div > div > div > div.rcs-inner-handle {
    background-color: #734aef;
  }
`;

const LeftSide = styled.div``;

function generateRandomHexColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return "#" + "0".repeat(6 - randomColor.length) + randomColor;
}

const StatisticsTab = () => {
  const isMobileView = useMediaQuery({ maxWidth: 767 });
  const isTabletView = useMediaQuery({ maxWidth: 1279 });

  const Container = styled.div`
    display: flex;
    flex-direction: ${isMobileView ? "column" : "row"};
    padding: ${isMobileView ? "45px 20px 40px" : "20px 32px 13px"};
    padding: ${!isTabletView && "32px 16px 46px 69px"};
    gap: ${!isMobileView && "32px"};
    max-width: 800px;
  `;

  const Title = styled.h2`
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    padding-bottom: ${isMobileView ? "8px" : "20px"};
  `;

  const RightSide = styled.div`
    width: 100%;
    padding-top: ${!isMobileView && "20px"};
  `;

  const [categories, setCategories] = useState([]);

  const categoriesSummary = useSelector(selectCategoriesSummary);

  useEffect(() => {
    if (categoriesSummary.length > 0) {
      const categorieList = categoriesSummary.map((categorie) => {
        const color = generateRandomHexColor();
        const name = categorie.name;
        const total = categorie.total;
        return { name, total, color };
      });
      setCategories(categorieList);
    }
  }, [categoriesSummary]);

  return (
    <StyledScrollbar>
      <Section>
        <Container>
          <LeftSide>
            <Title>Statistics</Title>
            <Chart categories={categories} />
          </LeftSide>
          <RightSide>
            <StatisticsDashboard />
            {/* <Test /> */}
            <StatisticsTable categories={categories} />
          </RightSide>
        </Container>
      </Section>
    </StyledScrollbar>
  );
};

export default StatisticsTab;
