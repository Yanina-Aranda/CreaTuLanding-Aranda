import React from 'react'
import { DotLoader } from 'react-spinners'

const LoaderComponent = () => {
    return (
        <div style={{ width: '100%', height: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <DotLoader color='grey' />
        </div>
    )
}

export default LoaderComponent