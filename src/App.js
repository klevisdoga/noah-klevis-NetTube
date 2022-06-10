import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import './App.scss';
import PageHeader from './components/PageHeader/PageHeader';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageHeader />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/:videoId' exact component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
