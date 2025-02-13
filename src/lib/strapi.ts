
const { STRAPI_HOST, STRAPI_TOKEN } = process.env

export function query(url: string) {
    return fetch(`${STRAPI_HOST}/api/${url}`).then(res => res.json())
}
