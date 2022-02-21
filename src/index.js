import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error'

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
    const {networkError} = error
    if  (networkError && networkError.result.code === 'invalid_token '){
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
  

  // onError: onError(
  //   ({ networkError }) => {
  //     if (networkError && networkError.result.code === 'invalid_token') {
  //       window.sessionStorage.removeItem('token')
  //       window.location.href = '/'
  //     }
  //   }
  // )
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
