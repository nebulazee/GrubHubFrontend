import React, { Component } from 'react'
import ReactBootstrap from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'
import { Link } from 'react-router-dom'
import cookie from 'react-cookies'
import UnloggedHome from '../Unlogged/UnloggedHome'
class Navbaar extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
    
  }
  handleLogout = () => {
    // axios.defaults.withCredentials = true;
    //axios.get('http://localhost:3001/logout').then((response)=>{
    cookie.remove('token', { path: '/' })
    //  console.log(response.data);
    //});

  }

  render() {

    let unLoggedHome = null;
    if (!cookie.load('token')) {
      console.log(cookie.load('token'))
      unLoggedHome = <UnloggedHome />
    }
    else{
      console.log('user logged in');
      unLoggedHome = "";
    }
    let Logout = null;
    if (cookie.load('token')) {

      Logout = <ul class="nav navbar-nav navbar-right"><li class="nav-item"><Link to="/" onClick={this.handleLogout}><span class="glyphicon glyphicon-user"></span>Logout</Link></li></ul>

    }else Logout=""
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
        </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/login">Customer Login</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              {Logout}
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        {unLoggedHome}
      </div>
    )
  }
}

export default Navbaar
