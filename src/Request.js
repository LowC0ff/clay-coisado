const liferayId = themeDisplay.getSiteGroupId()

const POST = (headline, articleBody) => {
    return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/sites/${liferayId}/blog-postings`,{
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            headline,
            articleBody
        })
    }).then((r) => r.json())
}

//

const GET = (local) => {
    return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/sites/${liferayId}/${local}`,{
        method: 'GET',
    }).then((r) => r.json())
}

//

const UPDATE = (local, Id, headline, articleBody) => {
    return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/${local}/${Id}`,{
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            headline,
            articleBody
        })
    }).then((r) => r.json())
}

//

const DELETE = (local, id) => {
    return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/${local}/${id}`,{
        method: 'DELETE',
        //headers: { 
        //    'Content-Type': 'application/json'
        //}
    })
}

//

const docPOST = () => {
    const input = document.getElementById('fileDoc').files[0]
    const data = new FormData()
    data.append('file', input)

    return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/sites/${liferayId}/documents`,{
        method: 'POST',
        body: data
    })
    .then((r) => {
        window.location.reload()
    })

}

//

const docUPDATE = (id) => {
	const doc = document.querySelector('input[type="file"]')
	const data = new FormData()
	data.append("file", doc.files[0])

    return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/sites/${id}/documents`,{
        body: data,
		method: 'PATCH'
})
}

export { GET, POST, UPDATE, DELETE, docPOST, docUPDATE }