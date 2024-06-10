import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import BlogItemDetails from './components/BlogDetails'
import Profile from './components/Profile'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/profile" component={Profile} />
    <Route path="/blogs/:id" component={BlogItemDetails} />
    <Route path="/not-found" component={NotFound} />

    <Redirect to="not-found" />
  </Switch>
)

export default App
