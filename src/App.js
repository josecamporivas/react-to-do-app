import './App.css';
import Title from './components/Title';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="App">
      <Title/>
      <TaskForm/>
      <Tasks/>
    </div>
  );
}

export default App;
