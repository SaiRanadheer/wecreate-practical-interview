import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Form.css';

import { initiateFormSubmission } from '../redux/ducks/form';

function addInputs(count) {
  const inputs = [];

  for (let i = 0; i < count; i++) {
    const placeholder = `Address Line ${i + 1}`;
    inputs.push(<input type="text" placeholder={placeholder} />);
  }

  return inputs;
}

export default function Form() {
  const formData = useSelector((state) => {
    if (state.form) {
      return state.form.data;
    }
    return null;
  });
  const loading = useSelector((state) => {
    if (state.form) {
      return state.form.loading;
    }
    return false;
  });
  const [count, setCount] = useState(0);
  let inputs = addInputs(count);

  const handleOnClick = () => {
    setCount(count + 1);
    inputs = addInputs(count);
  };

  const handleSubmit = () => {
    initiateFormSubmission();
  };

  return (
    <form>
      <input id="fname" type="text" placeholder="First Name" />
      <input id="lname" type="text" placeholder="Last Name" />
      <input
        id="mobile"
        type="text"
        placeholder="Mobile Number"
        pattern="[0-9]{10}"
        minLength="10"
        maxLength="10"
        required
      />

      <input id="email" type="email" placeholder="Email" required />
      {inputs}
      <button type="button" onClick={handleOnClick}>
        +
      </button>

      {!formData && loading && <div>Loading...</div>}

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
