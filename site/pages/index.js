import { useState } from 'react'
// import Head from "next/head";
// import Link from 'next/link'
import { fetchLogin } from '../services/servicesData'; 
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { useCookies } from "react-cookie"
import { parseCookies } from "../libs/parseCookies"
import { useRouter } from 'next/router'
// var ip = require('ip');
var Address6 = require('ip-address').Address6;
var address = new Address6('2001:0:ce49:7601:e866:efff:62c3:fffe');
var teredo = address.inspectTeredo();
teredo.client4; 

export default function Home() {

  const router = useRouter();
  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');
  const [ error, setError] = useState('');
  const [setCookie] = useCookies('ok');

  var address = new Address6('2001:0:ce49:7601:e866:efff:62c3:fffe');
  var teredo = address.inspectTeredo();
  

  const login  = () => {
    fetchLogin(email, password).then(rsp => {
      const { status, response } = rsp;
      if(status == 0 && response.data.status == 0)
      {
        setCookie("userLogin", 'ok', {
          path: "/",
          maxAge: 3600, // Expires after 1hr
          sameSite: true,
        })
        router.push("/dashboard")
      }
      else
      {
        console.log('samo: ', rsp);
        setError(response.data.msg);
      }

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
              Email {teredo.client4}
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
          <div>
            { error.length > 0 && (
              <div className="text-sm text-white">{error}</div>
            )}
          </div>
        </div>
      </div>
      <div className="w-3/5 bg-blue-900 p-4 hidden sm:flex sm:justify-center sm:items-center">
        <img src="unicomer_logo_en.png" alt="" />
      </div>
    </div>
  );
}

Home.getInitialProps = async ({ req, res }) => {
  const data = parseCookies(req)
   if (res) {
    if (data?.userLogin == 'ok') {
      res.writeHead(301, { Location: "/dashboard" })
      res.end()
    }
    // console.log('data', data);
  }
  
  return {
    data: data && data,
  }
}