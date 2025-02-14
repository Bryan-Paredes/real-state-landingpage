"use client";
import { MdOutlinePriceChange } from "react-icons/md";

export default function SortBy({
  filter,
  sortByPrice,
  resetFilter,
}: {
  filter: boolean;
  sortByPrice: () => void;
  resetFilter: () => void;
}) {
  // const router = useRouter();
  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  // const currentFilter = searchParams.get("sortBy") ?? "all";

  // const handleClick = (filter: string) => () => {
  //   const query = filter === "all" ? "" : `?sortBy=${filter}`;
  //   router.push(`${pathname}${query}`);
  // };

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={resetFilter}
        className={`px-4 py-2 rounded-full border-2 border-secondary-foreground focus:ring-2 focus:ring-secondary-foreground text-secondary-foreground font-bold cursor-pointer ${
          filter === false ? "bg-secondary text-white border-white" : ""
        }`}
      >
        Defecto
      </button>
      <button
        type="button"
        onClick={sortByPrice}
        className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full border-2 border-secondary-foreground focus:ring-2 focus:ring-secondary-foreground text-secondary-foreground font-bold transition-all duration-300 ease-in-out cursor-pointer ${
          filter === true ? "bg-secondary text-white border-white" : ""
        }`}
      >
        <MdOutlinePriceChange size={26} />
        Filtro por precio
      </button>
    </div>
  );
}
