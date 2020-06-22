import React from 'react'

// ? User registration form -> import to Register.js

const RegisterForm = ({onChange, onSubmit, username, email, password, passwordConfirmation}) => {
  return(
    <section className="join section">
      <div className="join-form container">
        <h3 className="reg"> Register Here:</h3>
        <br/>
        <form onSubmit={onSubmit}>
        <div className="field">
        <label className="label">Username</label>
  <p className="control has-icons-left has-icons-right">
    <input value={username} onChange={onChange} className="input" name="username" type="text" placeholder="Username"/>
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </p>
</div>
      <div className="field">
      <label className="label">Email</label>
  <p className="control has-icons-left has-icons-right">
    <input value={email} onChange={onChange} className="input" name="email" type="email" placeholder="Email"/>
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </p>
</div>
<div className="field">
<label className="label">Password</label>
  <p className="control has-icons-left">
    <input value={password} onChange={onChange} className="input" name="password" type="password" placeholder="Password"/>
    <span className="icon is-small is-left">
      <i className="fas fa-lock"></i>
    </span>
  </p>
</div>
<div className="field">
<label className="label">Confrim Password</label>
  <p className="control has-icons-left">
    <input value={passwordConfirmation} onChange={onChange} className="input" name="passwordConfirmation" type="password" placeholder="Confirm Password"/>
    <span className="icon is-small is-left">
      <i className="fas fa-lock"></i>
    </span>
  </p>
</div>
<br />
<button className="button is-primary">Join Now!</button> 
        </form>
      </div>
    </section> 
  )
}

export default RegisterForm