/* eslint-disable @next/next/no-img-element */
import { redirect } from "next/navigation";
import { getFilteredPropertie } from "@/lib/get-propertie";
import SortBy from "@/components/SortBy";
import Link from "next/link";
import {
  LiaBathSolid,
  LiaBedSolid,
  LiaRulerCombinedSolid,
  LiaStarSolid,
} from "react-icons/lia";
import { formatPrice } from "@/utils/formatPrice";
import PaginationComponent from "@/components/Pagination";
import { FaArrowLeftLong } from "react-icons/fa6";

interface Property {
  name: string;
  slug: string;
  description: string[];
  location: string;
  price: number;
  bedrooms: number;
  bathroom: number;
  star: number;
  meters: number;
  images: string;
}

const PAGE_SIZE = 9;

export default async function PropertiesPage({
  params,
  searchParams,
}: {
  params: Promise<{ categorySlug: string }>;
  searchParams: { [key: string]: string | undefined };
}) {
  const categorySlug = (await params).categorySlug;
  const { page, sortBy } = searchParams;

  if (!categorySlug) return redirect("/not-found");

  const { properties, pagination } = await getFilteredPropertie({
    categorySlug,
    page,
    sort: sortBy,
    pageSize: PAGE_SIZE,
  });

  return (
    <section className="container px-16 py-5">
      <Link href="/#categories">
        <div className="max-w-24 flex items-center justify-start gap-2 text-base hover:text-secondary hover:-translate-x-2 transition-transform duration-300">
          <FaArrowLeftLong />
          <h2>Regresar</h2>
        </div>
      </Link>
      <h3 className="text-3xl font-bold my-4 text-secondary flex justify-center items-center gap-2">
        Categoría:
        <span className="capitalize"> {categorySlug}</span>
      </h3>
      <div className="my-8 flex items-center justify-center">
        {properties.length > 0 && <SortBy />}
      </div>
      {properties.length === 0 ? (
        <div className="w-full max-w-md flex">
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">
              No se encuentra ninguna propiedad
            </h5>
          </div>
        </div>
      ) : (
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          {properties.map((propertie: Property) => (
            <div
              key={propertie.slug}
              className="w-full max-w-md bg-white border border-gray-300 rounded-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ease-in-out"
            >
              <Link href={`/propertie/${propertie.slug}`}>
                <div className="overflow-hidden inline-block rounded-lg w-full">
                  <img
                    src={propertie.images}
                    alt={propertie.name}
                    width={400}
                    height={400}
                    className="w-full h-[400px] object-cover rounded-lg hover:scale-[1.02] transition-all duration-300 ease-in-out"
                  />
                </div>
                <article className="px-3 py-5 flex flex-col gap-2 items-stretch justify-start rounded-b-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                      <p className="text-secondary text-lg">
                        {propertie.location}
                      </p>
                      <p className="font-semibold">
                        {formatPrice(propertie.price)}
                      </p>
                    </div>
                    <div className=" flex items-center justify-center px-2 py-1 rounded-lg bg-secondary/50 top-5 right-2 text-white">
                      <LiaStarSolid />
                      <span className="ml-1 font-semibold">
                        {propertie.star}
                      </span>
                    </div>
                  </div>
                  <div className="gap-4 mt-2 xl:flex">
                    <div className="flex items-center justify-center px-2 py-1 rounded-lg my-2 bg-slate-300/30">
                      <LiaBedSolid />
                      <span className="ml-2">{propertie.bedrooms}</span>
                    </div>
                    <div className="flex items-center justify-center px-2 py-1 rounded-lg my-2 bg-slate-300/30">
                      <LiaBathSolid />
                      <span className="ml-2">{propertie.bathroom}</span>
                    </div>
                    <div className="flex items-center justify-center px-2 py-1 rounded-lg my-2 bg-slate-300/30">
                      <LiaRulerCombinedSolid />
                      <span className="ml-2">{propertie.meters}</span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </article>
      )}
      {pagination.pageCount > 1 && (
        <PaginationComponent
          page={pagination.page}
          pageSize={pagination.pageSize}
          pageCount={pagination.pageCount}
          total={pagination.total}
        />
      )}
    </section>
  );
}
