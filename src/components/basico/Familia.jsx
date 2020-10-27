import React from 'react'

import FamiliaMembro from './FamiliaMembro'

export default (props) => {
    return (
        <div>
            <p><FamiliaMembro nome="Pedrinho" {...props}/></p>
            <p><FamiliaMembro nome="Julia" {...props}/></p>
            <p><FamiliaMembro nome="Otavinho" {...props}/></p>
        </div>
    )
}