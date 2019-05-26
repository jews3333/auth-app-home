import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolver';
import typeDefs from './typeDefs';

// GraphQL Server connect
const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log(`Server is running at http://localhost:4000`));

ReactDOM.render(
    <Router>
        <App />
    </Router>
, document.getElementById('root'));

serviceWorker.unregister();
