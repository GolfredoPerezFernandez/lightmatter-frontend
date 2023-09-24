import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { cacheExchange, createClient, fetchExchange, Provider } from 'urql'

const client = createClient({
  exchanges: [cacheExchange, fetchExchange],
  /* fetchOptions: () => {
    const token = getToken();
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    };
  }, */
  url: import.meta.env.VITE_API_URL || 'http://localhost:4000/graphql',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider value={client}>
    <App /></Provider>
  </React.StrictMode>,
)
