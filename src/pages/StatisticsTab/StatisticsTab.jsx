import Chart from "components/Chart/Chart";
import styled from "styled-components";
import StatisticsDashboard from "components/StatisticsDashboard/StatisticsDashboard";
import StatisticsTable from "components/StatisticsTable/StatisticsTable";
import { useMediaQuery } from "react-responsive";

const Section = styled.section`
  height: 100vh;
`;

const LeftSide = styled.div``;

const StatisticsTab = () => {
  const isMobileView = useMediaQuery({ maxWidth: 767 });
  const isTabletView = useMediaQuery({ maxWidth: 1279 });

  const Container = styled.div`
    display: flex;
    flex-direction: ${isMobileView ? "column" : "row"};
    padding: ${isMobileView ? "8px 20px 45px" : "0 32px 13px"};
    padding: ${!isTabletView && "32px 16px 46px 0"};
    gap: ${!isMobileView && "32px"};
    justify-content: space-between;
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
    max-width: 395px;
  `;

  return (
    <Section>
      <Container>
        <LeftSide>
          <Title>Statistics</Title>
          <Chart />
        </LeftSide>
        <RightSide>
          <StatisticsDashboard />
          <StatisticsTable />
        </RightSide>
      </Container>
    </Section>
  );
};

export default StatisticsTab;
