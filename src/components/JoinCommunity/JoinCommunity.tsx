import { FaRegPaperPlane } from "react-icons/fa";
import { Transition } from "../Transition";
import { IoMdMailUnread } from "react-icons/io";

export function JoinCommunity() {
  return (
    <Transition className="max-w-4xl mx-auto items-center px-4 py-8 my-10 md:gap-28 rounded-2xl bg-secondary/50 drop-shadow-lg">
      <div className="mx-auto p-6 flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-white">
          <IoMdMailUnread size={35} />
          Novedades y actualizaciones
        </h2>
        <p className="text-secondary-foreground text-sm">
          ¡Únete a la comunidad y recibe actualizaciones sobre nuevas
          propiedades!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-5">
          <input
            required
            type="email"
            name="email"
            id="email"
            className="w-full md:w-[40%] rounded-xl p-2 bg-transparent border-2 border-white text-white outline-none focus:border-secondary-foreground placeholder:text-white"
            placeholder="Email"
          />
          <button className="flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-xl text-secondary-foreground font-bold">
            <FaRegPaperPlane className="" />
            <span className="">Suscribirme</span>
          </button>
        </div>
      </div>
    </Transition>
  );
}
