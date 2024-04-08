import styled from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  selectCategoriesSummary,
  selectPeriodTotal,
} from "../../redux/transactions/selectors";
import { useMediaQuery } from "react-responsive";

ChartJS.register(ArcElement, Tooltip, Legend);

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ChartContainer = styled.div`
  padding-bottom: 32px;
  position: relative;
  width: fit-content;
`;

const options = {
  borderWidth: 0,
  cutout: "72%",
};

const plugins = [
  {
    id: "shadow",
    beforeDraw: function (chart) {
      const { ctx } = chart;

      ctx.shadowColor = "rgba(0,0,0,1)";
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 8;
    },
  },
];

const colors = [
  "#fed057",
  "#ffd8d0",
  "#fd9498",
  "#c5baff",
  "#6e78e8",
  "#4a56e2",
  "#81e1ff",
  "#24cca7",
  "#00ad84",
];

const Chart = () => {
  const periodTotal = useSelector(selectPeriodTotal);
  const transactionCategories = useSelector(selectCategoriesSummary);

  let categories = [];

  if (periodTotal > 0) {
    categories = transactionCategories.map((transactionCategorie) => {
      const name = transactionCategorie.name;
      const total = transactionCategorie.total;
      const color = colors[transactionCategories.indexOf(transactionCategorie)];
      return {
        name,
        total,
        color,
      };
    });
  }

  const categoriesTotal = categories.map((categorie) => {
    return categorie.total;
  });

  const categoriesColor = categories.map((categorie) => {
    return categorie.color;
  });

  const isMobileView = useMediaQuery({ maxWidth: 767 });
  const isTabletView = useMediaQuery({ maxWidth: 1279 });

  const data = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
    ],
  };

  if (periodTotal === 0) {
    data.datasets[0].data = [1];
    data.datasets[0].backgroundColor = ["#00000026"];
  } else {
    data.datasets[0].data = categoriesTotal;
    data.datasets[0].backgroundColor = categoriesColor;
  }

  const StyledChart = styled.div`
    width: ${isMobileView ? "280px" : "336px"};
    width: ${!isTabletView && "288px"};
    height: ${isMobileView ? "280px" : "336px"};
    height: ${!isTabletView && "288px"};
  `;

  const InsideChartText = styled.span`
    position: absolute;
    top: ${isMobileView ? "135px" : "165px"};
    top: ${!isTabletView && "140px"};
    left: ${isMobileView ? "50px" : "80px"};
    left: ${!isTabletView && "55px"};
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    width: 180px;
    text-align: center;
  `;

  return (
    <Container>
      <ChartContainer>
        <StyledChart>
          <Doughnut data={data} options={options} plugins={plugins} />
        </StyledChart>
        <InsideChartText>${periodTotal.toFixed(2)}</InsideChartText>
      </ChartContainer>
    </Container>
  );
};

export default Chart;
