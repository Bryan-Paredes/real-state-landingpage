export interface CategoriesInfo {
    id: number,
    name: string,
    slug: string,
    description: string,
    image: string[]
}

export const CategoriesInfo: CategoriesInfo[] = [
    {
        id: 1,
        name: "Cabañas",
        slug: "cabanas",
        description: "Propiedades acogedoras de madera o piedra, ubicadas en entornos naturales, perfectas para disfrutar de la tranquilidad y el aire libre.",
        image: ['/assets/properties/propertie14.jpeg', '/assets/properties/propertie2.jpeg', '/assets/properties/propertie3.jpeg']
    },
    {
        id: 2,
        name: "Campo",
        slug: "campo",
        description: "Casas rurales y fincas situadas en el campo, ideales para quienes buscan un estilo de vida relajado rodeado de naturaleza y paisajes verdes.",
        image: ['/assets/properties/propertie4.jpeg', '/assets/properties/propertie2.jpeg', '/assets/properties/propertie3.jpeg']
    },
    {
        id: 3,
        name: "Mansiones",
        slug: "mansiones",
        description: "Grandes y lujosas propiedades con amplios espacios, acabados de alta gama y comodidades exclusivas como jardines, piscinas y vistas panorámicas.",
        image: ['/assets/properties/propertie15.jpeg', '/assets/properties/propertie2.jpeg', '/assets/properties/propertie3.jpeg']
    },
    {
        id: 4,
        name: "Tropical",
        slug: "tropical",
        description: "Viviendas situadas en zonas cálidas y costeras, con acceso a playas, vegetación exótica y un ambiente paradisíaco para disfrutar del sol y el mar.",
        image: ['/assets/properties/propertie16.jpeg', '/assets/properties/propertie2.jpeg', '/assets/properties/propertie3.jpeg']
    }
]