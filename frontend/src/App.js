import './App.css';
import { GlobalProvider } from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import Questions from './pages/Questions';
import Result from './pages/Result';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Route path='/' component={HomePage} exact />
        <Route path='/questions' component={Questions} />
        <Route path='/result' component={Result} />
      </Router>
    </GlobalProvider>
  );
}

export default App;
