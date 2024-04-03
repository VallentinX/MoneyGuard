import LoginForm from "../../components/LoginForm/LoginForm";
import {
  ContentContainer,
  MainContainer,
} from "../../components/LoginForm/LoginForm.styles";

const Login = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <LoginForm />
      </ContentContainer>
    </MainContainer>
  );
};

export default Login;
