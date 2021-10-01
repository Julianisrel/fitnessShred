import React, { useContext, useState } from "react";
import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./context";
import axios from 'axios';
import config from '../../config';

export function SignupForm(props) {

  const { switchToSignin } = useContext(AccountContext);
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    else if (name === 'department') {
      setDepartment(value);
    }
    else if (name === 'password') {
      setPassword(value);
    } else if (name === 'passwordConfirm') {
      setPasswordConfirm(value);
    }
  };

  const signUp = (event, name, department, password, passwordConfirm) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      setError("password doesn't match.")
    } else {
      setError('')
      const data = { username: name, department, password };
      const baseUrl = `${config.REACT_APP_BASE_URL}`;
      axios.post(`${baseUrl}/user/register`, data)
        .then(response => {
          console.log('sign up response +++', response);
          switchToSignin();
        })
        .catch(error => {
          console.error("sign up error +++", error);
          if ((JSON.stringify(error)).includes('400')) {
            setError('submit correct values');
          } else if ((JSON.stringify(error)).includes('409')) {
            setError('user exsit already');
          } else {
            setError('unexpected error, try again later')
          }
        });
    }
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="text"
          placeholder="Full Name"
          name="name"
          id="name"
          value={name}
          onChange={(event) => onChangeHandler(event)} />
        <Input
          type="text"
          placeholder="Department"
          name="department"
          id="department"
          value={department}
          onChange={(event) => onChangeHandler(event)} />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => onChangeHandler(event)} />
        <Input
          type="password"
          placeholder="Confirm Password"
          name="passwordConfirm"
          id="passwordConfirm"
          value={passwordConfirm}
          onChange={(event) => onChangeHandler(event)} />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <label style={{ color: 'red' }}>{error}</label>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton onClick={(event) => { signUp(event, name, department, password, passwordConfirm) }}>Signup</SubmitButton>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          sign in
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
