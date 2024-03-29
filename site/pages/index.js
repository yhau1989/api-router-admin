import { useState, useEffect } from 'react'
import { fetchLogin, fetchIp } from '../services/servicesData'; 
import Cookies from 'universal-cookie';
import { parseCookies } from "../libs/parseCookies"
import { useRouter } from 'next/router'

/**
 * Pantalla de login
 */
export default function Home() {

  const router = useRouter();
  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');
  const [ error, setError] = useState('');
  const cookies = new Cookies();
  const [ipClient, setIpClient] = useState(null);

  const login  = event => {
    event.preventDefault();
    fetchLogin(email, password).then(rsp => {
      const { status, response } = rsp;
      if(status == 0 && response.data.status == 0)
      {
        cookies.set("userLogin", email, {
          path: "/",
          maxAge: 3600, // Expires after 1hr
          sameSite: true,
        });

        cookies.set("ipClient", ipClient, {
          path: "/",
          maxAge: 3600, // Expires after 1hr
          sameSite: true,
        });

        router.push("/dashboard")
      }
      else
      {
        console.log('samo: ', rsp);
        // setError(response.data.msg);
        if(rsp.error?.code == "ERR_NETWORK")
        {
          setError('Existen problemas en la red, o el servidor remoto no responde');
        } else {
          setError('usuario o contraseña incorrectos');
        }
      }

    })
  }

  useEffect(() => {
    const getIpClient = async() => {
      fetchIp().then(rsp => {
        const { status, error, response } = rsp;
        if(status == 0 && response.status == 200)
        {
          const ip = response.data.split('\n')[2];
          console.log('fetchIp ok: ', ip);
          setIpClient(ip);
        }
        else
        {
          console.log('fetchIp error: ', error);
        }
      });
    }
    getIpClient();
  }, []);

  return (
    <div className="w-full h-screen flex">
      
      <div className="w-full sm:w-2/5 flex justify-center items-center bg-blue-500 py-4 px-10 sm:px-15">
        <form
          onSubmit={login}
          className="w-full flex flex-col gap-6">
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
            <button 
              type='submit'
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
            >
              Ingresar
            </button>
          </div>
          <div>
            { error.length > 0 && (
              <div className="text-sm text-white">{error}</div>
            )}
          </div>
        </form>
      </div>
      <div className="w-3/5 bg-blue-900 p-4 hidden sm:flex sm:justify-center sm:items-center">
       <div className="absolute top-0 right-0 text-white p-2">{ipClient}</div> 
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