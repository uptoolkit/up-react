const {gql} = require("@apollo/client");

export const LOGIN = gql`
    mutation Login{
        login(currency: "USD") {
            currency
            rate
        }
    }
`;
