import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
// import { onError } from '@apollo/client/link/error'

import { AppProvider } from './context/AppContext';
import { App } from './App'


const httpLink = createHttpLink({
  uri: "https://react-avanzado-petgram-jyunakaike.vercel.app/graphql",
})

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }

})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  onError: error => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token ') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
});



ReactDOM.render(
  <ApolloProvider client={client}>
    <AppProvider>
      <App />
    </AppProvider>
  </ApolloProvider>
  ,
  document.getElementById('app'));
