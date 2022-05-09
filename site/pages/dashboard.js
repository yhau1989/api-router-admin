import { useEffect, useState} from 'react'
import Link from 'next/link'
import Narvar from '../components/Narvar'
import { parseCookies } from "../libs/parseCookies"
import { useRouter } from 'next/router'
import { fetGetAllApps, fetGetAllEndPoints } from '../services/servicesData'; 

export default function Dashboard() {

  const [totalsApps, setTotalsApps] = useState([]);
  const [totalsEndPoints, setTotalsEndPoints] = useState(0);

  useEffect(() => {
    const getData = () => {
      Promise.all([fetGetAllApps().then(rsp => rsp), fetGetAllEndPoints().then(rsp => rsp)])
      .then(rsp => {
        rsp.forEach(element => {
          const { data, request, status } = element.response;
          if(status == 200){
            if(request.responseURL.includes("allappactives")){
              setTotalsApps(data.data);
            } else {
              setTotalsEndPoints(data.data.length);
            }
          } else {
            console.log('error: ', data.msg);
          }
        });
      });
    }

    getData();


  }, []);
  

  return (
    <div className="w-full h-screen bg-slate-100">
      <Narvar />
      <main>
        <section className="my-10 p-4 flex flex-row gap-20 justify-center">
          <div className="shadow-md rounded-md p-4 w-32 flex flex-col gap-4 justify-center items-center text-slate-500 bg-white">
            Apps
            <h1 className="text-gray-900 text-3xl font-extrabold tracking-tight">
              { totalsApps.length }
            </h1>
          </div>
          <div className="shadow-md rounded-md p-4 w-32 flex flex-col gap-4 justify-center items-center text-slate-500 bg-white">
            Endpoints
            <h1 className="text-gray-900 text-3xl font-extrabold tracking-tight">
              { totalsEndPoints }
            </h1>
          </div>
        </section>
        <section className="mt-10 p-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-gray-900 text-3xl font-extrabold tracking-tight">
                Apps
              </h1>
              <h5 className=" text-slate-500 text-sm">
                Agregar o editar aplicaciones
              </h5>
            </div>
            {/* <button className="rounded-md p-2 h-10 text-white text-sm font-semibold bg-blue-800">
              Nueva App
            </button> */}
            <Link href="/dashboard/edit-app">
            <a className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800">
              Nueva App
            </a>
          </Link>
          </div>
        </section>
        <section className=" p-4 mx-4 rounded-md bg-white shadow-md">

          <div className="border border-slate-200 rounded-md w-full">
              <div className="bg-slate-200 flex justify-between p-2 font-semibold">
                <div className="w-full">Código</div>
                <div className="w-full">Descripción</div>
                <div className="w-full">Dns / IP Destino</div>
                <div className="w-full text-center">Acciones</div>
              </div>
              {
                totalsApps.map(items => <div key={items.id} className="p-2 flex justify-between items-center border-t text-slate-500">
                  <div className="w-full">{items.codigo}</div>
                  <div className="w-full">{items.descripcion}</div>
                  <div className="w-full">{items.dnsIpDestino}</div>
                  <div className="w-full text-center">Acciones</div>
                </div>)
              }
          </div>
        </section>
      </main>
    </div>
  );
}
