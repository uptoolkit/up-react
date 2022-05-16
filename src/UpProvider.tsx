import React, { createContext, useContext } from 'react'
import {useUp} from "use-up";

/**
 * Init default context as undefined
 *
 * @type {React.Context<undefined>}
 */
export const UpContext:React.Context<undefined> = createContext(undefined);

/**
 * UpProvider helper to have context inside your component
 *
 * @param config
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
export const UpProvider = ({config, children}) => {

  if (typeof useUp !== "undefined" && typeof useUp === "function") {

    const up = useUp(config);

    return (
      <UpContext.Provider value={up}>
        {children}
      </UpContext.Provider>
    )
  }

  return (
    <UpContext.Provider>
      {children}
    </UpContext.Provider>
  )
}

/**
 * Export the instantiated up hook
 *
 * @return {undefined}
 */
export const useUpProvider = () => {
  const context = useContext(UpContext)

  if (!context)
    throw new Error('useUp must be used inside an `UpProvider`')

  return context;
}
