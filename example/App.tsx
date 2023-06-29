import * as React from 'react';
import './App.css';
import {useUp} from "../src";
import {Skeleton} from "antd";
import {gql, useQuery} from "@apollo/client";

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
                <h1 className={"test-config"}>{config.get('project.name') as string}</h1>
                <p className={"test-i18n"}>{t('hello')}</p>
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
