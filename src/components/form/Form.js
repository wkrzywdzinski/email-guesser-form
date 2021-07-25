// unfortunately I didn't have time left for testing and since the task should be done in max 8h
// I didn't watch to cheat
import logo from './logo.png';
import './Form.css';
import Button from '../button/Button';
import Backdrop from '../backdrop/backdrop';
import { useState } from 'react';
import isFullNameValid from '../../helpers/full-name-validator';
import isDomainValid from '../../helpers/domain-validator';
import axios from 'axios';
import MessageModal from '../message-modal/Messsage-modal';
const Form = () => {
  // when i spent most of the time with React concept of hooks was not around so I wanted to try them out
  const [state, setState] = useState({
    fullName: '',
    domain: '',
    areInputsValid: false,
    isLoading: false,
    responseMessage: `dsdsds`,
  });

  const handleInput = (e) => {
    const { value, id } = e.target;
    let updatedState =
      id === 'full-name-input'
        ? { ...state, fullName: value }
        : { ...state, domain: value };
    updatedState = updateValidity(updatedState);

    setState(updatedState);
  };

  const updateValidity = (updatedState) => {
    let areInputsValid = false;
    if (
      isFullNameValid(updatedState.fullName) &&
      isDomainValid(updatedState.domain)
    ) {
      areInputsValid = true;
    }
    return { ...updatedState, areInputsValid };
  };

  const handleSubmit = () => {
    if (!state.areInputsValid) {
      return;
    }
    setState({
      isLoading: true,
      areInputsValid: false,
      fullName: '',
      domain: '',
    });
    const { fullName, domain } = state;
    // configured to work with local deployment of email-guesser-service
    axios
      .post('http://localhost:5000/api', {
        fullName,
        domain,
      })
      .then((response) => {
        updateStateAfterRequest(response.data);
      })
      .catch(() => {
        updateStateAfterRequest();
      });
  };
  const clearMessage = () => {
    console.log('eeee');
    setState({ ...state, responseMessage: '' });
  };

  const updateStateAfterRequest = (data = null) => {
    const success = data && data.email;
    setState({
      fullName: '',
      domain: '',
      areInputsValid: false,
      isLoading: false,
      responseMessage: success
        ? `Email  ${data.email} successully resolved`
        : 'Email resolving failed',
    });
  };

  return (
    <div className="container">
      <div className="section">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Email guesser</p>
      </div>
      <div className="section">
        <input
          id="full-name-input"
          type="text"
          placeholder="Please type your full name"
          value={state.fullName}
          onChange={handleInput}
        />
      </div>
      <div className="section">
        <input
          id="domain-input"
          type="text"
          placeholder="Please type your domain"
          value={state.domain}
          onChange={handleInput}
        />
      </div>
      <div onClick={handleSubmit} className="section">
        <Button active={state.areInputsValid} />
      </div>
      <div className="section"></div>
      {state.isLoading && <Backdrop />}
      <div class="message-wrapper" onClick={clearMessage}>
        {state.responseMessage && (
          <MessageModal message={state.responseMessage} />
        )}
      </div>
    </div>
  );
};

export default Form;
