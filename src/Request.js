const liferayId = themeDisplay.getSiteGroupId()

const POST = (headline, articleBody) => {
    return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/sites/${liferayId}/blog-postings`,{
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + btoa('test@liferay.com:123')
        },
        body: JSON.stringify({
            headline,
            articleBody
        })
    }).then((r) => r.json())
}

//

const GET = () => {
    return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/sites/${liferayId}/blog-postings`,{
        method: 'GET',
    }).then((r) => r.json())
}

//

const UPDATE = (liferayId, headline, articleBody) => {
    return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/sites/${liferayId}/blog-postings`,{
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

const DELETE = (id) => {
    return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/sites/${id}/blog-postings`,{
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json'
        }
    }).then((r) => r.json())
}

export { GET, POST, UPDATE, DELETE }