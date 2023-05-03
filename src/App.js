import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplete from './components/TodoTemplete';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`
function App() {
  return (
    <>
      <GlobalStyle/>
      <TodoTemplete>
        <TodoHead/>
        <TodoList/>
      </TodoTemplete>
    </>
  );
}

export default App;
