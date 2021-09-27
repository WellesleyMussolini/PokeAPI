import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import * as Routes from './constants/route';
import './App.css';

const Home = lazy(() => import("./pages/Home"));
const Pokemon = lazy(() => import("./pages/Pokemon"));
const NotFound = lazy(() => import("./pages/NotFound"));


function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback="loading...">
          <Switch>
            <Route path={Routes.HOME} component={Home} exact />
            <Route path={Routes.POKEMON} component={Pokemon} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;