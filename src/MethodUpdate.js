import React, { useState } from 'react'
import { UPDATE, docUPDATE } from './Request'
import ClayForm, { ClayInput } from "@clayui/form"
import ClayButton from "@clayui/button"

export default function MethodUpdate() {
    const [ headline, setHeadline ] = useState('')
    const [ articleBody, setArticleBody ] = useState('')
    const [ id, setId ] = useState('')

    const funcOnclick = (param) => {
        UPDATE(param, id ,headline, articleBody)
    }
    const funcDoc = () => {
        docUPDATE(id)
    }

    return (
        <>
            <ClayForm>
                <ClayForm.Group className = 'form-group-sm'>
                    <h2>UPDATE Blog Postings</h2>
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
                    <label htmlFor = 'id'>ArticleBody</label>
                    <ClayInput 
                        id = 'id'
                        onChange = {(e) => setArticleBody(e.target.value)}
                        placeholder = 'articlebody'
                        type = 'text'
                        value = { articleBody }
                    />
                </ClayForm.Group>

                <ClayButton onClick = { () => funcOnclick('blog-postings') }
                displayType='primary'>
                                UPDATE
                </ClayButton>
                <hr/>
            </ClayForm>

            <h2>UPDATE Documents and Media</h2>
			<input 
				type = 'file' 
				id = 'fileDoc'/>
            
            <ClayInput
                id = 'id'
                onChange = {(e) => setId(e.target.value)}
                placeholder = 'id'
                type = 'text'
                value = { id }
            />

		<ClayButton onClick = { () => funcDoc() } displayType = 'secondary'>
			UPDATE DOC
		</ClayButton>
        </>
    )
}