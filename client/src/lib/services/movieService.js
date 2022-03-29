import client from '../client'

const movie = `
title,
"slug": slug1.current,
"actor": actor->name.current,
"actoor": actoors->name.current,
plot,
"poster": poster{asset->{url}},
 
`

const actor = `
actor,
"slug": name.current,
actorTextField,
"poster": poster{asset->{url}},
"movie": movie->slug.current,
`

export async function getMovies (_title) {
    const data = await client.fetch(`*[_type == "movie"]{${movie}}`)
    console.log(data);
    return data
}

export async function getActor () {
    const data = await client.fetch(`*[_type == "actor"]{${actor}}`)
    console.log(data);
    return data
};