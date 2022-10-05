import React, { useEffect, useState } from 'react'
import { GET } from './Request'
import ClayTable from '@clayui/table'
import MethodPost from './MethodPost'

export default function MethodGet() {
	const [ postLima, setPostLima ] = useState([])
	const [ docLima, setDoc ] = useState([])

	useEffect(() => {
	  GET('blog-postings').then((r) => setPostLima(r.items))
	}, [ postLima ])

	useEffect(() => {
		GET('documents').then((r) => setDoc(r.items))
	})



    return (
<>
<h2>GET Blog Postings</h2>
<ClayTable>
	<ClayTable.Head>
  		<ClayTable.Row>
  			<ClayTable.Cell headingCell>{'id'}</ClayTable.Cell>
  			<ClayTable.Cell headingCell>{'headline'}</ClayTable.Cell>
			<ClayTable.Cell headingCell>{'articleBody'}</ClayTable.Cell>
  		</ClayTable.Row>
	</ClayTable.Head>

<ClayTable.Body>
{postLima ? postLima.map(pl => (
	<ClayTable.Row key = { pl.id }>
		<ClayTable.Cell>{ pl.id }</ClayTable.Cell>
		<ClayTable.Cell>{ pl.headline }</ClayTable.Cell>
		<ClayTable.Cell>{ pl.articleBody }</ClayTable.Cell>
  	</ClayTable.Row>
)):''}
</ClayTable.Body>
</ClayTable>

<h2>GET Documents</h2>
<ClayTable>
	<ClayTable.Head>
  		<ClayTable.Row>
  			<ClayTable.Cell headingCell>{'id'}</ClayTable.Cell>
  		</ClayTable.Row>
	</ClayTable.Head>

<ClayTable.Body>
{docLima ? docLima.map(dl => (
	<ClayTable.Row key = { dl.id }>
		<ClayTable.Cell>{ dl.id }</ClayTable.Cell>
  	</ClayTable.Row>
)):''}
</ClayTable.Body>
</ClayTable>



<MethodPost />	

</>
  	)
}	