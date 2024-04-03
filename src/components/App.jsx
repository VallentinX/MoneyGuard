import Modal from "./ModalTransaction/ModalTransaction";
import UseModal from "../hooks/UseModal";

import AddTransactionForm from "components/AddTransactionForm/AddTransactionForm";
// import EditTransactionForm from "components/EditTransactionForm/EditTransactionForm";
import Header from "./Header/Header";

export const App = () => {
  const { close, isOpen, data } = UseModal();
  // const transaction = "INCOME" || "EXPANSE";
  return (
    <>
      {/* <Header></Header> */}
      {/* ButtonAddTransactions */}
      {/* {true && (
        <Modal close={close}>
          <AddTransactionForm transaction={data} close={close} />
        </Modal>
      )} */}

      {/* TransactionsItem */}
      {/* {true && (
        <Modal close={close}>
          <EditTransactionForm transaction={transaction} close={close} />
        </Modal>
      )} */}
    </>
  );
};

export default App;
