import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import './App.css';
import Login from './Components/Login-signUp';
import Home from './Components/Home';
import axios from 'axios';
import MainHome from './Components/not-logged-in';
import Footer from './Components/Footer';
import NewBid from './Components/NewBid';


class App extends React.Component {

  state = {username : '' , email : '' , password : '' , logedIn : false};
  
  changeState = (usernam , email , password) => {
    this.setState({username : usernam , email : email , password : password , logedIn : true});
    // console.log(this.state);
  }
  logout = () => {
    console.log('Hello World');
    localStorage.removeItem('cool-jwt');
    this.setState({logedIn : false , username : null , email : null});
  }
  componentDidMount() {

    const token = localStorage.getItem('cool-jwt');
    // console.log(token);
    if(!token) {
      this.setState({
        logedIn : false
      });
    } else {
      const url = 'http://localhost:8000/post/getuser';
      axios.get(url , {headers : {authorization : 'Bearer ' + token}})
      .then(res => {
        console.log(res);
        this.setState({
          logedIn : true
        });
      })
      .catch(err => {
        localStorage.removeItem('cool-jwt');
        this.setState({
          logedIn : false
        });
      })
    }
  }
  render() {
    if(!this.state.logedIn) {
      return(
        <>
          <BrowserRouter>
            <Route exact path = '/' component = {MainHome} />
            <Route path = '/login' render = {(props) => <Login {...props} 
            logedIn = {this.state.logedIn} 
            changeState = {this.changeState}
            />} />
          </BrowserRouter>
        </>
      )
    } else {
      return(
        <>  
          <BrowserRouter>
            <Route exact path = "/" render = {(props) => <Home {...props} email = {this.state.email} logout = {this.logout}/>}/>
            <Route exact path = "/newBid" render = {(props) => <NewBid {...props} email = {this.state.email}/>}/>
          </BrowserRouter>
          <Footer />
        </>
      )
    }
  }
};

export default App;
