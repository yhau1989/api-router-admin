import Image from 'next/image'
import Link from 'next/link'

export default function Narvar() {
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
        <Link href="/">
            <a className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800">
            Cerrar sesión
            </a>
          </Link>
      </nav>
    )
}
