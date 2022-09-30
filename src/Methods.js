import { React, useEffect, useState } from 'react'
import { GET, POST, UPDATE, DELETE } from './Request'
import ClayTable from '@clayui/table'
import { ClayForm, ClayInput } from "@clayui/form"
import ClayButton from "@clayui/button"

const MethodPost = () => {
	const [ headline, setHeadline ] = useState('')
	const [ articleBody, setArticleBody ] = useState('')
  
	return (
	  <>
		<ClayForm>
		  <ClayForm.Group className = 'form-group-sm'>
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

		  <ClayButton onClick = {() => 
			POST(headline, articleBody)
			.then(() => setHeadline(''), setArticleBody(''))
			} displayType = 'primary'>
					CADASTRAR
		  </ClayButton>
		</ClayForm>
	  </>
	);
  };

  //

const MethodGet = () => {
	const [ postLima, setPostLima ] = useState([])

	useEffect(() => {
	  GET().then((r) => setPostLima(r.items))
	}, [ postLima ])

    return (
<>

<ClayTable>
	<ClayTable.Head>
  		<ClayTable.Row>
  			<ClayTable.Cell headingCell>{'id'}</ClayTable.Cell>
  			<ClayTable.Cell headingCell>{'headline'}</ClayTable.Cell>
			<ClayTable.Cell headingCell>{'articleBody'}</ClayTable.Cell>
  		</ClayTable.Row>
	</ClayTable.Head>
<ClayTable.Body>
	<ClayTable.Row key = { postLima.id }>
		<ClayTable.Cell >{ postLima.id }</ClayTable.Cell>
		<ClayTable.Cell>{ postLima.headline }</ClayTable.Cell>
		<ClayTable.Cell >{ postLima.articleBody }</ClayTable.Cell>
  	</ClayTable.Row>
</ClayTable.Body>
</ClayTable>

<MethodPost />	

</>
  	)
}	

	//

	const MethodUpdate = () => {
		const [ headline, setheadline ] = useState('')
		const [ articleBody, setArticleBody ] = useState('')
		const [ id, setId ] = useState('')

		return (
			<>
				<ClayForm>
					<ClayForm.Group className = 'form-group-sm'>
						<h1>UPDATE</h1>
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
							onChange = {(e) => setHeadLine(e.target.value)}
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

					<ClayButton onClick = { UPDATE(id ,headline, articleBody) }
					displayType='primary'>
									UPDATE
					</ClayButton>
				</ClayForm>
			</>
		)
	}

	//

	const MethodDelete = () => {
		const [ id, setId ] = useState('')

		return (
			<>
				<ClayForm.Group className = 'form-group-sm'>
					<label htmlFor = 'id'>Delete</label>
					<ClayInput 
						id = 'id'
						onChange = {(e) => setId(e.target.value)}
						placeholder = 'Delete'
						type = 'text'
						value = { id }
					/>
				</ClayForm.Group>

				<ClayButton onClick = { DELETE(id)}
				displayType = 'primary'>
							DELETE
				</ClayButton>
			</>
		)
	}

export { MethodGet, MethodPost, MethodUpdate, MethodDelete }