import {useState} from 'react'
import './App.css'
import {useUp} from '../packages/use-up/src';

function App() {
    const [count, setCount] = useState(0);

    const {__, config} = useUp();

    return (
        <div className="App">
            <header className="App-header">
                <h1>{config.get('project.name')}</h1>

                <p>
                    {__('hello')}
                </p>
                <p>
                    <button type="button" onClick={() => setCount((count) => count + 1)}>
                        count is: {count}
                    </button>
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
