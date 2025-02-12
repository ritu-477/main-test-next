import Dashboard from './[button]/page'
import React, { Suspense } from 'react'

const page = () => {
    return (
        <Suspense>
            <Dashboard />
        </Suspense>
    )
}

export default page