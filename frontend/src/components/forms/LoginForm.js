import React from 'react'

import pic from '../../assets/login-removebg-preview.png'

const Login = ({email, password, onChange, onSubmit}) => {
  return(
    <section className="login section">
            <div className="login">
        <img className="loginpic" src={pic} alt="Trainers" />
      </div>
      <div className="login-form container">
        <form onSubmit={onSubmit}>
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
<button className="button is-primary">Login</button>
        </form>
      </div>
    </section>
  )
}

export default Login