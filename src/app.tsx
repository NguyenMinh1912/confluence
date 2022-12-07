import * as ReactDOM from 'react-dom';
import React, { FC } from 'react'
import { GlobalStyle } from './common/GlobalStyle';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '~/page/Home';
import Following from '~/page/Following';
import { publicRoutes } from '~/routes';
const App: FC = () => {
    return <Router>
      <div id='app'>
          <Routes> 
              {publicRoutes.map((route, key) => {
                  const Page = route.component;
                  return <Route path={route.path} element={<Page/>} key={key}/>
              })}
          </Routes>
      </div>
    </Router>
}

function render() {
  ReactDOM.render(
    <GlobalStyle>
        <App/>
    </GlobalStyle>
 , document.body);
}

render();