import React from 'react';
import { HashRouter as Router, Redirect ,Route,Switch,Link} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';

const Wrapper=styled.div`
  height:100vh;
  display:flex;
  flex-direction:column;
`;

const Main=styled.div`
  flex-grow:1;
  overflow:auto;
  
`

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
          </Main>
          <Nav />
          
      </Wrapper>
    </Router>
  );
}

function Statistics(){
  return <h2>统计页面</h2>
}
function Tags(){
  return <h2>标签页面</h2>
}
function Money(){
  return <h2>记账页面</h2>
}

function NoMatch(){
  return (
    <div>你要找的页面不存在，请检查输入路径</div>
  )
}

export default App;
