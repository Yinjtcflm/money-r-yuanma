import Layout from 'components/Layout';
import { HashRouter as Router, Redirect ,Route,Switch} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';



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

function Statistics(){
  return (
    <Layout>
    <h2>统计页面</h2>
    </Layout>
  )
}
function Tags(){
  return (
    <Layout>
    <h2>标签页面</h2>
    </Layout>
  )
}
function Money(){
  return (
    <Layout>
    <h2>记账页面</h2>
    </Layout>
  )
}

function NoMatch(){
  return (
    <div>你要找的页面不存在，请检查输入路径</div>
  )
}

export default App;
