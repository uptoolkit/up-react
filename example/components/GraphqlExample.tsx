import {useQuery} from "@apollo/client";
import {LOGIN} from "../gql"

function GraphqlExample() {
    const { loading, error, data } = useQuery(LOGIN);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
            <p>
                {currency}: {rate}
            </p>
        </div>
    ));
}

export default GraphqlExample;
