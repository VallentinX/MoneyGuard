import React from 'react';

import style from './Modal.module.css';

const Modal = function () {
  return (
    <>
      <div className={style.overlay}>
        <div className={style.container}>
          <h3 className={style.title}>Add transaction</h3>
          <div className={style.transactionFlow}>
            <label className={style.switch}>
              <span className={`${style.slider} ${style.round}`}>Income</span>
              <input className={style.input} type="checkbox" value="input" />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
