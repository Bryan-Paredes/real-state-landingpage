/* eslint-disable @next/next/no-img-element */

import { Card, CardFooter, CardTitle } from "@/components/UI/card";
import { CategoriesInfo } from "@/lib/categories";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({
  category,
  index,
}: {
  category: CategoriesInfo;
  index: number;
}) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="w-full h-full rounded-xl"
    >
      <Card
        key={index}
        className="w-full h-fit p-1 rounded-2xl flex flex-wrap flex-col gap-2 drop-shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out"
      >
        <Image
          alt={category.name}
          src={category.image ? category.image[0] : "/assets/404-not-found.jpg"}
          decoding="async"
          width={600}
          height={600}
          className="rounded-2xl aspect-[calc(4*3+1)/18] object-cover"
        />
        <CardFooter className="before:bg-white/10">
          <CardTitle className="font-bold text-xl text-center">
            {category.name}
          </CardTitle>
        </CardFooter>
      </Card>
    </Link>
  );
}
