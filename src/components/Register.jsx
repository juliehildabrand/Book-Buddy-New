import { useState } from 'react'

const Register = ({Register}) => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const submit = async(event) => {
    event.preventDefault();

    const credentials = {
      email, password 
    };

    await Register(credentials);
  }

  return(
    <>
    <form onSubmit={ submit }>
      <input
      placeholder='email'
      value={ email }
      onChange={ event => setEmail(event.target.value )}
      />

      <input
      placeholder='password'
      value={ password }
      onChange={ event => setPassword(event.target.value )}
      />

      <button>Register!</button>

    </form>
    </>

  );
};

export default Register;