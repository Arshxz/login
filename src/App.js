import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import validation from './validation'

const App = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrors(validation(input))
  }

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username </label><br />
        <input type="text" name="username" value={input.username} placeholder='enter username' required onChange={handleChange} />
        {errors.username && <p>{errors.username}</p>}<br />
        <label>Email</label><br />
        <input type="email" name="email" value={input.email} placeholder='enter email' required onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}<br />
        <label>Password</label><br />
        <input type="text" name="password" value={input.password} placeholder='enter Password' required onChange={handleChange} />
        {errors.password && <p>{errors.password}</p>}<br />
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
    </>
  );
}

export default App;