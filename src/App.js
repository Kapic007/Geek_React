import './App.css';
import { Message } from './components/Message/Message';


const message = "Welcome to the course \"basic React\""

function App() {
  return (
    <div className="App">
      <Message message={message} />
    </div>
  );
}

export default App;
