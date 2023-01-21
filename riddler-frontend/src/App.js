import './App.css';
import Frame from './Frame';

const App = () => {
  return (
    <>
      <h1>Riddler</h1>
      <div class='container'>
        <Frame title="Upload puzzle"/>
        <Frame title="Upload piece"/>
      </div>
    </>
  );
};

export default App;
