import { useState } from 'react'
import Head from "next/head";
import Link from 'next/link'
import { fetchLogin } from '../services/servicesData'; 
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {

  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');

  const login  = () => {
    fetchLogin(email, password).then(response => {
      console.log('samo: ', response);
    })
  }

  return (
    <div className="w-full h-screen flex">
      
      <div className="w-full sm:w-2/5 flex justify-center items-center bg-blue-500 py-4 px-10 sm:px-15">
        <div className="w-full flex flex-col gap-6">
          <div className="sm:hidden flex justify-center items-center p-10">
            <img src="unicomer_logo_en.png" alt="logo-unicomer" className="w-1/2" />
          </div>
          <div>
            <label htmlFor="email-address" className="text-white text-sm">
              Email
            </label>
            <input
              className="bg-white w-full text-sm py-2 px-3 rounded-md text-gray-700"
              id="email-address"
              name="email"
              placeholder="Email"
              type="email"
              autoComplete="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email-address" className="text-white text-sm">
              Contraseña
            </label>
            <input
              className="bg-white w-full text-sm py-2 px-3 rounded-md text-gray-700"
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
              onClick={() => login()}
            >
              Ingresar
            </button>
            {/* <Link href="/dashboard">
              <a className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800">
              Ingresar
              </a>
            </Link> */}
          </div>
        </div>
      </div>
      <div className="w-3/5 bg-blue-900 p-4 hidden sm:flex sm:justify-center sm:items-center">
        <img src="unicomer_logo_en.png" alt="" />
      </div>
    </div>
  );
}
