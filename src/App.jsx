import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import data from './assets/components/Myapp'
import './App.css'
import { Mycomponent1 } from './assets/components/Mycomponent1'
import { FirstHook } from './assets/components/FirstHook'
import { FirstHook1 } from './assets/components/FirstHook1'
import { SecondHook } from './assets/components/SecondHook'
import { ThiredHook } from './assets/components/ThiredHook'
import { FourthHook } from './assets/components/FourthHook'
import { Fifth } from './assets/components/Fifth'
import { Parent } from './assets/components/Parent'
import { Mymenu } from './assets/components/Mymenu'



function App() {
  const [count, setCount] = useState(0)
// console.log(data);
  return (
    <div className="App">
    <Mymenu/>
      {/* hello */}
      {/* <Parent/> */}
      {/* <Child/> */}
      {/* hello good morning
     <Mycomponent1 info={data}
     path="./images/img.jpg"/>
     <FirstHook/>
     <FirstHook1/>
     <SecondHook/> */}
     {/* <ThiredHook/> */}
     {/* <FourthHook/>
     <Fifth/> */}
      {/* <Mycomponent1 info='angular'
      >
        hello
        </Mycomponent1>
      <Mycomponent1 info='reactjs'>
        hi
        </Mycomponent1> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
