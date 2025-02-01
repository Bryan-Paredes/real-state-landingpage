import { RiSearch2Line } from "react-icons/ri";

export function SearchButton() {
  return (
    <div className="flex items-center justify-center p-4 text-white rounded-full  bg-secondary cursor-pointer">
      <RiSearch2Line size={30} />
    </div>
  );
}
