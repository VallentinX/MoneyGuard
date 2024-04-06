import { getTransactions } from 'components/redux/selectors';
import TransactionsItem from './components/TransactionsItem';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import icons from '../../../images/home-tab/mobile/icons.svg';
import { useEffect } from 'react';
import { requestTransactions } from 'components/redux/operations';
import { useMediaQuery } from 'react-responsive';

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

const AddIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

const TableHeader = styled.ul`
  display: flex;
  padding: 16px 20px;
  background-color: rgba(82, 59, 126, 0.6);
  list-style: none;
  margin: 0;
  border-radius: 8px;
  box-sizing: border-box;
  gap: 48px;
`;

const Column = styled.li`
  font-family: 'Poppins';
  font-weight: 600;
  line-height: 24px;
  color: white;
  text-align: ${props => (props.type === 'sum' ? 'right' : 'left')};
  width: ${props => {
    switch (props.type) {
      case 'date':
        return '50px';
      case 'type':
        return '40px';
      case 'category':
        return '91px';
      case 'comment':
        return '108px';
      case 'sum':
        return '62px';
      default:
        break;
    }
  }};
`;

const TransactionsList = () => {
  const isMobileView = useMediaQuery({ maxWidth: 767 });
  const isTabletView = useMediaQuery({ maxWidth: 1279 });

  const AddButton = styled.button`
    border: none;
    background-image: linear-gradient(to right, #ffc727, #9e40ba);
    color: white;
    position: absolute;
    bottom: ${isMobileView ? '20px' : '40px'};
    right: ${isMobileView ? '20px' : '40px'};
    width: 44px;
    height: 44px;
    border-radius: 22px;
    box-shadow: 1px 9px 15px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Table = styled.div`
    margin: ${isMobileView && '0 20px'};
    margin: ${isTabletView ? '0 32px' : '0 16px 0 69px'};
    margin-top: ${isTabletView ? '20px' : '46px'};
    display: flex;
    flex-direction: column;
  `;

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(requestTransactions());
  // }, [dispatch]);

  const { list, isLoading, error } = useSelector(getTransactions);

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

  if (list.length === 0) {
    return (
      <MessageContainer>
        <Message>There are no transactions available</Message>
      </MessageContainer>
    );
  }

  return (
    <>
      {list.length > 0 && (
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
            {list.map(transaction => (
              <TransactionsItem
                transaction={transaction}
                key={transaction.id}
              />
            ))}
          </ItemList>
        </Table>
      )}
      <AddButton>
        <AddIcon>
          <use href={`${icons}#addIcon`} />
        </AddIcon>
      </AddButton>
    </>
  );
};

export default TransactionsList;
