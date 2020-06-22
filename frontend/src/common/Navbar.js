import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import { isAuthenticated, logout } from '../lib/auth'

// ? Navbar for user to navigate site

class Navbar extends React.Component {
  state = {isOpen: false}


  // * Function to log user out
  handleLogout = () => {
    logout()
    this.props.history.push('/')
  }

  // * Function to toggle navbar and turn it into cheeseburger
  handleToggle = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  // * Function to close Navbar if use clicks different location when in Burger menu
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({isOpen: false})
    }
  }


  render(){
    const {isOpen} = this.state
    return(
      <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
        <Link to="/" className="navbar-item">Sneaker-Files</Link>
        <span onClick={this.handleToggle} className={`navbar-burger ${isOpen ? 'is-active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
        </div>
        <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <div className="navbar-item">
          <Link to="/trainers" className="navbar-item">Sneaks</Link>
          {isAuthenticated() && <Link to="/trainers/new" className="navbar-item">Upload New Kicks</Link>}
          {!isAuthenticated() && <Link to="/register" className="navbar-item">Join Community</Link>}
          {!isAuthenticated() &&  <Link to="/login" className="navbar-item">Login</Link>}
          {isAuthenticated() && <span onClick={this.handleLogout} className="navbar-item">Logout</span>}
        </div>
        </div>
      </div>
    </nav>
    )

  }
  
}

export default withRouter(Navbar) 