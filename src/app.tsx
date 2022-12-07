import * as ReactDOM from 'react-dom';
import React, { FC } from 'react'
import { GlobalStyle } from './common/GlobalStyle';

const App: FC = () => {
    return <div id='app'>
      App work
    </div>
}

function render() {
  ReactDOM.render(
    <GlobalStyle>
        <App/>
    </GlobalStyle>
 , document.body);
}

render();