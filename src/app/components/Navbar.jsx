"use cilent";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <main>
      <section className="w-full relative -top-5 max-w-screen-2xl hidden items-center justify-around px-5 mx-auto md:flex">
        <aside className="w-32 h-32 flex flex-col justify-center items-center mx-2 mt-3 hover:scale-110 hover:-translate-y-1 duration-500">
          <div className="w-[60px] h-[60px]">
            <Image
              src={"/img/game.png"}
              alt="game"
              width={100}
              height={100}
              className=" w-full h-full object-cover"
            />
          </div>

          <p className="text-[15px] font-bold text-primary">GAME</p>
        </aside>
        <aside className="w-32 h-32 flex flex-col justify-center items-center mx-2 mt-3 hover:scale-110 hover:-translate-y-1 duration-500">
          <div className="w-[60px] h-[60px]">
            <Image
              src={"/img/card.png"}
              alt="card"
              width={100}
              height={100}
              className=" w-full h-full object-cover"
            />
          </div>
          <p className="text-[15px] font-bold text-primary text-center">CARD</p>
        </aside>
        <aside className="w-32 h-32 flex flex-col justify-center items-center mx-2 mt-3 hover:scale-110 hover:-translate-y-1 duration-500">
          <div className="w-[60px] h-[60px]">
            <Image
              src={"/img/model.png"}
              alt="logo"
              width={100}
              height={100}
              className=" w-full h-full object-cover"
            />
          </div>
          <p className="text-[15px] font-bold text-primary text-center">
            MODEL
          </p>
        </aside>
        <aside className="w-32 h-32 flex flex-col justify-center items-center mx-2 mt-3 hover:scale-110 hover:-translate-y-1 duration-500">
          <div className="w-[60px] h-[60px]">
            <Image
              src={"/img/doll.png"}
              alt="doll"
              width={100}
              height={100}
              className=" w-full h-full object-cover"
            />
          </div>
          <p className="text-[15px] font-bold text-primary text-center">DOLL</p>
        </aside>
        <aside className="w-32 h-32 flex flex-col justify-center items-center mx-2 mt-3 hover:scale-110 hover:-translate-y-1 duration-500">
          <div className="w-[60px] h-[60px]">
            <Image
              src={"/img/car.png"}
              alt="car"
              width={100}
              height={100}
              className=" w-full h-full object-cover"
            />
          </div>
          <p className="text-[15px] font-bold text-primary text-center">CAR</p>
        </aside>
        <aside className="w-32 h-32 flex flex-col justify-center items-center mx-2 mt-3 hover:scale-110 hover:-translate-y-1 duration-500">
          <div className="w-[60px] h-[60px]">
            <Image
              src={"/img/other.png"}
              alt="oter"
              width={100}
              height={100}
              className=" w-full h-full object-cover"
            />
          </div>
          <p className="text-[15px] font-bold text-primary text-center">
            OTHER
          </p>
        </aside>
      </section>
    </main>
  );
};

export default Navbar;
