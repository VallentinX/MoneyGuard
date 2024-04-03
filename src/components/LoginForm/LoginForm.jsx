import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import StyledLoginButton from "@mui/material/Button";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockIcon from "@mui/icons-material/Lock";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import logoMoneyGuard from "../../images/logo_money_guard.svg";
import {
  StyledSection,
  StyledForm,
  StyledLink,
  LogoBox,
  LogoImg,
  LogoName,
  StyledLoginField,
} from "../LoginForm/LoginForm.styled";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be at least 6 characters length")
    .required("Password is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLoggedIn);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  if (isLogin) {
    return <Navigate to="/" />;
  }

  const handleSubmit = (values) => {
    dispatch(loginThunk(values));
  };

  return (
    <StyledSection>
      <StyledForm onSubmit={formik.handleSubmit}>
        <LogoBox>
          <LogoImg src={logoMoneyGuard} alt="logo" />
          <LogoName>Money Guard</LogoName>
        </LogoBox>
        <StyledLoginField
          fullWidth
          id="email"
          name="email"
          label={
            <span
              style={{
                color: "rgba(255, 255, 255, 0.60)",
                fontSize: "18px",
                lineHeight: "27px",
              }}
            >
              <EmailOutlinedIcon
                style={{ verticalAlign: "middle", marginRight: "20px" }}
              />{" "}
              E-mail
            </span>
          }
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          InputProps={{
            inputProps: { style: { color: "#FFFFFF99" } },
          }}
          style={{
            width: "90%",
            marginTop: "52px",

            outline: "none",
          }}
        />
        <StyledLoginField
          fullWidth
          id="password"
          name="password"
          label={
            <span
              style={{
                color: "rgba(255, 255, 255, 0.60)",
                fontSize: "18px",
                lineHeight: "27px",
              }}
            >
              <LockIcon
                style={{ verticalAlign: "middle", marginRight: "20px" }}
              />{" "}
              Password
            </span>
          }
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            inputProps: { style: { color: "#FFFFFF99" } },
          }}
          style={{
            width: "90%",
            marginTop: "40px",
          }}
        />
        <StyledLoginButton
          type="submit"
          style={{
            width: "319px",
            height: "50px",
            background:
              "linear-gradient(97deg, #FFC727 0%, #9E40BA 61%, #7000FF 91%)",
            boxShadow: "1px 9px 15px rgba(0, 0, 0, 0.20)",
            borderRadius: "20px",
            color: "#ffffff",
            fontWeight: 400,
            fontSize: "18px",
            textTransform: "uppercase",
            letterSpacing: "1.80",
            textAlign: "center",
            cursor: "pointer",
            marginTop: "52px",
            marginBottom: "20px",
            transition: "background 0.3s, font-weight 0.3s",
          }}
        >
          Log In
        </StyledLoginButton>

        <StyledLink to="/registration">Register</StyledLink>
      </StyledForm>
    </StyledSection>
  );
};

export default LoginForm;
