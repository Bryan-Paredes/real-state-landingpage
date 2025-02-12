import { query } from './strapi'

const { STRAPI_HOST } = process.env

interface Property {
    name: string;
    slug: string;
    description: string;
    price: number;
    location: string;
    bedrooms: number;
    bathroom: number;
    star: number;
    meters: number;
    images: [
        {
            url: string;
        }
    ],
};


export function getFilteredPropertie({ categorySlug, sort, pageSize, page }: { categorySlug: string, sort: string | undefined, pageSize: number, page: string | undefined }) {

    let url = `properties?filters[property_category][slug][$contains]=${categorySlug}&populate[images][fields][0]=url`

    if (page) url += `&pagination[page]=${page}`
    if (pageSize) url += `&pagination[pageSize]=${pageSize}`
    if (sort) url += `&sort=price`

    return query(url)
        .then(res => {
            const { data, meta } = res
            const properties = data.map((property: Property) => {
                const { name, slug, bedrooms, bathroom, star, meters, images: rawImages, price, location } = property
                const images = `${STRAPI_HOST}${rawImages[0].url}`
                return { name, slug, bedrooms, price, location, images, bathroom, star, meters }
            })

            return { properties, pagination: meta.pagination }
        })
}