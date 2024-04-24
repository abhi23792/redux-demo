import './App.css';
import { Products } from './components/Products';
import { Provider } from 'react-redux';
import store from './store/Store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Products />
        </Provider>
      </header>
    </div>
  );
}

export default App;
