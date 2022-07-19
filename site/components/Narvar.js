import Image from 'next/image'
import Link from 'next/link'
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router'


/**
 * Componente del menu superior
 */
export default function Narvar() {
  
  const router = useRouter();
  const cookies = new Cookies();
  const logout = () => {
    cookies.remove("ipClient");
    cookies.remove("userLogin");
    router.push("/")
  }

    return (
        <nav className="w-full flex p-4 items-center bg-white">
        <div className="flex-1 flex gap-8 items-center">
          <div>
            <Image src="/Logo_Unicomer_Webversion.jpeg" width={94} height={48}  alt="" />
          </div>
          <Link href="/dashboard">
            <a className="text-blue-800 font-semibold">
              Inicio
            </a>
          </Link>
          <Link href="#">
            <a className="text-blue-800 font-semibold">
              Logs
            </a>
          </Link>
        </div>
        <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
        onClick={() => logout()}>
          Cerrar sesión
        </button>
      </nav>
    )
}
