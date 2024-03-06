import { useState } from 'react'

const Register = ({register}) => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const submit = async(event) => {
    event.preventDefault();

    const credentials = {
      email, password 
    };

    await register(credentials);
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
      type="password"
      onChange={ event => setPassword(event.target.value )}
      />

      <button>REGISTER</button>

    </form>
    </>

  );
};

export default Register;