import { query } from './strapi'

const { STRAPI_HOST } = process.env

interface Property {
    title: string;
    slug: string;
    description: string;
    price: number;
    location: string;
    bedrooms: number;
    bathroom: number;
    phone: string;
    star: number;
    meters: number;
    images: [
        {
            url: string;
        }
    ],
    property_category: {
        slug: string;
    }
};

export function getPropertieInfo({ slug }: { slug: string }) {
    return query(`properties?filters[slug][$eq]=${slug}&populate[images][fields][0]=url&populate[property_category][fields][1]=slug`)
        .then(res => {
            const { data } = res

            const propertieBySlug = data.map((property: Property) => {
                const { title, slug, location, price, bedrooms, bathroom, star, meters, phone, description, images: rawImages, property_category } = property;

                // const images = `${STRAPI_HOST}${rawImages[0].url}`
                const images = (rawImages || []).map((image: any) => ({
                    ...image,
                    url: `${STRAPI_HOST}${image.url}`,
                }))

                return { title, slug, location, price, bedrooms, bathroom, star, meters, phone, description, images, property_category }
            })

            return { propertieBySlug }
        })
} 