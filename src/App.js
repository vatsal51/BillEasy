import './App.css';
import Background from './components/Background';
function App() {
  return (
    <div className="App">
      <Background />
    </div>
  );
}

navigator.serviceWorker &&
navigator.serviceWorker.register('worker.js').then(function (registration)
{
});
export default App;




