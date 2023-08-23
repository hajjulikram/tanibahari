"use client";

import React, { useEffect } from "react";

import Image from "next/image";
import Icon from "@mdi/react";
import Link from "next/link";
import { mdiEmail, mdiHelpCircleOutline, mdiBell } from "@mdi/js";

import { initCollapses } from "flowbite";

function Navbar() {
  useEffect(() => {
    setTimeout(() => {
      initCollapses();
    }, 1000);
  }, []);

  return (
    <div>
      <header className=" h-14 border-b-2 lg:px-24 px-5 flex items-center lg:justify-end justify-center">
        <ul className="flex gap-6 text-tani-grey text-xs">
          <li className="flex items-center gap-2 hover:text-tani-green cursor-pointer">
            <Icon path={mdiEmail} size={1} />
            <span>cs@tanibahari.com</span>
          </li>

          <li className="flex items-center  gap-2 hover:text-tani-green cursor-pointer">
            <Icon path={mdiHelpCircleOutline} size={1} />
            <span>Help Center</span>
          </li>
        </ul>
      </header>

      <nav className="px-24 py-5 xl:flex justify-between items-center hidden">
        <div className="flex gap-6">
          <Image
            className="w-48 "
            src="/assets/images/TaniBahari.png"
            alt="Logo Tani Bahari"
            width={800}
            height={800}
          />
        </div>
        <button className="text-xl">Kategori</button>

        <form className="w-1/2">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-tani-green focus:border-tani-green dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tani-green dark:focus:border-tani-green"
              placeholder="Cari Produk Tani dan Perikanan..."
              required
            />
            <button
              type="submit"
              className="text-tani-yellow absolute right-2.5 bottom-2.5 bg-tani-green hover:bg-tani-green focus:ring-4 focus:outline-none focus:ring-tani-green font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-tani-green dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

        <div>
          <Icon path={mdiBell} size={1} />
        </div>

        <div className="flex gap-3 items-center">
          <Link
            href={"/auth/login"}
            className="px-5 py-1 rounded-lg bg-tani-green text-tani-yellow font-semibold"
          >
            Masuk
          </Link>
          <Link
            href={"/auth/register"}
            className="px-5 py-1 rounded-lg bg-tani-blue text-tani-yellow font-semibold"
          >
            Daftar
          </Link>
        </div>
      </nav>

      <nav className="bg-white border-gray-200 dark:bg-gray-900 xl:hidden">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <Image
              className="w-32 "
              src="/assets/images/TaniBahari.png"
              alt="Logo Tani Bahari"
              width={800}
              height={800}
            />
          </a>
          <div className="flex xl:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="xl:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden xl:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-tani-green focus:border-tani-green dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tani-green dark:focus:border-tani-green"
                placeholder="Search..."
              />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full xl:flex xl:w-auto xl:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 xl:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-tani-green focus:border-tani-green dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-tani-green dark:focus:border-tani-green"
                placeholder="Search..."
              />
            </div>
            <ul className="flex gap-3 flex-col p-4 xl:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 xl:flex-row xl:space-x-8 xl:mt-0 xl:border-0 xl:bg-white dark:bg-gray-800 xl:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href={"/auth/login"}
                  className="px-5 py-2 block text-center w-full rounded-lg bg-tani-green text-tani-yellow font-semibold"
                >
                  Masuk
                </Link>
              </li>
              <li>
                <Link
                  href={"/auth/register"}
                  className="px-5 text-center block w-full py-2 rounded-lg bg-tani-blue text-tani-yellow font-semibold"
                >
                  Daftar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
