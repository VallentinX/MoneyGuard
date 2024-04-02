import React from 'react';
import {
  StyledTableTr,
  StyledTableTd,
  StyledTableTh,
  StyledTableTrHead,
  StyledTableBody,
  StyledTableH3,
  StyledTableDiv,
} from './StatisticsTable.styled';
import { useSelector } from 'react-redux';

import {
  selectExpenseSummary,
  selectIncomeSummary,
} from '../../redux/transactions/selectors';
import PropTypes from 'prop-types';

const StatisticsTable = ({ categories, dataDoughnut }) => {
  const income = useSelector(selectIncomeSummary);
  const expense = useSelector(selectExpenseSummary);
  return (
    <StyledTableDiv>
      {categories.length > 1 ? (
        <table>
          <thead>
            <StyledTableTrHead>
              <StyledTableTh>Category</StyledTableTh>
              <StyledTableTh>Sum</StyledTableTh>
            </StyledTableTrHead>
          </thead>

          <StyledTableBody>
            {categories.map(({ name, total, type }, index) => {
              if (type !== 'INCOME') {
                return (
                  <StyledTableTr key={name}>
                    <StyledTableTd>
                      <div
                        style={{
                          backgroundColor: `${dataDoughnut.datasets[0].backgroundColor[index]}`,
                          width: '24px',
                          height: '24px',
                        }}
                      ></div>
                      {name}
                    </StyledTableTd>
                    <td
                      style={{
                        fontSize: '14px',
                      }}
                    >
                      {total < 0 ? -total : total}
                    </td>
                  </StyledTableTr>
                );
              }
              return '';
            })}
          </StyledTableBody>
          <tfoot>
            <StyledTableTr
              style={{
                border: 'none',
              }}
            >
              <td>Expenses:</td>
              <td
                style={{
                  color: '#FF868D',
                }}
              >
                {-expense}
              </td>
            </StyledTableTr>
            <StyledTableTr
              style={{
                border: 'none',
              }}
            >
              <td>Income:</td>
              <td
                style={{
                  color: '#FF868D',
                }}
              >
                {income}
              </td>
            </StyledTableTr>
          </tfoot>
        </table>
      ) : (
        <StyledTableH3>
          It looks like you have not made any monetary transactions during this
          time period
        </StyledTableH3>
      )}
    </StyledTableDiv>
  );
};

export default StatisticsTable;

StatisticsTable.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      total: PropTypes.number,
    })
  ),
  dataDoughnut: PropTypes.object,
};
