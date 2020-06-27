import React, { Component } from 'react';
import axios from 'axios'
import { Switch, Route } from 'react-router-dom'



import Homepage from "./components/HomePage"
import NavBar from './components/NavBar';
import ProfilePage from './components/ProfilePage'

class App extends Component {
  constructor() {
    super()
    this.state = {
      id: 1,
      username: "",
      avatar_url: ""
    }
  }



  getSingleUser() {
    let { id } = this.state
    let url = `http://localhost:3001/users/${id}`
    axios.get(url).then((res) => {
      console.log(res)
      let user = res.data.user
      console.log(user)
      let { username, avatar_url } = user
      this.setState({
        username: username,
        avatar_url: avatar_url
      })
    }).catch((err) => {
      console.log(err)
    })

  }

  componentDidMount() {
    this.getSingleUser();

  }

  renderHomepage = () => {
    return <Homepage
      username={this.state.username}
      avatar={this.state.avatar_url} />
  }

  render() {
    let { username, avatar_url } = this.state
    return (
      <div className="App">
        <NavBar id={this.state.id} username={username} />



        <Switch>
          <Route path="/users/:id" component={ProfilePage} />
          <Route exact path="/" render={this.renderHomepage} />
        </Switch>
      </div>


    );
  }
}

export default App;