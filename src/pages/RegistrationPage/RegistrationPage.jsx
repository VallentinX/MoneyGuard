// RegistrationPage.js
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import {
  ContentContainer,
  MainContainer,
} from "../../components/RegisterForm/RegisterForm.styled";

const Register = () => {
  return (
    <MainContainer isRegister={true}>
      <ContentContainer>
        <RegisterForm />
      </ContentContainer>
    </MainContainer>
  );
};

export default Register;
