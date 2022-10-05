import React, { useState } from 'react'
import { DELETE } from './Request'
import ClayForm, { ClayInput, ClaySelect } from "@clayui/form"
import ClayButton from "@clayui/button"

export default function MethodDelete() {
    const [ id, setId ] = useState('')
    const [ liferayLocal, setLocal ] = useState('')
    const options = [
        {
            label: 'Selecione o local do delete',
            value: ''
        },
        {
        label: 'Blog Postings',
        value: 'blog-postings'
        },
        {
            label: 'Documents',
            value: 'documents'
        }
    ]

    const funcOnclick = () => {
        return DELETE(liferayLocal, id)
    }

    return (
        <>
            <ClayForm.Group className = 'form-group-sm'>
                <ClaySelect aria-label = 'Select Label'
                id = 'mySelectId' onChange = { (e) => setLocal(e.target.value) }>
                    { options.map(item => (
                        <ClaySelect.Option
                        key = {item.value}
                        label = { item.label }
                        value = { item.value }
                        />
                    ))}
                </ClaySelect>
                <label htmlFor = 'id'>ID</label>
                <ClayInput 
                    id = 'id'
                    onChange = { (e) => setId(e.target.value) }
                    placeholder = 'id'
                    type = 'text'
                    value = { id }
                />
            </ClayForm.Group>

            <ClayButton onClick = { () => funcOnclick() }
            displayType = 'primary'>
                        DELETE
            </ClayButton>
        </>
    )
}

