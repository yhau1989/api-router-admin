import Head from "next/head";
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      
      <div className="w-full sm:w-2/5 flex justify-center items-center bg-blue-500 py-4 px-10 sm:px-15">
        <div className="w-full flex flex-col gap-6">
          <div className="sm:hidden flex justify-center items-center p-10">
            <img src="unicomer_logo_en.png" alt="logo-unicomer" className="w-1/2" />
          </div>
          <div>
            <label htmlFor="email-address" className="text-white">
              Email
            </label>
            <input
              className="bg-white w-full px-2 py-3 rounded-md text-gray-700"
              id="email-address"
              name="email"
              placeholder="Email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label htmlFor="email-address" className="text-white">
              Contraseña
            </label>
            <input
              className="bg-white w-full px-2 py-3 rounded-md text-gray-700"
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
            />
          </div>
          <div>
            <button className="rounded-md px-2 py-3 text-white font-semibold bg-blue-800 w-full">
              Ingresar
            </button>
          </div>
        </div>
      </div>
      <div className="w-3/5 bg-blue-900 p-4 hidden sm:block sm:flex sm:justify-center sm:items-center">
        <img src="unicomer_logo_en.png" alt="" />
      </div>
    </div>
  );
}
