"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="sm:sticky sm:top-0 z-40">
      <header className=" navbar justify-between px-5 py-0 bg-base-100 h-[10vh] shadow-md shadow-[var(--shadow)] z-auto">
        <div className="h-[40px] sm:h-[60px]">
          <Link  href={"/"} className="btn btn-ghost w-full h-full normal-case text-3xl overflow-hidden">
            <Image
              src={"/img/Vector.png"}
              alt="logo"
              width={100}
              height={100}
              className=" w-full h-full p-1 object-cover"
            />
          </Link>
        </div>
        <div className="flex-none space-x-3">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle group text-primary hover:text-white hover:bg-primary"
            >
              <div className="indicator ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full p-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item top-3 left-3 text-primary group-hover:scale-150 group-hover:-translate-y-5 group-hover:-translate-x-[1px]">
                  8
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-40 card card-compact dropdown-content w-36 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block text-xs">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="join ">
            <Link
              href="/signin"
              className="btn btn-xs sm:btn-sm btn-primary hover:bg-white text-white hover:text-primary border-1 border-primary join-item duration-700"
            >
              Sign in
            </Link>

            <Link
              href="/signup"
              className="btn btn-xs sm:btn-sm  btn-primary hover:bg-white text-white hover:text-primary border-1 border-primary join-item duration-700"
            >
              Sign up
            </Link>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-16 rounded-full">
                <Image
                  src="/img/bg.jpg"
                  alt="bg"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-40 p-2 shadow bg-base-100 rounded-box w-36 duration-300"
            >
              <li>
                <Link
                  href="/profile"
                  className=" text-primary font-semibold hover:text-white hover:bg-primary"
                >
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsOpen(true)}
                  className=" text-primary font-semibold hover:text-white hover:bg-primary"
                >
                  Help
                </button>
              </li>
              <li>
                <a className=" text-primary font-semibold hover:text-white hover:bg-red-500">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <section
        className={[
          `fixed top-0 -right-full z-40 w-full h-full md:w-[33%] md:-right-[33%] bg-base-100 shadow-xl shadow-primary duration-500 md:rounded-tl-3xl md:rounded-bl-3xl overflow-auto ${
            isOpen ? "-translate-x-full " : "translate-x-full "
          } `,
        ]}
      >
        <button
          className="absolute top-3 right-3 z-50 hover:scale-125 duration-300"
          onClick={() => setIsOpen(false)}
        >
          <svg
            className="swap-on fill-current text-primary"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </button>
        <article className="w-full h-full relative">
          <h3 className="text-primary text-2xl font-extrabold uppercase mt-10 mx-10 mb-3">
            help center
          </h3>

          <aside className="relative flex items-center w-[85%] h-10 px-10 border-2 border-[var(--shadow)] py-3 rounded-lg mx-auto">
            <input
              className="input text-primary text-sm font-semibold w-full rounded-md placeholder:text-[var(--shadow)] placeholder:font-semibold placeholder:uppercase focus:outline-none bg-transparent"
              placeholder="what are you looking for"
            />

            <div
              type="button"
              className="absolute start-1 top-1/2 -translate-y-1/2 rounded-md p-2 text-[var(--shadow)] transition hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </aside>

          <aside className="grid grid-cols-9 gap-3 w-full hover:bg-primary py-4 px-8 hover:bg-opacity-10 rounded-lg group my-8">
            <div className="col-span-4 flex flex-col justify-center items-start h-36">
              <Image
                src="/img/baby-toys.jpg"
                alt="baby"
                width={300}
                height={300}
                className="w-full h-full object-cover object-center rounded-2xl"
              />
            </div>
            <div className="col-span-4 flex flex-col justify-center items-start h-36">
              <h3 className=" text-primary text-md md:text-xl font-bold mb-2">
                Welcome everyone. Enter our website
              </h3>
              <p className=" text-primary text-sm sm:text-md font-medium">
                Get to know our website within 3 minutes.
              </p>
            </div>
            <button className=" col-span-1 flex items-center justify-end opacity-0 group-hover:opacity-100 duration-300">
              {" "}
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 0C22.4621 0 17.0486 1.64217 12.444 4.71885C7.83947 7.79553 4.25064 12.1685 2.13139 17.2849C0.012132 22.4012 -0.542361 28.0311 0.538025 33.4625C1.61841 38.894 4.28515 43.8831 8.20102 47.799C12.1169 51.7148 17.106 54.3816 22.5375 55.462C27.9689 56.5424 33.5988 55.9879 38.7151 53.8686C43.8315 51.7494 48.2045 48.1605 51.2811 43.556C54.3578 38.9514 56 33.5379 56 28C56 24.323 55.2758 20.682 53.8686 17.2849C52.4615 13.8877 50.399 10.801 47.799 8.20101C45.199 5.60097 42.1123 3.5385 38.7151 2.13137C35.318 0.724241 31.677 0 28 0ZM22.4 40.6V15.4L39.2 28L22.4 40.6Z"
                  fill="#841504"
                />
              </svg>
            </button>
          </aside>

          <aside className="grid grid-cols-2 gap-5 w-full px-5 sm:px-20 rounded-lg group my-8">
            <div className="col-span-1 flex flex-col justify-center items-start hover:bg-primary hover:bg-opacity-10 rounded-lg p-5">
              <div className=" h-20 w-full overflow-hidden">
                <Image
                  src="/img/toy.jpg"
                  alt="toy"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover object-center rounded-xl"
                />
              </div>
              <h3 className=" text-primary text-sm md:text-lg font-bold mt-3 mb-1">
                VDO how to
              </h3>
              <p className=" text-primary text-xs sm:text-sm font-medium">
                Get to know our website within 3 minutes.
              </p>
            </div>

            <div className="col-span-1 flex flex-col justify-center items-start hover:bg-primary hover:bg-opacity-10 rounded-lg p-5">
              <div className=" h-20 w-full overflow-hidden">
                <Image
                  src="/img/toy.jpg"
                  alt="toy"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover object-center rounded-xl"
                />
              </div>
              <h3 className=" text-primary text-sm md:text-lg font-bold mt-3 mb-1">
                VDO how to
              </h3>
              <p className=" text-primary text-xs sm:text-sm font-medium">
                Get to know our website within 3 minutes.
              </p>
            </div>

            <div className="col-span-1 flex flex-col justify-center items-start hover:bg-primary hover:bg-opacity-10 rounded-lg p-5">
              <div className=" h-20 w-full overflow-hidden">
                <Image
                  src="/img/toy.jpg"
                  alt="toy"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover object-center rounded-xl"
                />
              </div>
              <h3 className=" text-primary text-sm md:text-lg font-bold mt-3 mb-1">
                VDO how to
              </h3>
              <p className=" text-primary text-xs sm:text-sm font-medium">
                Get to know our website within 3 minutes.
              </p>
            </div>

            <div className="col-span-1 flex flex-col justify-center items-start hover:bg-primary hover:bg-opacity-10 rounded-lg p-5">
              <div className=" h-20 w-full overflow-hidden">
                <Image
                  src="/img/toy.jpg"
                  alt="toy"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover object-center rounded-xl"
                />
              </div>
              <h3 className=" text-primary text-sm md:text-lg font-bold mt-3 mb-1">
                VDO how to
              </h3>
              <p className=" text-primary text-xs sm:text-sm font-medium">
                Get to know our website within 3 minutes.
              </p>
            </div>

           
          </aside>

          <footer className="footer footer-center absolute bottom-0 p-4 bg-primary h-[60px]  ">
            <aside className="w-full h-full flex items-center justify-evenly">
              <button className="text-white font-bold text-xs uppercase">
                help dask
              </button>
              <button className="text-white font-bold text-xs uppercase">
                help dask
              </button>
              <button className="text-white font-bold text-xs uppercase">
                help dask
              </button>
            </aside>
          </footer>
        </article>
      </section>
    </main>
  );
};

export default Header;
