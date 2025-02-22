"use client";

import { FaRegPaperPlane } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { toast } from "@pheralb/toast";
import confetti from "canvas-confetti";

export function JoinCommunity() {
  const onSubmit = (e: any) => {
    e.preventDefault();
    toast.success({
      text: "¡Gracias por suscribirte!",
    });
    confetti({
      particleCount: 200,
      spread: 70,
    });
  };

  return (
    <section className="mx-4">
      <div className="max-w-4xl flex flex-col justify-center p-6 gap-2 bg-secondary/50 drop-shadow-lg my-10 rounded-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-white">
          <IoMdMailUnread size={35} />
          Novedades y actualizaciones
        </h2>
        <p className="text-secondary-foreground text-sm">
          ¡Únete a la comunidad y recibe actualizaciones sobre nuevas
          propiedades!
        </p>

        <form
          onSubmit={onSubmit}
          className="flex flex-col sm:flex-row gap-4 mt-5"
        >
          <input
            required
            type="email"
            name="email"
            id="email"
            className="w-full md:w-[40%] rounded-xl p-2 bg-transparent border-2 border-white text-white outline-none focus:border-secondary-foreground placeholder:text-white"
            placeholder="Email"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-xl text-secondary-foreground font-bold"
          >
            <FaRegPaperPlane className="" />
            <span className="">Suscribirme</span>
          </button>
        </form>
      </div>
    </section>
  );
}
