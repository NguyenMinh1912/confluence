import * as ReactDOM from 'react-dom';
import React, { FC } from 'react'

const App: FC = () => {
    return <div id='app'>
      App work
    </div>
}

function render() {
  ReactDOM.render(<App/>, document.body);
}

render();