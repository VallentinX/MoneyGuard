import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Button from '@mui/material/Button';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import logoMoneyGuard from '../../images/logo_money_guard.svg';
import PasswordStrengthBar from './PasswordStrengthBar';
import {
  StyledLink,
  LogoBox,
  LogoImg,
  LogoName,
  StyledLoginField,
} from '../LoginForm/LoginForm.styled';
import { StyledSection, StyledForm } from './RegistrationForm.styled';

const validationSchema = yup.object({
  name: yup.string('Enter your name').required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be at least 6 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string('Confirm your password')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLoggedIn);
  const [password, setPassword] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      handleSubmit(values);
    },
  });

  if (isLogin) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = values => {
    dispatch(registerThunk(values));
  };

  return (
    <StyledSection>
      <StyledForm onSubmit={formik.handleSubmit}>
        <LogoBox>
          <LogoImg
            src={logoMoneyGuard}
            alt="logo"
            style={{ marginTop: '30px' }}
          />
          <LogoName>Money Guard</LogoName>
        </LogoBox>
        <StyledLoginField
          fullWidth
          id="name"
          name="name"
          label={
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.60)',
                fontSize: '18px',
                lineHeight: '27px',
              }}
            >
              <PersonIcon
                style={{ verticalAlign: 'middle', marginRight: '20px' }}
              />{' '}
              Name
            </span>
          }
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          InputProps={{
            inputProps: { style: { color: '#FFFFFF99' } },
          }}
          style={{
            width: '90%',
            marginTop: '20px',
          }}
        />
        <StyledLoginField
          fullWidth
          id="email"
          name="email"
          label={
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.60)',
                fontSize: '18px',
                lineHeight: '27px',
              }}
            >
              <EmailOutlinedIcon
                style={{ verticalAlign: 'middle', marginRight: '20px' }}
              />{' '}
              Email
            </span>
          }
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          InputProps={{
            inputProps: { style: { color: '#FFFFFF99' } },
          }}
          style={{
            width: '90%',
            marginTop: '20px',
          }}
        />
        <StyledLoginField
          fullWidth
          id="password"
          name="password"
          label={
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.60)',
                fontSize: '18px',
                lineHeight: '27px',
              }}
            >
              <LockIcon
                style={{ verticalAlign: 'middle', marginRight: '20px' }}
              />{' '}
              Password
            </span>
          }
          type="password"
          value={formik.values.password}
          onChange={e => {
            formik.handleChange(e);
            setPassword(e.target.value);
          }}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            inputProps: { style: { color: '#FFFFFF99' } },
          }}
          style={{
            width: '90%',
            marginTop: '20px',
          }}
        />
        <StyledLoginField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label={
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.60)',
                fontSize: '18px',
                lineHeight: '27px',
              }}
            >
              <LockIcon
                style={{ verticalAlign: 'middle', marginRight: '20px' }}
              />{' '}
              Confirm password
            </span>
          }
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
          InputProps={{
            inputProps: { style: { color: '#FFFFFF99' } },
          }}
          style={{
            width: '90%',
            marginTop: '20px',

            marginBottom: '5px',
          }}
        />
        <div>
          <PasswordStrengthBar password={password} />
        </div>
        <Button
          type="submit"
          style={{
            width: '319px',
            height: '50px',
            background:
              'linear-gradient(97deg, #FFC727 0%, #9E40BA 61%, #7000FF 91%)',
            boxShadow: '1px 9px 15px rgba(0, 0, 0, 0.20)',
            borderRadius: '20px',
            color: '#ffffff',
            fontWeight: 400,
            fontSize: '18px',
            textTransform: 'uppercase',
            letterSpacing: '1.80',
            textAlign: 'center',
            cursor: 'pointer',
            marginTop: '40px',
            marginBottom: '20px',
            transition: 'background 0.3s, font-weight 0.3s',
          }}
        >
          Register
        </Button>
        <StyledLink to="/login">Log in</StyledLink>
      </StyledForm>
    </StyledSection>
  );
};

export default RegistrationForm;