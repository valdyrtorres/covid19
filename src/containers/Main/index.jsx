import React, { memo, useState, useCallback, useEffect } from 'react'
import Api from '../../api'
import Board from './components/Board'
import { ContainerStyled } from './style'

function Main() {
    const[data, setData] = useState({})
    const[country, setCountry] = useState('brazil')

    // O callback é para evitar o loop, mas quero que ele execute toda vez que tiver 
    // alteração de países, senão teria que criar outro userEffect
    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
            .then(data => setData(data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    return (
        <ContainerStyled>
            <div className="mb-2">

            </div>
            <Board data={ data } />
            
        </ContainerStyled>
    )
}

export default memo(Main)