import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import BlogItemDetails from './components/BlogDetails'
import Profile from './components/Profile'
import ContextChanges from './components/Context/ContextChange'
import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ContextChanges.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <Route path="/blogs/:id" component={BlogItemDetails} />
          <Route path="/not-found" component={NotFound} />

          <Redirect to="not-found" />
        </Switch>
      </ContextChanges.Provider>
    )
  }
}

export default App
