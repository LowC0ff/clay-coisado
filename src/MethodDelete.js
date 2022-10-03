import React, { useState } from 'react'
import DELETE from './Request'
import ClayForm, { ClayInput } from "@clayui/form"
import ClayButton from "@clayui/button"

export default function MethodDelete() {
    const [ id, setId ] = useState('')
    const funcOnclick = () => {
        return DELETE(id)
    }

    return (
        <>
            <ClayForm.Group className = 'form-group-sm'>
                <h1>-DELETE-</h1>
                <label htmlFor = 'id'>Delete</label>
                <ClayInput 
                    id = 'id'
                    onChange = {(e) => setId(e.target.value)}
                    placeholder = 'Delete'
                    type = 'text'
                    value = { id }
                />
            </ClayForm.Group>

            <ClayButton onClick = { funcOnclick }
            displayType = 'primary'>
                        DELETE
            </ClayButton>
        </>
    )
}

