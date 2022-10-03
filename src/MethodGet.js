import React, { useEffect, useState } from 'react'
import GET from './Request'
import ClayTable from '@clayui/table'

export default function MethodGet() {
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
{postLima ? postLima.map(pl => (
	<ClayTable.Row key = { pl.id }>
		<ClayTable.Cell>{ pl.id }</ClayTable.Cell>
		<ClayTable.Cell>{ pl.headline }</ClayTable.Cell>
		<ClayTable.Cell>{ pl.articleBody }</ClayTable.Cell>
  	</ClayTable.Row>
)):''}
</ClayTable.Body>

</ClayTable>

<MethodPost />	

</>
  	)
}	