import React, { useState } from 'react'
import POST from './Request'
import ClayForm, { ClayInput } from "@clayui/form"
import ClayButton from "@clayui/button"

function MethodPost() {
	const [ headline, setHeadline ] = useState('')
	const [ articleBody, setArticleBody ] = useState('')
	const funcOnclick = () => {
		POST(headline, articleBody)
		.then(() => setHeadline(''), setArticleBody(''))
	}
  
	return (
	  <>
		<ClayForm>
		  <ClayForm.Group className = 'form-group-sm'>
			<h1>-POST-</h1>
			<label htmlFor = 'basicInput'>headline</label>
			<ClayInput
			  id = 'headline'
			  onChange = {(e) => setHeadline(e.target.value)}
			  placeholder = 'headline'
			  type = 'text'
			  value = { headline }
			/>
		  </ClayForm.Group>
		  <ClayForm.Group className = 'form-group-sm'>
			<label htmlFor = 'basicInput'>articleBody</label>
			<ClayInput
			  id = 'articleBody'
			  onChange = {(e) => setArticleBody(e.target.value)}
			  placeholder = 'articleBody'
			  type = 'text'
			  value = { articleBody }
			/>
		  </ClayForm.Group>

		  <ClayButton onClick = { funcOnclick } displayType = 'primary'>
					CADASTRAR
		  </ClayButton>
		</ClayForm>
	  </>
	);
  };

  export default MethodPost