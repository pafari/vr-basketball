import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MeloCourtScene from "./MeloScene";
import './App.css'
import BasketballCourtScene from './BasketballCourt';

function App() {
  const [count, setCount] = useState();

  return <BasketballCourtScene/>;
}

export default App;