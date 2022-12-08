import * as ReactDOM from 'react-dom';
import React, { FC } from 'react'
import { GlobalStyle } from './components/GlobalStyle';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '~/components/Layout';
import { publicRoutes } from '~/routes';

const App: FC = () => {
    return (<Router>
      <div id='app'>
        <Routes>
              {publicRoutes.map((route, key) => {
                  const Layout = route.layout === null ? React.Fragment : DefaultLayout;
                  const Page = route.component;
                  return <Route path={route.path} element={
                    <Layout>
                      <Page/>
                    </Layout>
                  } key={key}/>
              })}
          </Routes>
      </div>
    </Router>)
}

function render() {
  ReactDOM.render(
    <GlobalStyle>
        <App/>
    </GlobalStyle>
 , document.body);
}

render();