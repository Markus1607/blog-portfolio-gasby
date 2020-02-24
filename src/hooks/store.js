import React, { createContext, useReducer } from "react"

const initialState = {
  animate: false,
}
const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "animate":
        return { ...state, animate: action.animate }
      default:
        return state
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
