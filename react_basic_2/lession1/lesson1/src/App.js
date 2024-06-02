import { useSelector } from 'react-redux';
import './App.css';
import Color from './components/Redux/Color';
import Component1 from './components/Redux/Component_1/Component1';
import UserPage from './components/UserPage';
import Menu from './components/Menu/Menu';

function App() {

  return (
    <>
      {/* <UserPage /> */}
      <Menu />
      <Component1 />
      <Color />
    </>

  );
}

export default App;
