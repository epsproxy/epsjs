import React, { createContext, useContext, useState, useEffect } from 'react'
import { EpsHelper } from './epsHelper'

const EpsContext = createContext<any>({})

export const EpsProvider = ({ children, contractAddress, provider }: any) => {
    const [helper, setHelper] = useState<EpsHelper>()

    useEffect(() => {
        loadHelper()
    }, [])

    const loadHelper = async () => {
        const epshelper = await EpsHelper.init(contractAddress, provider)
        setHelper(epshelper)
    }

    return (
        <EpsContext.Provider value={{helper}}>
            {children}
        </EpsContext.Provider>
    )
}

export const useEps = () => useContext(EpsContext)
