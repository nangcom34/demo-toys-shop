"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const SignUp = () => {
//   useEffect(() => {
//     document.querySelector("header").style.display = "none";
//   }, []);
  return (
    <main>
      <section className="relative grid grid-cols-5 lg:grid-cols-6 xl:grid-cols-5 grid-rows-3 min-h-[83vh] h-auto w-full gap-2 overflow-hidden bg-black">
        <Image
          src="/img/bg.jpg"
          alt="bg"
          width={1600}
          height={768}
          className="absolute w-full h-full max-sm:hidden object-cover object-center opacity-50"
        />
        <article className="col-span-5 row-span-3 sm:col-span-5 sm:row-span-2 lg:col-span-3 lg:row-span-3 xl:col-span-2 w-full h-full flex flex-col justify-center items-center px-8 md:px-44 lg:px-12 xl:px-36 py-12 overflow-hidden bg-base-100 sm:rounded-b-2xl lg:rounded-tr-3xl lg:rounded-b-none shadow-xl shadow-[var(--shadow)] z-10">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-xl font-extrabold sm:text-3xl text-primary">
              SIGN UP
            </h1>
          </div>

          <form action="#" className="mt-8 grid grid-cols-6 gap-2 sm:gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label className="label">
                <span className="label-text text-md sm:text-lg font-bold text-primary">
                  First Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-sm sm:input-md input-bordered input-primary w-full text-primary font-medium placeholder:text-[var(--shadow)]"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label className="label">
                <span className="label-text text-md sm:text-lg font-bold text-primary">
                  Last Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-sm sm:input-md input-bordered input-primary w-full text-primary font-medium placeholder:text-[var(--shadow)]"
              />
            </div>

            <div className="col-span-6">
              <label className="label">
                <span className="label-text text-md sm:text-lg font-bold text-primary">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Type here"
                className="input input-sm sm:input-md input-bordered input-primary w-full text-primary font-medium placeholder:text-[var(--shadow)]"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label className="label">
                <span className="label-text text-md sm:text-lg font-bold text-primary">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Type here"
                className="input input-sm sm:input-md input-bordered input-primary w-full text-primary font-medium placeholder:text-[var(--shadow)]"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label className="label">
                <span className="label-text text-md sm:text-lg font-bold text-primary">
                  Password Confirmation
                </span>
              </label>
              <input
                type="password"
                placeholder="Type here"
                className="input input-sm sm:input-md input-bordered input-primary w-full text-primary font-medium placeholder:text-[var(--shadow)]"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="MarketingAccept" className="flex gap-4">
                <input
                  type="radio"
                  name="radio-2"
                  className="radio radio-sm sm:radio-md radio-primary"
                />

                <span className="text-sm text-primary">
                  I agree to the.{" "}
                  <a
                    href="#"
                    className="text-[#9747FF] font-bold hover:underline"
                  >
                    terms and conditions
                  </a>
                </span>
              </label>
            </div>

            <div className="col-span-6 flex flex-col items-center justify-center gap-4">
              <button className="btn-primary w-full rounded-xl inline-block shrink-0 border  px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-blue-500">
                Create an account
              </button>

              <p className="mt-4 text-sm text-primary font-medium placeholder:text-[var(--shadow)] sm:mt-0">
                Already have an account? {"  "}
                <Link href={"/signin"} className="text-[#9747FF] font-bold hover:underline">
                  LOGIN
                </Link>
              </p>
            </div>
          </form>
        </article>

        <article className="hidden col-span-3 row-span-3 sm:col-span-5 sm:row-span-1 lg:col-span-3 lg:row-span-3 xl:col-span-3  relative w-full h-full sm:flex flex-col items-center justify-center">
          <Image
            src="/img/logoe.png"
            alt="logo"
            width={160}
            height={110}
            className="w-[160px] h-[110px] object-cover object-center mt-5"
          />
          <h2 className="text-xl font-extrabold sm:text-3xl text-white my-8 drop-shadow-md">
            400,000++ people are members of this website.
          </h2>
          <p className="text-md text-center font-semibold sm:text-lg text-white px-10 max-w-xl mb-5">
            This website is a website that has a variety of products. You can
            come and choose to see. and purchase products We guarantee trading
            safety. and the price is cheaper than the general market
          </p>
        </article>
      </section>
    </main>
  );
};

export default SignUp;
