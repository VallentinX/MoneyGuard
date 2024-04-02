import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ModalTransaction from './ModalTransaction/ModalTransaction.jsx';

const App = function () {
  return (
    <>
      <ModalTransaction />
    </>
  );
};

export default App;
