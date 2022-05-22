import { useEffect, useState} from 'react'
import Link from 'next/link'
import Narvar from '../components/Narvar'
// import { parseCookies } from "../libs/parseCookies"
import { useRouter } from 'next/router'
import { fetGetAllApps, fetGetAllEndPoints } from '../services/servicesData';
import Cookies from 'universal-cookie';
var Promise = require('promise');

export default function Dashboard() {

  const router = useRouter();
  const [totalsApps, setTotalsApps] = useState([]);
  const [totalsEndPoints, setTotalsEndPoints] = useState(0);
  const [loading, setLoading] = useState(true);
  const cookies = new Cookies();


  // const ip = cookies.get("ipClient");
  const userLogin = cookies.get("userLogin");

  useEffect(() => {
    const getData = () => {
      Promise.all([fetGetAllApps().then(rsp => rsp), fetGetAllEndPoints().then(rsp => rsp)])
      .then(rsp => {
        rsp.forEach(element => {
          const { data, request, status } = element.response;
          if(status == 200){
            if(request.responseURL.includes("allappactives")){
              console.log(data.data);
              setTotalsApps(data.data);
            } else {
              setTotalsEndPoints(data.data.length);
            }
          } else {
            console.log('error: ', data.msg);
          }
        });

        setLoading(false);

      });
    }

    if(userLogin)
    {
      getData();
    }
    else
    {
      router.push('/');
    }

  }, []);
  

  return (
    <div>
    { !loading ? (
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
            <Link href="/dashboard/new-app">
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
                <div className="w-50 text-center">Estado</div>
                <div className="w-full text-center">Acciones</div>
              </div>
              {
                totalsApps.map(items => <div key={items.id} className="p-2 flex justify-between items-center border-t text-slate-500">
                  <div className="w-full">{items.codigo}</div>
                  <div className="w-full">{items.descripcion}</div>
                  <div className="w-full">{items.dnsIpDestino}</div>
                  <div className="w-50">
                  {
                    items.estado == 1 ? (
                      <span className="py-1 px-2 bg-emerald-200 text-emerald-600 rounded-full text-xs">
                        activo
                      </span>
                    ) : (
                      <span className="py-1 px-2 bg-red-200 text-red-600 rounded-full text-xs">
                        inactivo
                      </span>
                    )
                  }
                  </div>
                  <div className="w-full text-center">
                    <button className="bg-blue-700 hover:bg-blue-800 text-white p-2 font-semibold text-xs rounded-md"
                    onClick={() => router.push(`/app/edit/${items.codigo}`)}
                    >
                      Editar
                    </button>
                  </div>
                </div>)
              }
          </div>
        </section>
      </main>
    </div>
    ) : (
      <div className="w-full m-3 text-center">Cargando...!!</div>
    )
   }
   </div>
  );
}
