import './App.css';
import {useUp} from "../src";
import {gql, useQuery} from "@apollo/client";
import {Button, Skeleton} from "antd";

function App() {

    const {config, t} = useUp();
    const {data, loading} = useQuery(gql`query Test{
        todos {
            id
            description
        }
    }`);

    return (
        <div className="App">
            <header className="App-header">
                <h1>{config.get('project.name')}</h1>
                <p>{t('hello')}</p>
                {loading && <>Loading...</>}
                <Skeleton loading={loading}>
                    {data && <ul>
                        {data.todos.map((t, k) => <li key={k}>{t.description}</li>)}
                    </ul>}
                </Skeleton>
            </header>
        </div>
    )
}

export default App
