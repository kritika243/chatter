import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Join from './components/join/Join'

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={Join} />
        <Route path='/chat' />
      </Router>
    </div>
  )
}

export default App
