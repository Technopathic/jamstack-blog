import React from 'react'
import '../styles/globals.css'

import Header from '../components/Header'

const App = (props) => {

  const { Component, pageProps } = props
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default App