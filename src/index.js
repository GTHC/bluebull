import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// redux tools
import { Provider } from 'react-redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

// redux dev tools
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

// redux persist
import storage from 'redux-persist/es/storage';
import { PersistGate } from 'redux-persist/es/integration/react';

// containers
import App from './containers/App';

// styles
import './styles/index.css';
import 'typeface-roboto';

// utils
import { configureStore, DevTools, history } from './utils/store';

const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <div>
        <App history={history} />
        { process.env.NODE_ENV === 'development' ?
          <DevTools /> : null
        }
      </div>
    </PersistGate>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
