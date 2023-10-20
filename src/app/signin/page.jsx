"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const SignIn = () => {
  //   useEffect(() => {
  //     document.querySelector("header").style.display = "none";
  //   }, []);
  return (
    <main>
      <section className="relative grid grid-cols-5 lg:grid-cols-6 xl:grid-cols-5 grid-rows-3 min-h-[83vh] h-auto w-full gap-2 overflow-hidden bg-black ">
        <Image
          src="/img/bg.jpg"
          alt="bg"
          width={1600}
          height={768}
          className="absolute top-0 w-full h-full object-cover object-center opacity-50 "
        />
        <article className="col-span-5 row-span-3 sm:col-span-5 sm:row-span-2 lg:col-span-3 lg:row-span-3 xl:col-span-2 w-full h-full flex flex-col justify-center items-center px-8 md:px-44 lg:px-12 xl:px-36 py-12 overflow-hidden bg-white sm:rounded-b-2xl lg:rounded-tr-3xl lg:rounded-b-none shadow-xl shadow-[var(--shadow)] z-10">
          <aside className="mx-auto max-w-lg text-center mb-10">
            <h1 className="text-xl font-extrabold sm:text-3xl text-primary">
              SIGN IN
            </h1>
          </aside>

          <aside className="mx-auto flex flex-col items-center justify-center gap-3">
            <div className="btn btn-outline btn-primary flex items-center justify-normal w-full rounded-xl">
              <Image
                src="/img/google.svg"
                alt="google"
                width={50}
                height={50}
                className="w-[30px] h-[30px] object-cover object-center"
              />
              <p className="uppercase">continue wiht google</p>
            </div>
            <div className="btn btn-outline btn-primary flex items-center justify-normal w-full rounded-xl">
              <Image
                src="/img/apple.svg"
                alt="apple"
                width={50}
                height={50}
                className="w-[30px] h-[30px] object-cover object-center"
              />
              <p className="uppercase">continue wiht apple</p>
            </div>
          </aside>
          <div class="flex justify-between items-center my-16 w-full">
            <span class="bg-primary block w-[40%] h-[2px]"></span>
            <p class="mx-2 text-sm font-semibold text-primary"> OR </p>
            <span class="bg-primary block w-[40%] h-[2px]"></span>
          </div>
          <span className="text-md font-extrabold sm:text-lg text-primary">
            ACCOUNT
          </span>
          <form action="#" className="grid grid-cols-6 gap-2 sm:gap-6 mt-5">
            <aside className="col-span-6">
              <div className="relative w-full input-box">
                <input
                  type="email"
                  placeholder="Email"
                  className="relative input input-sm sm:input-md input-bordered input-primary w-full text-primary font-medium bg-transparent placeholder:text-[var(--shadow)]"
                />
                <label className="absolute top-1/2 -translate-y-1/2 left-4 text-sm sm:text-md font-bold text-[var(--shadow)] duration-500 hidden">
                  Email
                </label>
              </div>
            </aside>

            <aside className="col-span-6">
              <div className="relative w-full input-box">
                <input
                  type="password"
                  placeholder="Password"
                  className="relative input input-sm sm:input-md input-bordered input-primary w-full text-primary font-medium bg-transparent placeholder:text-[var(--shadow)]"
                />
                 <label className="absolute top-1/2 -translate-y-1/2 left-4 text-sm sm:text-md font-bold text-[var(--shadow)] hidden">
                  Password
                </label>
              </div>
            </aside>

            <div className="col-span-6 flex flex-col items-center justify-center gap-4 mt-3">
              <button className="btn-primary w-full inline-block shrink-0 rounded-xl border px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-blue-500">
                LOGIN
              </button>

              <p className="mt-4 text-sm text-primary font-medium sm:mt-0">
                Don’t have an account? {"  "}
                <Link
                  href={"/signup"}
                  className="text-[#9747FF] font-bold hover:underline"
                >
                  Register
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

export default SignIn;
