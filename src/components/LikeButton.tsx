"use client";

import { FaRegHeart } from "react-icons/fa";

export default function LikeButton() {
  return (
    <div>
      <button
        className="text-red-600 hover:text-red-300 transition-colors duration-300 cursor-pointer"
        onClick={() => console.log("Like")}
      >
        <FaRegHeart size={24} color={""} />
      </button>
    </div>
  );
}
