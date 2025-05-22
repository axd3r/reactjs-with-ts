import Button from './components/Button/Button';
import Counter from './components/Counter/Counter';
import './App.css';
import { ThemeProvider } from './components/ContextApi/ContextApi';
import ThemeButton from './components/Button/ThemeButton';
import CounterWithUseReducer from './components/CounterWithUseReducer/CounterWithUseReducer';

function greet(name: string) {
  return `Hola ${name}`;
}

function App() {
  const handleClick = () => alert('Ya estoy clickeando');
  console.log(greet("Joaquin"));
  console.log("hola");
  
  return (
    <>
      
      <ThemeProvider>
        <ThemeButton />
        <Button onclick={handleClick} label='Click me'/>
        <Counter />
        <CounterWithUseReducer />
      </ThemeProvider>
    </>
  )
}

export default App
