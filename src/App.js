import './App.css';
import { Message } from './components/Message/Message';

function App() {
  const message = "Welcome to the course \"basic React\""
  return (
    <div className="App">
      <Message message = {message} />
    </div>
  );
}

export default App;
