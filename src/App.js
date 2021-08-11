import './App.css';
import MainRouter from './components/MainRoute/MainRouter';
import { Provider } from 'react-redux';
import { store, persistor } from "./store/store";
import { PersistGate } from 'redux-persist/integration/react';
import { CircularProgress } from '@material-ui/core';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<CircularProgress />}>
          <MainRouter />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
