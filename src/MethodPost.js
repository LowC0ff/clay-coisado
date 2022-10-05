import React, { useState } from 'react'
import { POST, docPOST } from './Request'
import ClayForm, { ClayInput } from "@clayui/form"
import ClayButton from "@clayui/button"

function MethodPost() {
	const [ headline, setHeadline ] = useState('')
	const [ articleBody, setArticleBody ] = useState('')

	function funcOnclick() {
		POST(headline, articleBody)
		.then(() =>  { setHeadline(''); setArticleBody('') })
	}
  
	return (
	  <>
		<ClayForm>
		  <ClayForm.Group className = 'form-group-sm'>
			<h2>POST BlogPostings</h2>
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

		  <ClayButton onClick = { () => funcOnclick() } displayType = 'primary'>
					POST
		  </ClayButton>
		  <hr/>
		</ClayForm>
			<h2>POST Documents and Media</h2>
			<input 
				type = 'file' 
				id = 'fileDoc'/>
		<ClayButton onClick = { () => docPOST() } displayType = 'secondary'>
			POST DOC
		</ClayButton>
	  </>
	);
  };

  export default MethodPost