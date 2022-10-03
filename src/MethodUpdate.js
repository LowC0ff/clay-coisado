import React, { useState } from 'react'
import UPDATE from './Request'
import ClayForm, { ClayInput } from "@clayui/form"
import ClayButton from "@clayui/button"

export default function MethodUpdate() {
    const [ headline, setHeadline ] = useState('')
    const [ articleBody, setArticleBody ] = useState('')
    const [ id, setId ] = useState('')
    const funcOnclick = () => {
        UPDATE(id ,headline, articleBody)
    }

    return (
        <>
            <ClayForm>
                <ClayForm.Group className = 'form-group-sm'>
                    <h1>-UPDATE-</h1>
                    <label htmlFor='id'>ID</label>
                    <ClayInput
                        id = 'id'
                        onChange = {(e) => setId(e.target.value)}
                        placeholder = 'id'
                        type = 'text'
                        value = { id }
                    />
                </ClayForm.Group>
                <ClayForm.Group className = 'form-group-sm'>
                    <h1>UPDATE HeadLine</h1>
                    <label htmlFor = 'id'>HeadLine</label>
                    <ClayInput 
                        id = 'id'
                        onChange = {(e) => setHeadline(e.target.value)}
                        placeholder = 'headline'
                        type = 'text'
                        value = { headline }
                    />
                </ClayForm.Group>
                <ClayForm.Group className = 'form-group-sm'>
                    <h1>UPDTE ArticleBody</h1>
                    <label htmlFor = 'id'>ArticleBody</label>
                    <ClayInput 
                        id = 'id'
                        onChange = {(e) => setArticleBody(e.target.value)}
                        placeholder = 'articlebody'
                        type = 'text'
                        value = { articleBody }
                    />
                </ClayForm.Group>

                <ClayButton onClick = { funcOnclick }
                displayType='primary'>
                                UPDATE
                </ClayButton>
            </ClayForm>
        </>
    )
}