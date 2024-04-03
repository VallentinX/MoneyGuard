import styled from 'styled-components';
import { Form, Field } from 'formik';
import DatePicker from 'react-datepicker';

export const StyledEditContainer = styled.div`
  padding: 20px;
`;

export const EditFormTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 32px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 30px;
  }
`;

export const StyledlabelBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 50px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`;
export const StyledEditForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
`;

export const CustomRadioLabel = styled.label`
  position: relative;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;

  color: ${({ value, selected }) => {
    if (
      (selected === 'INCOME' && value === 'INCOME') ||
      (selected === 'EXPENSE' && value === 'EXPENSE')
    ) {
      return value === 'INCOME' ? '#FFB627' : '#FF868D';
    } else {
      return '#E0E0E0';
    }
  }};

  @media only screen and (min-width: 768px) {
    font-weight: 700;
  }
`;

export const CustomRadioInput = styled.input`
  display: none;
`;

export const StyledAmounDateEdit = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 32px;
    margin-bottom: 40px;
  }
`;
export const StyledEditAmount = styled(Field)`
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  padding: 8px;
  padding-left: 20px;
  width: 280px;
  margin-bottom: 40px;
  outline: none;

  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.mainWhite};
  border-bottom: ${({ theme }) => theme.border.borderBottom};

  @media only screen and (min-width: 768px) {
    width: 180px;
    text-align: center;
  }
`;
export const StyledReqField = styled.span`
  position: absolute;
  font-size: 14px;
  right: 90px;
  bottom: 90px;
  color: ${({ theme }) => theme.colors.expenseColor};

  @media only screen and (min-width: 768px) {
    bottom: 20px;
    right: 210px;
  }
`;

export const StyledReqCommentField = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.expenseColor};
`;

export const StyledEditField = styled(Field)`
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  width: 280px;
  padding: 0 20px 8px 20px;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: ${({ theme }) => theme.border.borderBottom};
  color: ${({ theme }) => theme.colors.mainWhite};

  @media only screen and (min-width: 768px) {
    width: 394px;
    padding: 0 8px 8px 8px;
  }
`;

export const StyledEditDatePicker = styled(DatePicker)`
  width: 280px;
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
  outline: none;

  background: transparent;
  border: none;
  border-bottom: ${({ theme }) => theme.border.borderBottom};
  color: ${({ theme }) => theme.colors.mainWhite};

  &::placeholder {
    color: ${({ theme }) => theme.colors.mainWhite};
  }

  @media only screen and (min-width: 768px) {
    width: 180px;
  }
`;

export const StyledIconCalendar = styled.svg`
  cursor: pointer;
`;
export const StyledWrapper = styled.div`
  .react-datepicker__view-calendar-icon input {
    padding: 6px 5px 5px 20px;
  }
  .react-datepicker__input {
    border: 2px solid #333;
    border-radius: 4px;
    padding: 8px;
  }
  .react-datepicker__input-container {
    padding-bottom: 15px;
  }
  .react-datepicker__input-container .react-datepicker__calendar-icon {
    position: absolute;
    padding: 0.5rem;
    box-sizing: content-box;
    right: 5px;
    top: -2px;
  }
  .react-datepicker__calendar-icon {
    width: 24px;
    height: 24px;
    vertical-align: -0.125em;
  }
  .react-datepicker__month-container {
    float: left;
    background: ${({ theme }) => theme.backgrounds.modalBg};
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name,
  .react-datepicker__current-month {
    color: ${({ theme }) => theme.colors.mainWhite};
  }
  .react-datepicker__day:hover {
    background-color: ${({ theme }) => theme.backgrounds.active};
  }
  .react-datepicker__header {
    background-color: ${({ theme }) => theme.backgrounds.tableHead};
  }
  .react-datepicker__day--disabled,
  .react-datepicker__month-text--disabled,
  .react-datepicker__quarter-text--disabled,
  .react-datepicker__year-text--disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.backgrounds.white40};
  }
  .react-datepicker__day--disabled:hover,
  .react-datepicker__month-text--disabled:hover,
  .react-datepicker__quarter-text--disabled:hover,
  .react-datepicker__year-text--disabled:hover {
    background-color: ${({ theme }) => theme.backgrounds.white40};
    border-radius: 0;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: ${({ theme }) => theme.backgrounds.active};
  }
`;

export const EditBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BtnSave = styled.button`
  font-size: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  width: 280px;
  height: 50px;
  padding: 13px 100px;
  margin-top: 40px;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.mainWhite};
  background: ${({ theme }) => theme.backgrounds.btnGradient};
`;

export const EditBtnCancel = styled.button`
  font-size: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  width: 280px;
  height: 50px;
  padding: 13px 100px;
  border-radius: 20px;
  color: #623f8b;
  background-color: ${({ theme }) => theme.colors.mainWhite};
`;
