import {
  LiaYoutube,
  LiaInstagram,
  LiaLinkedinIn,
  LiaPinterestP,
} from "react-icons/lia";
import { dataFooter } from "./Footer.data";
import Link from "next/link";

export function Footer() {
  return (
    <div className="px-4 py-8 md:py-46 md:px-36 bg-black/90 ">
      <div className="grid gap-8 grid-cols-2 md:grid-cols-[1fr,1fr,1fr,_400px] text-white">
        {dataFooter.map(({ id, links }) => (
          <div key={id}>
            {links.map(({ id, name, link }) => (
              <Link
                key={id}
                href={link}
                className="block hover:text-white hover:border-b-[1px] hover:border-white"
              >
                {name}
              </Link>
            ))}
          </div>
        ))}
        <div className="md:text-right">
          <h4 className="mb-6 text-xl font-semibold">PruebaRealState</h4>
          <p>Calle Inventada, 5</p>
          <p>Madrid, España</p>
          <div className="flex gap-4 mt-5 md:justify-end">
            <LiaInstagram
              className="text-3xl cursor-pointer hover:text-slate-400"
              href="#!"
            />
            <LiaLinkedinIn
              className="text-3xl cursor-pointer hover:text-slate-400"
              href="#!"
            />
            <LiaPinterestP
              className="text-3xl cursor-pointer hover:text-slate-400"
              href="#!"
            />
            <LiaYoutube
              className="text-3xl cursor-pointer hover:text-slate-400"
              href="#!"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
