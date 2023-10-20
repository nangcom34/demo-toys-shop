"use client";
import React from "react";
import Image from "next/image";

const AllProducts = () => {
  return (
    <main>
      <section className=" flex items-center justify-center w-[70vw] mx-auto md:w-[50vw] lg:w-[30vw] mt-5 md:mt-0">
        <select className="select select-primary text-primary font-semibold rounded-r-none">
          <option disabled selected>
            MENU
          </option>
          <option>GAME</option>
          <option>CARD</option>
          <option>MODEL</option>
          <option>DOLL</option>
          <option>CAR</option>
          <option>OTHER</option>
        </select>

        <input
          className="input input-primary text-primary w-full rounded-md rounded-l-none placeholder:text-[var(--shadow)]"
          placeholder="Search"
        />
        <div className="indicator">
          <button
            type="button"
            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-primary p-2 text-white transition hover:scale-110"
          >
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
          </button>
        </div>
      </section>

      <section className="mx-auto grid  gap-6 p-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        <article className="rounded-xl bg-base-100 p-3 shadow-lg shadow-[var(--shadow)] hover:shadow-xl hover:transform hover:scale-105 duration-300 group">
          <a href="#">
            <div className="relative flex items-end overflow-hidden px-3 w-full">
              <Image
                src="/img/robot.jpg"
                alt="Hotel Photo"
                width={500}
                height={500}
                className="rounded-xl object-cover object-center w-full h-full xl:h-72"
              />
              <div className="rating absolute top-1 right-4">
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-red-600"
                />
              </div>
            </div>

            <aside className="mt-1 p-3">
              <div className=" flex items-center justify-between">
                <div>
                  {" "}
                  <h2 className="text-primary font-semibold text-sm sm:text-lg">
                    Robot 1/1
                  </h2>
                  <p className="mt-1 text-xs sm:text-md text-[var(--shadow)] font-medium">
                    Model
                  </p>
                </div>
                <div className=" flex flex-col items-center justify-center">
                  <h3 className="text-primary font-semibold text-sm sm:text-lg">
                    4.5
                  </h3>
                  <div className="rating rating-half rating-xs group-hover:scale-90">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="mt-1 text-[10px] sm:text-xs text-[var(--shadow)] font-medium">
                  stock ( 999 )
                </p>
              </div>
              <div className="mt-3 flex items-end justify-between">
                <p className=" text-sm sm:text-lg font-bold text-primary">
                  850 .-
                </p>

                <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-primary-content duration-100 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4 hidden sm:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>

                  <button className="text-[9px] sm:text-sm">Add to cart</button>
                </div>
              </div>
            </aside>
          </a>
        </article>

        <article className="rounded-xl bg-base-100 p-3 shadow-lg shadow-[var(--shadow)] hover:shadow-xl hover:transform hover:scale-105 duration-300 group">
          <a href="#">
            <div className="relative flex items-end overflow-hidden px-3 w-full">
              <Image
                src="/img/robot.jpg"
                alt="Hotel Photo"
                width={500}
                height={500}
                className="rounded-xl object-cover object-center w-full h-full xl:h-72"
              />
              <div className="rating absolute top-1 right-4">
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-red-600"
                />
              </div>
            </div>

            <aside className="mt-1 p-3">
              <div className=" flex items-center justify-between">
                <div>
                  {" "}
                  <h2 className="text-primary font-semibold text-sm sm:text-lg">
                    Robot 1/1
                  </h2>
                  <p className="mt-1 text-xs sm:text-md text-[var(--shadow)] font-medium">
                    Model
                  </p>
                </div>
                <div className=" flex flex-col items-center justify-center">
                  <h3 className="text-primary font-semibold text-sm sm:text-lg">
                    4.5
                  </h3>
                  <div className="rating rating-half rating-xs group-hover:scale-90">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="mt-1 text-[10px] sm:text-xs text-[var(--shadow)] font-medium">
                  stock ( 999 )
                </p>
              </div>
              <div className="mt-3 flex items-end justify-between">
                <p className=" text-sm sm:text-lg font-bold text-primary">
                  850 .-
                </p>

                <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-primary-content duration-100 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4 hidden sm:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>

                  <button className="text-[9px] sm:text-sm">Add to cart</button>
                </div>
              </div>
            </aside>
          </a>
        </article>

        <article className="rounded-xl bg-base-100 p-3 shadow-lg shadow-[var(--shadow)] hover:shadow-xl hover:transform hover:scale-105 duration-300 group">
          <a href="#">
            <div className="relative flex items-end overflow-hidden px-3 w-full">
              <Image
                src="/img/robot.jpg"
                alt="Hotel Photo"
                width={500}
                height={500}
                className="rounded-xl object-cover object-center w-full h-full xl:h-72"
              />
              <div className="rating absolute top-1 right-4">
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-red-600"
                />
              </div>
            </div>

            <aside className="mt-1 p-3">
              <div className=" flex items-center justify-between">
                <div>
                  {" "}
                  <h2 className="text-primary font-semibold text-sm sm:text-lg">
                    Robot 1/1
                  </h2>
                  <p className="mt-1 text-xs sm:text-md text-[var(--shadow)] font-medium">
                    Model
                  </p>
                </div>
                <div className=" flex flex-col items-center justify-center">
                  <h3 className="text-primary font-semibold text-sm sm:text-lg">
                    4.5
                  </h3>
                  <div className="rating rating-half rating-xs group-hover:scale-90">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="mt-1 text-[10px] sm:text-xs text-[var(--shadow)] font-medium">
                  stock ( 999 )
                </p>
              </div>
              <div className="mt-3 flex items-end justify-between">
                <p className=" text-sm sm:text-lg font-bold text-primary">
                  850 .-
                </p>

                <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-primary-content duration-100 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4 hidden sm:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>

                  <button className="text-[9px] sm:text-sm">Add to cart</button>
                </div>
              </div>
            </aside>
          </a>
        </article>

        <article className="rounded-xl bg-base-100 p-3 shadow-lg shadow-[var(--shadow)] hover:shadow-xl hover:transform hover:scale-105 duration-300 group">
          <a href="#">
            <div className="relative flex items-end overflow-hidden px-3 w-full">
              <Image
                src="/img/robot.jpg"
                alt="Hotel Photo"
                width={500}
                height={500}
                className="rounded-xl object-cover object-center w-full h-full xl:h-72"
              />
              <div className="rating absolute top-1 right-4">
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-red-600"
                />
              </div>
            </div>

            <aside className="mt-1 p-3">
              <div className=" flex items-center justify-between">
                <div>
                  {" "}
                  <h2 className="text-primary font-semibold text-sm sm:text-lg">
                    Robot 1/1
                  </h2>
                  <p className="mt-1 text-xs sm:text-md text-[var(--shadow)] font-medium">
                    Model
                  </p>
                </div>
                <div className=" flex flex-col items-center justify-center">
                  <h3 className="text-primary font-semibold text-sm sm:text-lg">
                    4.5
                  </h3>
                  <div className="rating rating-half rating-xs group-hover:scale-90">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="mt-1 text-[10px] sm:text-xs text-[var(--shadow)] font-medium">
                  stock ( 999 )
                </p>
              </div>
              <div className="mt-3 flex items-end justify-between">
                <p className=" text-sm sm:text-lg font-bold text-primary">
                  850 .-
                </p>

                <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-primary-content duration-100 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4 hidden sm:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>

                  <button className="text-[9px] sm:text-sm">Add to cart</button>
                </div>
              </div>
            </aside>
          </a>
        </article>

        <article className="rounded-xl bg-base-100 p-3 shadow-lg shadow-[var(--shadow)] hover:shadow-xl hover:transform hover:scale-105 duration-300 group">
          <a href="#">
            <div className="relative flex items-end overflow-hidden px-3 w-full">
              <Image
                src="/img/robot.jpg"
                alt="Hotel Photo"
                width={500}
                height={500}
                className="rounded-xl object-cover object-center w-full h-full xl:h-72"
              />
              <div className="rating absolute top-1 right-4">
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-red-600"
                />
              </div>
            </div>

            <aside className="mt-1 p-3">
              <div className=" flex items-center justify-between">
                <div>
                  {" "}
                  <h2 className="text-primary font-semibold text-sm sm:text-lg">
                    Robot 1/1
                  </h2>
                  <p className="mt-1 text-xs sm:text-md text-[var(--shadow)] font-medium">
                    Model
                  </p>
                </div>
                <div className=" flex flex-col items-center justify-center">
                  <h3 className="text-primary font-semibold text-sm sm:text-lg">
                    4.5
                  </h3>
                  <div className="rating rating-half rating-xs group-hover:scale-90">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="mt-1 text-[10px] sm:text-xs text-[var(--shadow)] font-medium">
                  stock ( 999 )
                </p>
              </div>
              <div className="mt-3 flex items-end justify-between">
                <p className=" text-sm sm:text-lg font-bold text-primary">
                  850 .-
                </p>

                <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-primary-content duration-100 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4 hidden sm:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>

                  <button className="text-[9px] sm:text-sm">Add to cart</button>
                </div>
              </div>
            </aside>
          </a>
        </article>

        <article className="rounded-xl bg-base-100 p-3 shadow-lg shadow-[var(--shadow)] hover:shadow-xl hover:transform hover:scale-105 duration-300 group">
          <a href="#">
            <div className="relative flex items-end overflow-hidden px-3 w-full">
              <Image
                src="/img/robot.jpg"
                alt="Hotel Photo"
                width={500}
                height={500}
                className="rounded-xl object-cover object-center w-full h-full xl:h-72"
              />
              <div className="rating absolute top-1 right-4">
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-red-600"
                />
              </div>
            </div>

            <aside className="mt-1 p-3">
              <div className=" flex items-center justify-between">
                <div>
                  {" "}
                  <h2 className="text-primary font-semibold text-sm sm:text-lg">
                    Robot 1/1
                  </h2>
                  <p className="mt-1 text-xs sm:text-md text-[var(--shadow)] font-medium">
                    Model
                  </p>
                </div>
                <div className=" flex flex-col items-center justify-center">
                  <h3 className="text-primary font-semibold text-sm sm:text-lg">
                    4.5
                  </h3>
                  <div className="rating rating-half rating-xs group-hover:scale-90">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="mt-1 text-[10px] sm:text-xs text-[var(--shadow)] font-medium">
                  stock ( 999 )
                </p>
              </div>
              <div className="mt-3 flex items-end justify-between">
                <p className=" text-sm sm:text-lg font-bold text-primary">
                  850 .-
                </p>

                <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-primary-content duration-100 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4 hidden sm:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>

                  <button className="text-[9px] sm:text-sm">Add to cart</button>
                </div>
              </div>
            </aside>
          </a>
        </article>

        <article className="rounded-xl bg-base-100 p-3 shadow-lg shadow-[var(--shadow)] hover:shadow-xl hover:transform hover:scale-105 duration-300 group">
          <a href="#">
            <div className="relative flex items-end overflow-hidden px-3 w-full">
              <Image
                src="/img/robot.jpg"
                alt="Hotel Photo"
                width={500}
                height={500}
                className="rounded-xl object-cover object-center w-full h-full xl:h-72"
              />
              <div className="rating absolute top-1 right-4">
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-red-600"
                />
              </div>
            </div>

            <aside className="mt-1 p-3">
              <div className=" flex items-center justify-between">
                <div>
                  {" "}
                  <h2 className="text-primary font-semibold text-sm sm:text-lg">
                    Robot 1/1
                  </h2>
                  <p className="mt-1 text-xs sm:text-md text-[var(--shadow)] font-medium">
                    Model
                  </p>
                </div>
                <div className=" flex flex-col items-center justify-center">
                  <h3 className="text-primary font-semibold text-sm sm:text-lg">
                    4.5
                  </h3>
                  <div className="rating rating-half rating-xs group-hover:scale-90">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="mt-1 text-[10px] sm:text-xs text-[var(--shadow)] font-medium">
                  stock ( 999 )
                </p>
              </div>
              <div className="mt-3 flex items-end justify-between">
                <p className=" text-sm sm:text-lg font-bold text-primary">
                  850 .-
                </p>

                <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-primary-content duration-100 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4 hidden sm:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>

                  <button className="text-[9px] sm:text-sm">Add to cart</button>
                </div>
              </div>
            </aside>
          </a>
        </article>

        <article className="rounded-xl bg-base-100 p-3 shadow-lg shadow-[var(--shadow)] hover:shadow-xl hover:transform hover:scale-105 duration-300 group">
          <a href="#">
            <div className="relative flex items-end overflow-hidden px-3 w-full">
              <Image
                src="/img/robot.jpg"
                alt="Hotel Photo"
                width={500}
                height={500}
                className="rounded-xl object-cover object-center w-full h-full xl:h-72"
              />
              <div className="rating absolute top-1 right-4">
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-red-600"
                />
              </div>
            </div>

            <aside className="mt-1 p-3">
              <div className=" flex items-center justify-between">
                <div>
                  {" "}
                  <h2 className="text-primary font-semibold text-sm sm:text-lg">
                    Robot 1/1
                  </h2>
                  <p className="mt-1 text-xs sm:text-md text-[var(--shadow)] font-medium">
                    Model
                  </p>
                </div>
                <div className=" flex flex-col items-center justify-center">
                  <h3 className="text-primary font-semibold text-sm sm:text-lg">
                    4.5
                  </h3>
                  <div className="rating rating-half rating-xs group-hover:scale-90">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="mt-1 text-[10px] sm:text-xs text-[var(--shadow)] font-medium">
                  stock ( 999 )
                </p>
              </div>
              <div className="mt-3 flex items-end justify-between">
                <p className=" text-sm sm:text-lg font-bold text-primary">
                  850 .-
                </p>

                <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-primary-content duration-100 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4 hidden sm:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>

                  <button className="text-[9px] sm:text-sm">Add to cart</button>
                </div>
              </div>
            </aside>
          </a>
        </article>

        <article className="rounded-xl bg-base-100 p-3 shadow-lg shadow-[var(--shadow)] hover:shadow-xl hover:transform hover:scale-105 duration-300 group">
          <a href="#">
            <div className="relative flex items-end overflow-hidden px-3 w-full">
              <Image
                src="/img/robot.jpg"
                alt="Hotel Photo"
                width={500}
                height={500}
                className="rounded-xl object-cover object-center w-full h-full xl:h-72"
              />
              <div className="rating absolute top-1 right-4">
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-red-600"
                />
              </div>
            </div>

            <aside className="mt-1 p-3">
              <div className=" flex items-center justify-between">
                <div>
                  {" "}
                  <h2 className="text-primary font-semibold text-sm sm:text-lg">
                    Robot 1/1
                  </h2>
                  <p className="mt-1 text-xs sm:text-md text-[var(--shadow)] font-medium">
                    Model
                  </p>
                </div>
                <div className=" flex flex-col items-center justify-center">
                  <h3 className="text-primary font-semibold text-sm sm:text-lg">
                    4.5
                  </h3>
                  <div className="rating rating-half rating-xs group-hover:scale-90">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="mt-1 text-[10px] sm:text-xs text-[var(--shadow)] font-medium">
                  stock ( 999 )
                </p>
              </div>
              <div className="mt-3 flex items-end justify-between">
                <p className=" text-sm sm:text-lg font-bold text-primary">
                  850 .-
                </p>

                <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-primary-content duration-100 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4 hidden sm:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>

                  <button className="text-[9px] sm:text-sm">Add to cart</button>
                </div>
              </div>
            </aside>
          </a>
        </article>

        <article className="rounded-xl bg-base-100 p-3 shadow-lg shadow-[var(--shadow)] hover:shadow-xl hover:transform hover:scale-105 duration-300 group">
          <a href="#">
            <div className="relative flex items-end overflow-hidden px-3 w-full">
              <Image
                src="/img/robot.jpg"
                alt="Hotel Photo"
                width={500}
                height={500}
                className="rounded-xl object-cover object-center w-full h-full xl:h-72"
              />
              <div className="rating absolute top-1 right-4">
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-red-600"
                />
              </div>
            </div>

            <aside className="mt-1 p-3">
              <div className=" flex items-center justify-between">
                <div>
                  {" "}
                  <h2 className="text-primary font-semibold text-sm sm:text-lg">
                    Robot 1/1
                  </h2>
                  <p className="mt-1 text-xs sm:text-md text-[var(--shadow)] font-medium">
                    Model
                  </p>
                </div>
                <div className=" flex flex-col items-center justify-center">
                  <h3 className="text-primary font-semibold text-sm sm:text-lg">
                    4.5
                  </h3>
                  <div className="rating rating-half rating-xs group-hover:scale-90">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-1"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400 mask-half-2"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="mt-1 text-[10px] sm:text-xs text-[var(--shadow)] font-medium">
                  stock ( 999 )
                </p>
              </div>
              <div className="mt-3 flex items-end justify-between">
                <p className=" text-sm sm:text-lg font-bold text-primary">
                  850 .-
                </p>

                <div className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-primary-content duration-100 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4 hidden sm:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>

                  <button className="text-[9px] sm:text-sm">Add to cart</button>
                </div>
              </div>
            </aside>
          </a>
        </article>

      </section>
    </main>
  );
};

export default AllProducts;
