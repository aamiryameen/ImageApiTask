import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'

const IsPortrait = () => {

    const [dimension, setDimension] = useState(Dimensions.get('screen'))
    
    useEffect(() => {
        const onChangeDimension = (orientaion) => {
            setDimension(orientaion.screen)
        }
        Dimensions.addEventListener('change', onChangeDimension);
        return () => Dimensions.removeEventListener('change', onChangeDimension)
    }, [])

    return {
        ...dimension,
        isPortrait: dimension.height > dimension.width
    }
}

export default IsPortrait