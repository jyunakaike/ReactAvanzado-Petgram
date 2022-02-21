import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

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
  cache: new InMemoryCache()
});


// const client = new ApolloClient({
//   uri: "https://react-avanzado-petgram-jyunakaike.vercel.app/graphql",
//   request: operation => {
//     const token = window.sessionStorage.getItem('token')
//     const authorization = token ? console.log('hay un token') : console.log('no hay token')
//     operation.setContext({
//       headers: {
//         authorization
//       }
//     })
//     // const authorization = token ? `Bearer ${token}` : ''
//     // console.log('esto es authorization', authorization)
//     // operation.setContext({
//     //   headres:{
//     //     authorization
//     //   }
//     // })
//   },
//   cache: new InMemoryCache(),
// })


ReactDOM.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>,
  document.getElementById('app'));
