import React from 'react';
import Image from 'next/image';
import Icon from '@mdi/react';
import Link from 'next/link';
import { mdiEmail, mdiWhatsapp, mdiHelpCircleOutline, mdiBell } from '@mdi/js';

function Navbar() {
  return (
    <div>
      <header className=" h-14 border-b-2 lg:px-24 px-5 flex items-center lg:justify-end">
        <ul className="flex gap-6 text-tani-grey text-xs">
          <li className="flex gap-2 hover:text-tani-green cursor-pointer">
            <Icon path={mdiEmail} size={1} />
            <span>cs@tanibahari.com</span>
          </li>
          <li className="flex gap-2 hover:text-tani-green cursor-pointer">
            <Icon path={mdiWhatsapp} size={1} />
            <span>081264694142</span>
          </li>
          <li className="flex gap-2 hover:text-tani-green cursor-pointer">
            <Icon path={mdiHelpCircleOutline} size={1} />
            <span>Help Center</span>
          </li>
        </ul>
      </header>

      <nav className="px-24 py-5 flex justify-between items-center">
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
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-tani-green focus:border-tani-green dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Cari Produk Tani dan Perikanan..."
              required
            />
            <button
              type="submit"
              className="text-tani-yellow absolute right-2.5 bottom-2.5 bg-tani-green hover:bg-tani-green focus:ring-4 focus:outline-none focus:ring-tani-green font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            href={'/auth/login'}
            className="px-5 py-1 rounded-lg bg-tani-green text-tani-yellow font-semibold"
          >
            Masuk
          </Link>
          <Link
            href={'/auth/register'}
            className="px-5 py-1 rounded-lg bg-tani-blue text-tani-yellow font-semibold"
          >
            Daftar
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
