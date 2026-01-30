import React, { createContext, useState } from 'react'

// 1. create context
export const searchContext = createContext("")

function SearchContextShare({ children }) {
  // 2. Global State
  const [searchKey, setSearchKey] = useState("")

  return (
    // 3. provide context using provider
    <searchContext.Provider value={{ searchKey, setSearchKey }}>
      {children}
    </searchContext.Provider>
  )
}

export default SearchContextShare
