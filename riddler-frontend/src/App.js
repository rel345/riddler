import './App.css';
import { AppProvider } from './Context';
import Main from './Main';

const App = () => {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
};

export default App;
