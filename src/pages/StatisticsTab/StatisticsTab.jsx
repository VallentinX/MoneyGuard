import Chart from 'components/Chart/Chart';
// import StatisticsDashboard from 'components/StatisticsDashboard/StatisticsDashboard';
// import StatisticsTable from 'components/StatisticsTable/StatisticsTable';

import { selectCategoriesSummary } from '../../redux/transactions/selectors';

import { useSelector } from 'react-redux';
import React from 'react';

import {
  StyledStatisticDivChart,
  StyledStatisticDivMain,
  StyledStatisticTitle,
} from './StatisticsTab.styled';

const StatisticsTab = () => {
  const categories = useSelector(selectCategoriesSummary);
  const categoriesValue = categories.map(({ total, type }) => {
    if (type !== 'INCOME') {
      if (total < 0) {
        return -total;
      }
      return total;
    }
    return '';
  });
  const dataDoughnut = {
    labels: [],
    datasets: [
      {
        data: [...categoriesValue],
        backgroundColor: [
          '#00ff3c',
          '#FED057',
          '#006825',

          '#FFD8D0',
          '#4A56E2',
          '#ffff00',
          '#6E78E8',
          '#81E1FF',
          '#C5BAFF',

          '#e0661b',

          '#FD9498',
        ],
        borderColor: [
          '#018f6e93',
          '#c5a04478',
          '#198d7389',

          '#b79993a2',
          '#333c9c8d',
          '#18876f94',
          '#4d54a39c',
          '#5695a98f',
          '#877fb09d',

          '#40a8929e',

          '#b7696ca4',
        ],
        borderWidth: 1,
        cutout: '70%',
      },
    ],
  };

  return (
    <StyledStatisticDivMain>
      <StyledStatisticDivChart
        style={{
          zIndex: '2',
        }}
      >
        <StyledStatisticTitle>Statistics</StyledStatisticTitle>
        <Chart dataDoughnut={dataDoughnut} categories={categories} />
      </StyledStatisticDivChart>
      <div
        style={{
          zIndex: '2',
        }}
      >
        {/* <StatisticsDashboard /> */}
        {/* <StatisticsTable categories={categories} dataDoughnut={dataDoughnut} /> */}
      </div>
    </StyledStatisticDivMain>
  );
};

export default StatisticsTab;
