import Modal from './ModalTransaction/ModalTransaction';
import UseModal from '../hooks/UseModal';

import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';
// import EditTransactionForm from 'components/EditTransactionForm/EditTransactionForm';

export const App = () => {
  const { close, isOpen, data } = UseModal();
  // const transactionType = 'INCOME' || 'EXPANSE';
  return (
    <>
      {/* ButtonAddTransactions */}
      {true && (
        <Modal close={close}>
          <AddTransactionForm transaction={data} close={close} />
        </Modal>
      )}

      {/* TransactionsItem */}
      {/* {isOpen && (
        <Modal close={close}>
          <EditTransactionForm transaction={transactionType} close={close} />
        </Modal>
      )} */}
    </>
  );
};

export default App;
