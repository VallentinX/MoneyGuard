import icons from '../../../images/home-tab/mobile/icons.svg';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const AddIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

const ButtonAddTransactions = () => {
  const isMobileView = useMediaQuery({ maxWidth: 767 });

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

  return (
    <AddButton>
      <AddIcon>
        <use href={`${icons}#addIcon`} />
      </AddIcon>
    </AddButton>
  );
};

export default ButtonAddTransactions;
