import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
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

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const history = useHistory();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    else if (name === 'password') {
      setPassword(value);
    }
  };

  const signIn = (event, name, password) => {
    event.preventDefault();
    setError('')
    const data = { username: name, password };
    const baseUrl = `${config.REACT_APP_BASE_URL}`;
    axios.post(`${baseUrl}/user/login`, data)
      .then(response => {
        if (response.data) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
          history.push(`/questionare`);
        }
      })
      .catch(error => {
        console.error("sign in error +++", error);
        if ((JSON.stringify(error)).includes('401')) {
          setError('Invalid credentials');
        } else {
          setError('unexpected error, try again later')
        }
      });
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
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => onChangeHandler(event)} />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <label style={{ color: 'red' }}>{error}</label>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">Forgot Password?</MutedLink>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton onClick={(event) => { signIn(event, name, password) }}>Login</SubmitButton>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">
        Dont have an Account?
        <BoldLink href="#" onClick={switchToSignup}>
          sign up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
