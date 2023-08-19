import React from "react";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="h-screen bg-auth bg-cover bg-center flex justify-center items-center">
      <div className="py-10">
        <div className="w-96 bg-white rounded-lg shadow-xl p-5 flex flex-col items-center">
          <div className="w-48">
            <Image
              className="w-48 mb-5 mt-5 justify-center items-center"
              src="/assets/images/TaniBahari.png"
              alt="Logo Tani Bahari"
              width={800}
              height={800}
            />
          </div>

          {/* <h1 className="text-3xl font-bold text-center mt-5">Login</h1> */}
          <form className="mt-5 w-full">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 px-1 text-sm font-semibold text-gray-600"
              >
                Email/Username
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Masukkan Email..."
                className="w-full border-2 border-gray-400 p-3 rounded outline-none focus:border-blue-500"
                autoFocus
                required
              />
              <label
                htmlFor="email"
                className="block mb-2 mt-3 px-1 text-sm font-semibold text-gray-600"
              >
                Password
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Masukkan Password..."
                className="w-full border-2 mb-7 border-gray-400 p-3 rounded outline-none focus:border-blue-500"
                autoFocus
                required
              />
              <Link
                href={"/auth/login"}
                className="w-full py-2 flex justify-center rounded-md bg-tani-green text-tani-yellow font-semibold"
              >
                Masuk
              </Link>

              <a href="" className="float-right mt-1">
                <button className="w-full py-2 flex font-light text-sm">
                  Lupa Password?
                </button>
              </a>

              <div className="flex justify-center items-center w-full py-1">
                <p className="text-sm text-tani-grey">
                  Belum Punya Akun?
                  <a
                    href={"/auth/register"}
                    className="text-tani-grey hover:text-tani-green ml-1"
                  >
                    Buat Akun Sekarang
                  </a>
                </p>
              </div>

              <p className="w-full mt-5 text-xs font-light text-center hover:text-tani-green cursor-default">
                Copyright © 2023 PT. Tanibahari Marine Agro Teknologi.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
