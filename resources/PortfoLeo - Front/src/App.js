import './App.css'
import LayoutGeral from './components/layout/Layout';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <LayoutGeral/>
    </Router>
  )
}

export default App;
