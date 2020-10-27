import React, { cloneElement } from 'react'

export default (props) => {
    return (
        <div>
            {
               props.children.map((filu,i) => {
                   return cloneElement(filu, {...props, key:i})
               })
            }
        </div>
    )
}