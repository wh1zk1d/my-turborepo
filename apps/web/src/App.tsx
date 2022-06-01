import { Button } from 'ui'
import logo from './logo.svg'
import './App.css'

function App() {
  const getData = () => {
    fetch('http://localhost:3001/')
      .then(res => res.text())
      .then(text => {
        console.log(text)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={getData}>
            Fetch data from server
          </button>
        </p>
        <h2>
          Button from the <pre>packages</pre> dir in the monorepo!
        </h2>
        <p>
          <Button />
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
