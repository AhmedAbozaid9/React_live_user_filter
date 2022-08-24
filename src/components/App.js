import React from 'react'

import Contacts from './Contacts/Contacts'
import Header from './Header/Header'

function App() {
  return (
    <>
      <Header/>
      <Contacts numberOfContacts={10}/>
    </>
  )
}

export default App