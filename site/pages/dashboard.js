import Head from "next/head";
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Dashboard() {
  return (
    <div className="w-full h-screen bg-slate-100">
      <nav className="w-full flex p-4 items-center bg-white">
        <div className="flex-1 flex gap-8 items-center">
          <div>
            <img src="Logo_Unicomer_Webversion.jpeg" alt="" className="h-12" />
          </div>
          <div className="text-blue-800 font-semibold">Menu 1</div>
          <div className="text-blue-800 font-semibold">Menu 2</div>
        </div>
        <button className="rounded-md p-2 text-white text-sm font-semibold bg-blue-800">
          Cerrar sesión
        </button>
      </nav>
      <main>
        <section className="my-10 p-4 flex flex-row gap-20 justify-center">
          <div className="border border-slate-200 rounded-md p-4 w-32 flex flex-col gap-4 justify-center items-center text-slate-500 bg-white">
            Apps
            <h1 className="text-gray-900 text-3xl font-extrabold tracking-tight">
              200
            </h1>
          </div>
          <div className="border border-slate-200 rounded-md p-4 w-32 flex flex-col gap-4 justify-center items-center text-slate-500 bg-white">
            Endpoints
            <h1 className="text-gray-900 text-3xl font-extrabold tracking-tight">
              200
            </h1>
          </div>
        </section>
        <section className="mt-10 p-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-gray-900 text-3xl font-extrabold tracking-tight">
                Apps 200
              </h1>
              <h5 className=" text-slate-500 text-sm">
                Agregar o editar aplicaciones
              </h5>
            </div>
            <button className="rounded-md p-2 h-10 text-white text-sm font-semibold bg-blue-800">
              Nueva App
            </button>
          </div>
        </section>
        <section className=" p-4 mx-4 rounded-md bg-white">

          <div className="border border-slate-200 rounded-md w-full">
              <div className="bg-slate-200 flex justify-between p-2 font-semibold">
                <div className="w-full">Código</div>
                <div className="w-full">Descripción</div>
                <div className="w-full">Dns / IP Destino</div>
                <div className="w-full text-center">Acciones</div>
              </div>
              <div className="p-2 flex justify-between items-center border-t text-slate-500">
                <div className="w-full">APP-001</div>
                <div className="w-full">Api Rputer</div>
                <div className="w-full">https://unicomer.apirouter.com-ec</div>
                <div className="w-full text-center">
                  <button className="text-blue-800 font-semibold">Editar</button>
                </div>
              </div>
              <div className="p-2 flex justify-between items-center border-t text-slate-500">
                <div className="w-full">APP-001</div>
                <div className="w-full">Api Rputer</div>
                <div className="w-full">https://unicomer.apirouter.com-ec</div>
                <div className="w-full text-center">
                  <button className="text-blue-800 font-semibold">Editar</button>
                </div>
              </div>
          </div>



          
        </section>
      </main>
    </div>
  );
}
