import PropTypes from "prop-types";
import styled from "styled-components";
import icons from "../../images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransactionThunk } from "../../redux/transactions/operations";
import { selectCategories } from "../../redux/transactions/selectors";
import { useMediaQuery } from "react-responsive";
import ModalTransaction from "../ModalTransaction/ModalTransaction";
import UseModal from "../../hooks/UseModal";
import EditTransactionForm from "../EditTransactionForm/EditTransactionForm";

const TransactionDetailName = styled.span`
  font-family: "Poppins";
  color: white;
  font-weight: 600;
  line-height: 24px;

  &::first-letter {
    text-transform: uppercase;
  }
`;

const EditIcon = styled.svg`
  fill: rgba(255, 255, 255, 0.6);
  width: 14px;
  height: 14px;
`;

const EditBtn = styled.button`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  border: none;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.6);
  padding: 0;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const TransactionsItem = ({ transaction }) => {
  const { open, close, isOpen, data } = UseModal();

  const isMobileView = useMediaQuery({ maxWidth: 767 });

  const Item = styled.li`
    width: 100%;
    display: ${isMobileView && "flex"};
    justify-content: ${isMobileView && "center"};
    &:last-child {
      padding-bottom: ${isMobileView ? "20px" : "32px"};
    }
  `;

  const LeftBorder = styled.div`
    background-color: ${transaction.type === "EXPENSE" ? "#ff868d" : "#ffb627"};
    width: 5px;
  `;

  const TransactionDetailSumValue = styled.span`
    font-family: "Poppins";
    color: ${transaction.type === "EXPENSE" ? "#ff868d" : "#ffb627"};
    font-weight: 600;
    line-height: 24px;
    text-align: ${!isMobileView && "right"};
    width: ${!isMobileView && "62px"};
  `;

  const TransactionDetail = styled.div`
    box-sizing: border-box;
    padding: ${isMobileView && "12px 20px 11px"};
    display: flex;
    justify-content: ${isMobileView && "space-between"};
    border-bottom: ${isMobileView && "1px solid rgba(255, 255, 255, 0.2)"};
    gap: ${isMobileView && "50px"};
    align-items: ${!isMobileView && "center"};
  `;

  const TransactionDetailValue = styled.span`
    font-family: "Poppins";
    color: white;
    font-weight: 400;
    line-height: 24px;

    &::first-letter {
      text-transform: uppercase;
    }

    text-align: ${isMobileView
      ? "right"
      : (props) => (props.type === "type" ? "center" : "left")};
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
        default:
          break;
      }
    }};
  `;

  const ItemContainer = styled.div`
    height: 100%;
    width: ${isMobileView && "285px"};
    border-radius: ${isMobileView && "10px"};
    background-color: ${isMobileView && "rgba(255, 255, 255, 0.1)"};
    display: flex;
    border-bottom: ${!isMobileView && "1px solid rgba(255, 255, 255, 0.2)"};
    height: ${!isMobileView && "53px"};
    padding: ${!isMobileView && "0px 20px"};
    align-items: ${!isMobileView && "center"};
    overflow: hidden;
  `;

  const ContentContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: ${!isMobileView && "space-between"};
    flex-direction: ${isMobileView && "column"};
    gap: ${!isMobileView && "48px"};
    align-items: ${!isMobileView && "center"};
  `;

  const BttnsContainer = styled.div`
    padding: ${isMobileView && "12px 20px"};
    display: flex;
    justify-content: space-between;
    gap: ${!isMobileView && "7.5px"};
  `;

  const DeleteBtn = styled.button`
    border: none;
    border-radius: 15px;
    font-family: "Poppins";
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    padding: 4px 12px;
    background-image: linear-gradient(to right, #ffc727, #9e40ba);
    box-shadow: 1px 9px 15px 0 rgba(0, 0, 0, 0.2);
    color: white;
    height: fit-content;
    order: ${!isMobileView && "2"};
  `;

  const dispatch = useDispatch();

  function deletingTransaction(evt) {
    const transactionId = evt.target.id;
    dispatch(deleteTransactionThunk(transactionId));
  }

  const categories = useSelector(selectCategories);

  const categoriesName = function (id) {
    const [findCategories] = categories.filter(
      (categorie) => categorie.id === id
    );

    return findCategories?.name;
  };

  return (
    <>
      <Item>
        <ItemContainer>
          {isMobileView && <LeftBorder />}
          <ContentContainer>
            <TransactionDetail>
              {isMobileView && (
                <TransactionDetailName>date</TransactionDetailName>
              )}
              <TransactionDetailValue type="date">
                {`${transaction.transactionDate
                  .split("-")
                  .reverse()
                  .join(".")
                  .slice(0, 6)}${transaction.transactionDate.slice(2, 4)}`}
              </TransactionDetailValue>
            </TransactionDetail>
            <TransactionDetail>
              {isMobileView && (
                <TransactionDetailName>type</TransactionDetailName>
              )}
              <TransactionDetailValue type="type">
                {transaction.type === "EXPENSE" ? "-" : "+"}
              </TransactionDetailValue>
            </TransactionDetail>
            <TransactionDetail>
              {isMobileView && (
                <TransactionDetailName>category</TransactionDetailName>
              )}
              <TransactionDetailValue type="category">
                {categoriesName(transaction.categoryId)}
              </TransactionDetailValue>
            </TransactionDetail>
            <TransactionDetail>
              {isMobileView && (
                <TransactionDetailName>Comment</TransactionDetailName>
              )}
              <TransactionDetailValue type="comment">
                {transaction.comment}
              </TransactionDetailValue>
            </TransactionDetail>
            <TransactionDetail>
              {isMobileView && (
                <TransactionDetailName>Sum</TransactionDetailName>
              )}
              <TransactionDetailSumValue>
                {transaction.amount.toFixed(2)}
              </TransactionDetailSumValue>
            </TransactionDetail>
            <BttnsContainer>
              <DeleteBtn onClick={deletingTransaction} id={transaction.id}>
                Delete
              </DeleteBtn>
              <EditBtn id={transaction.id} onClick={() => open(transaction)}>
                <EditIcon>
                  <use href={`${icons}#edit`} />
                </EditIcon>
                {isMobileView && "Edit"}
              </EditBtn>
              {isOpen && (
                <ModalTransaction close={close}>
                  <EditTransactionForm transaction={data} close={close} />
                </ModalTransaction>
              )}
            </BttnsContainer>
          </ContentContainer>
        </ItemContainer>
      </Item>
    </>
  );
};

TransactionsItem.propTypes = {
  transaction: PropTypes.object,
};

export default TransactionsItem;
