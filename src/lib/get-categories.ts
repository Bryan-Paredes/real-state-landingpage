import { query } from './strapi'

const { STRAPI_HOST } = process.env

interface Category {
    name: string;
    slug: string;
    description: string;
    image: {
        url: string;
    };
}

export function getCategories() {
    return query('propertie-categories?fields[0]=name&fields[1]=slug&fields[2]=description&populate[image][fields][0]=url')
        .then(res => {
            return res.data.map((category: Category) => {
                const { name, slug, description, image: rawImage } = category
                const image = `${STRAPI_HOST}${rawImage.url}`
                return { name, slug, description, image }
            })
        })
}