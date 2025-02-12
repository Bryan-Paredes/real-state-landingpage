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
    <footer className="container px-4 py-8 md:py-46 md:px-36 shadow-lg border-2 rounded-xl my-6">
      <section className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 items-center justify-center max-w-3xl mx-auto text-center sm:text-left">
        {dataFooter.map(({ id, links }) => (
          <div key={id} className="flex flex-col gap-2">
            {links.map(({ id, name, link }) => (
              <Link key={id} href={link} className="hover:text-secondary">
                {name}
              </Link>
            ))}
          </div>
        ))}
        <div className="md:text-right">
          <h4 className="mb-6 text-xl font-semibold">PruebaRealState</h4>
          <p>Calle Inventada, 5</p>
          <p>Madrid, España</p>
          <div className="flex items-center gap-4 mt-5 justify-center md:justify-end">
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
      </section>
      <hr className="border border-secondary-foreground/30 w-full my-7" />
      <span className="text-center text-sm mx-auto">
        &copy; {new Date().getFullYear()} PruebaRealState. Todos los derechos
        reservados.
      </span>
    </footer>
  );
}
