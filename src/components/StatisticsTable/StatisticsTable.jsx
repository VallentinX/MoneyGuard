import { useSelector } from "react-redux";
import {
  selectCategoriesSummary,
  selectExpenseSummary,
  selectIncomeSummary,
  selectPeriodTotal,
} from "../../redux/transactions/selectors";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Columns = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: rgba(82, 59, 126, 0.6);
  border-radius: 8px;
`;

const Column = styled.li`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const LeftSide = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Color = styled.span`
  width: 24px;
  height: 24px;
`;

const Name = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`;

const Sum = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`;

const Message = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
`;

const Expenses = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Income = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalName = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
`;

const ExpensesSum = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: rgb(255, 134, 141);
`;

const IncomeSum = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: rgb(255, 182, 39);
`;

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

const StatisticsTable = () => {
  const total = useSelector(selectPeriodTotal);
  const expenses = useSelector(selectExpenseSummary);
  const income = useSelector(selectIncomeSummary);
  const transactionCategories = useSelector(selectCategoriesSummary);

  let categories = [];

  if (total > 0) {
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

  const isDesktopView = useMediaQuery({ minWidth: 1280 });

  const Category = styled.li`
    height: 52px;
    padding: ${isDesktopView ? "0 28px" : "0 16px"};
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    justify-content: space-between;
  `;

  const Totals = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: ${isDesktopView ? "16px 28px" : "16px"};
  `;

  const MessageContainer = styled.div`
    padding: ${isDesktopView ? "28px 28px 12px 28px" : "16px 16px 0 16px"};
  `;

  return (
    <Container>
      <Columns>
        <Column>Category</Column>
        <Column>Sum</Column>
      </Columns>
      {total > 0 ? (
        <CategoryList>
          {categories.map((category) => (
            <Category key={category.name}>
              <LeftSide>
                <Color style={{ backgroundColor: category.color }}></Color>
                <Name>{category.name}</Name>
              </LeftSide>
              <Sum>{category.total.toFixed(2)}</Sum>
            </Category>
          ))}
        </CategoryList>
      ) : (
        <MessageContainer>
          <Message>You don't have any transactions in this period</Message>
        </MessageContainer>
      )}
      <Totals>
        <Expenses>
          <TotalName>Expenses:</TotalName>
          <ExpensesSum>{expenses.toFixed(2)}</ExpensesSum>
        </Expenses>
        <Income>
          <TotalName>Income:</TotalName>
          <IncomeSum>{income.toFixed(2)}</IncomeSum>
        </Income>
      </Totals>
    </Container>
  );
};

export default StatisticsTable;
