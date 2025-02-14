import { getCategories } from "@/lib/get-categories";
import CategoryCard from "./CategoryCard";
import { CategoriesInfo } from "@/lib/categories";

export default async function Categories() {
  // const categories = await getCategories();

  return (
    <section
      id="categories"
      className="container py-10 px-4 md:px-20 lg:px-40 rounded-xl"
    >
      <h2 className="text-secondary text-center text-xl my-10">Categorías</h2>
      <div className=" flex flex-col md:flex-row items-center justify-between gap-3 mb-4 mt-6 sm:mt-8 lg:mb-0 xl:gap-8">
        <>
          {CategoriesInfo.length === 0 ? (
            <p className="font-bold text-2xl text-center text-secondary-foreground">
              No se encontraron categorías
            </p>
          ) : (
            CategoriesInfo.map((category, index) => (
              <CategoryCard key={index} category={category} index={index} />
            ))
          )}
        </>
      </div>
    </section>
  );
}
