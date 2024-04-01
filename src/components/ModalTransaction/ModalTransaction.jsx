import React, { useState, useEffect } from 'react';

import style from './Modal.module.css';

import AddTransactionForm from '../AddTransactionForm/AddTransactionForm';
// import EditTransactionForm from '../EditTransactionForm/EditTransactionForm';

const Modal = function () {
  const [inputValue, setInputValue] = useState('income');

  const handleCheckboxChange = event => {
    setInputValue(event.target.checked ? 'expense' : 'income');
  };

  const handleCancelClick = () => {
    document.querySelector(`.${style.overlay}`).classList.add(style.hidden);
  };

  useEffect(() => {
    const handleEscape = event => {
      if (event.keyCode === 27) {
        document.querySelector(`.${style.overlay}`).classList.add(style.hidden);
      }
    };

    const handleClickOutside = event => {
      if (!event.target.closest(`.${style.container}`)) {
        document.querySelector(`.${style.overlay}`).classList.add(style.hidden);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={`${style.overlay} ${style.hiddens}`}>
        <div className={style.container}>
          <h3 className={style.title}>Add transaction</h3>
          <div className={style.transactionFlow}>
            <span
              className={
                inputValue === 'income'
                  ? style.spanLabelIncome
                  : style.spanLabel
              }
            >
              Income
            </span>
            {false ? (
              <span>/</span>
            ) : (
              <label className={style.switch}>
                <input
                  className={style.input}
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  value={inputValue}
                />
                <span className={`${style.slider} ${style.round}`}></span>
              </label>
            )}
            <span
              className={
                inputValue === 'expense'
                  ? style.spanLabelExpense
                  : style.spanLabel
              }
            >
              Expense
            </span>
          </div>
          <AddTransactionForm pageView={inputValue} />

          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
