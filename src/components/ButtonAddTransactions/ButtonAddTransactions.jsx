import React from "react";
import ModalTransaction from "../ModalTransaction/ModalTransaction";
import UseModal from "../../hooks/UseModal";
import AddTransactionForm from "../AddTransactionForm/AddTransactionForm";
import PropTypes from "prop-types";
import sprite from "../../images/sprite.svg";
import { AddButton } from "./ButtonAddTransactions.style";

const ButtonAddTransactions = ({ transaction }) => {
  const { open, close, isOpen, data } = UseModal();

  return (
    <>
      <AddButton type="button" onClick={() => open(transaction)}>
        <svg width="20" height="20">
          <use href={`${sprite}#plus`} />
        </svg>
      </AddButton>

      {isOpen && (
        <ModalTransaction close={close}>
          <AddTransactionForm transaction={data} close={close} />
        </ModalTransaction>
      )}
    </>
  );
};

export default ButtonAddTransactions;

ButtonAddTransactions.propTypes = {
  transaction: PropTypes.object,
};
