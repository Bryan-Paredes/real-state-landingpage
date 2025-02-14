/* eslint-disable @next/next/no-img-element */
import { getPropertieInfo } from "@/lib/get-propertie-info";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";
import {
  LiaBathSolid,
  LiaBedSolid,
  LiaRulerCombinedSolid,
  LiaStarSolid,
} from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeftLong } from "react-icons/fa6";
import SlideProperty from "@/components/SlidePropertie";
import { DataProperties, dataProperties } from "@/lib/data-properties";

interface Property {
  title: string;
  slug: string;
  description: any;
  location: string;
  price: number;
  bedrooms: number;
  bathroom: number;
  star: number;
  meters: number;
  images: any;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const propertyFiltered = dataProperties.filter(
    (property: DataProperties) => property.slug === slug
  );

  const categorySlug = propertyFiltered[0].categoria;

  // const { propertieBySlug } = await getPropertieInfo({ slug });

  // const categorySlug = propertieBySlug[0].property_category.slug;

  return (
    <main className="max-w-5xl mx-auto my-7">
      <Link href={`/categories/${categorySlug}`}>
        <div className="max-w-24 flex items-center justify-start gap-2 hover:text-secondary hover:-translate-x-2 transition-transform duration-300">
          <h2 className="px-6 flex items-center gap-2 text-lg">
            <FaArrowLeftLong />
            <span>Regresar</span>
          </h2>
        </div>
      </Link>
      <div className=" my-3 py-5">
        <div className="px-6 my-auto">
          {propertyFiltered.map((property: DataProperties) => (
            <section
              key={property.slug}
              className="flex flex-col items-center justify-between gap-10"
            >
              {property.images && property.images.length > 0 ? (
                <SlideProperty image={property.images} />
              ) : (
                <p>No se encuentra ninguna imagen</p>
              )}
              <div className="bg-white p-3 rounded-xl max-w-[650px] mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-secondary flex flex-col justify-center items-start gap-5 text-balance my-10">
                  <span>{property.titulo}</span>
                  <span className="font-semibold">
                    {formatPrice(property.precio)}
                  </span>
                </h1>
                <div className="flex gap-5 my-4">
                  <h2 className="flex gap-3 text-xl items-center">
                    <TfiLocationPin /> {property.ubicacion}
                  </h2>
                  <div className="flex items-center px-2 py-1 rounded-lg bg-secondary text-white top-2 right-2">
                    <LiaStarSolid />
                    <span className="ml-1 font-semibold">
                      {property.puntuacion}
                    </span>
                  </div>
                </div>
                <div className="gap-4 flex mt-4">
                  <div className="flex items-center justify-center px-2 py-1 my-1 rounded-lg bg-slate-300/30">
                    <LiaBedSolid />
                    <span className="ml-2">{property.habitaciones}</span>
                  </div>
                  <div className="flex items-center justify-center px-2 py-1 my-1 rounded-lg bg-slate-300/30">
                    <LiaBathSolid />
                    <span className="ml-2">{property.baños}</span>
                  </div>
                  <div className="flex items-center justify-center px-2 py-1 my-1 rounded-lg bg-slate-300/30">
                    <LiaRulerCombinedSolid />
                    <span className="ml-2">{property.metros}</span>
                  </div>
                </div>
                <div className="my-6 text-balance text-lg font-medium">
                  {property.descripcion}
                </div>
              </div>
            </section>
          ))}
        </div>
        {/* <Form house={house} /> */}
      </div>
    </main>
  );
}
