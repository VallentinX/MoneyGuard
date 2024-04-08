import { selectTransactions } from "../../redux/transactions/selectors";
import TransactionsItem from "../TransactionsItem/TransactionsItem";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import {
  fetchTransactionsThunk,
  fetchTransactionCategory,
} from "../../redux/transactions/operations";
import { useMediaQuery } from "react-responsive";

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0px 20px;
`;

const Message = styled.p`
  color: white;
  font-size: 17px;
  font-weight: 700;
  text-align: center;
`;

const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style: none;
  margin: 0;
  gap: 8px;
`;

const TableHeader = styled.ul`
  display: flex;
  padding: 16px 0 16px 20px;
  width: 100%;
  justify-content: space-between;
  background-color: rgba(82, 59, 126, 0.6);
  list-style: none;
  margin: 0;
  border-radius: 8px;
  box-sizing: border-box;
  gap: 48px;
  padding-right: 22%;
`;

const Column = styled.li`
  font-family: "Poppins";
  font-weight: 600;
  line-height: 24px;
  color: white;
  text-align: ${(props) => (props.type === "sum" ? "right" : "left")};
  width: ${(props) => {
    switch (props.type) {
      case "date":
        return "50px";
      case "type":
        return "40px";
      case "category":
        return "91px";
      case "comment":
        return "108px";
      case "sum":
        return "62px";
      default:
        break;
    }
  }};
`;

const TransactionsList = () => {
  const isMobileView = useMediaQuery({ maxWidth: 767 });
  const isTabletView = useMediaQuery({ maxWidth: 1279 });

  const Table = styled.div`
    margin: ${isMobileView && "0 20px"};
    margin-top: ${isTabletView ? "20px" : "46px"};
    display: flex;
    flex-direction: column;
  `;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactionsThunk());
    dispatch(fetchTransactionCategory());
  }, [dispatch]);

  const { items, isLoading, error } = useSelector(selectTransactions);

  if (isLoading) {
    return (
      <MessageContainer>
        <Message>Loading transactions...</Message>
      </MessageContainer>
    );
  }

  if (error) {
    return (
      <MessageContainer>
        <Message>{error}</Message>
      </MessageContainer>
    );
  }

  if (items?.length === 0) {
    return (
      <MessageContainer>
        <Message>There are no transactions available</Message>
      </MessageContainer>
    );
  }

  return (
    <>
      {items.length > 0 && (
        <Table>
          {!isMobileView && (
            <TableHeader>
              <Column type="date">Date</Column>
              <Column type="type">Type</Column>
              <Column type="category">Category</Column>
              <Column type="comment">Comment</Column>
              <Column type="sum">Sum</Column>
            </TableHeader>
          )}
          <ItemList>
            {items.map((transaction) => (
              <TransactionsItem
                transaction={transaction}
                key={transaction.id}
              />
            ))}
          </ItemList>
        </Table>
      )}
    </>
  );
};

export default TransactionsList;
