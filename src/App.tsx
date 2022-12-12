import { HashRouter as Router, Redirect ,Route,Switch} from 'react-router-dom';
import Money from 'views/Money';
import NoMatch from 'views/NoMatch';
import Statistics from 'views/Statistics';
import Tags from 'views/Tags';



function App() {
  return (
    <Router>
          <Switch>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Redirect exact from='/' to='/money'></Redirect>
          <Route path="*">
            <NoMatch />
          </Route>
          </Switch>
    </Router>
  );
}

export default App;
