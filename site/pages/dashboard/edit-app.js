import Narvar from '../../components/Narvar'
// import styles from '../styles/Home.module.css'

export default function EditApp() {
  return (
    <div className="w-full h-screen bg-slate-100">
        <Narvar />
      <main className="bg-slate-100 pb-20">
        <section className="my-10 p-4 flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-2/5 ">
            <div>
              <h1 className="text-gray-900 text-3xl font-extrabold tracking-tight">
                Datos del app
              </h1>
              <h5 className=" text-slate-500 text-sm">
                Ingresar principales datos del app.
              </h5>
            </div>
            <div className="p-4 mt-4 rounded-md shadow-md bg-white w-full flex flex-col gap-3">
              <div>
                <label
                  htmlFor="descripcion-app"
                  className="text-slate-900 text-sm flex items-center"
                >
                  Descripción <span className="text-red-400 mx-2">*</span>
                </label>
                <input
                  className="bg-white w-full py-2 px-3 border border-gray-300 rounded-md text-sm"
                  type="text"
                  id="descripcion-app"
                  name="descripción-app"
                  placeholder="Descripción"
                />
              </div>
              <div>
                <label
                  htmlFor="email-address"
                  className="text-slate-900 text-sm flex items-center"
                >
                  Dns / Ip destino <span className="text-red-400 mx-2">*</span>
                </label>
                <input
                  className="bg-white w-full py-2 px-3 border border-gray-300 rounded-md text-sm"
                  type="text"
                  id="dnp-ip"
                  name="dnp-ip"
                  placeholder="Dns / Ip destino"
                />
              </div>
              <div>
                <label
                  htmlFor="email-address"
                  className="text-slate-900 text-sm flex items-center"
                >
                  Estado <span className="text-red-400 mx-2">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                >
                  <option>Activo</option>
                  <option>Inactivo</option>
                </select>
              </div>
              <div>
                <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800">
                  Guardar
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <div>
              <h1 className="text-gray-900 text-3xl font-extrabold tracking-tight">
                Datalle del endpoint
              </h1>
              <h5 className=" text-slate-500 text-sm">
                Ingresar datos de cada uno de los endpoints.
              </h5>
            </div>
            <div className="p-4 mt-4 rounded-md shadow-md bg-white w-full flex flex-col gap-4 ">
              <div className=" w-full flex flex-col md:flex-row gap-4">
                <div className="w-full flex flex-col gap-3">
                  <div>
                    <label
                      htmlFor="descripcion-endpoint"
                      className="text-slate-900 text-sm flex items-center"
                    >
                      Descripción <span className="text-red-400 mx-2">*</span>
                    </label>
                    <input
                      className="bg-white w-full py-2 px-3 border border-gray-300 rounded-md text-sm"
                      type="text"
                      id="descripcion-endpoint"
                      name="descripción-endpoint"
                      placeholder="Descripción"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="enpoint-path"
                      className="text-slate-900 text-sm flex items-center"
                    >
                      Path <span className="text-red-400 mx-2">*</span>
                    </label>
                    <input
                      className="bg-white w-full py-2 px-3 border border-gray-300 rounded-md text-sm"
                      type="text"
                      id="enpoint-path"
                      name="enpoint-path"
                      placeholder="Path"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="enpoint-status"
                      className="text-slate-900 text-sm flex items-center"
                    >
                      Estado <span className="text-red-400 mx-2">*</span>
                    </label>
                    <select
                      id="enpoint-status"
                      name="enpoint-status"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    >
                      <option>Activo</option>
                      <option>Inactivo</option>
                    </select>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <div>
                    <label
                      htmlFor="enpoint-json-error"
                      className="text-slate-900 text-sm flex items-center"
                    > 
                      Json error general
                    </label>
                    <input
                      className="bg-white w-full py-2 px-3 border border-gray-300 rounded-md text-sm"
                      type="text"
                      id="enpoint-json-error"
                      name="enpoint-json-error"
                      placeholder="Json error general"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="enpoint-json-body"
                      className="text-slate-900 text-sm flex items-center"
                    >
                      Json boby request (ejemplo)
                    </label>
                    <input
                      className="bg-white w-full py-2 px-3 border border-gray-300 rounded-md text-sm"
                      type="text"
                      id="enpoint-json-body"
                      name="enpoint-json-body"
                      placeholder="Json boby request"
                    />
                  </div>
                </div>
              </div>

              <div className=" w-full flex flex-row gap-4">
                <div>
                  <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800">
                    Agregar / Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10 p-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-gray-900 text-3xl font-extrabold tracking-tight">
                Endpoints
              </h1>
              <h5 className=" text-slate-500 text-sm">
                Lista de endpoints que posee la aplicación
              </h5>
            </div>
          </div>
        </section>
        <section className="px-4 mb-4">
          <div className="bg-white p-4 shadow-md rounded-md">
            <div className="border border-slate-200 rounded-md w-full">
              <div className="bg-slate-200 flex justify-between p-2 font-semibold">
                <div className="w-full">Código</div>
                <div className="w-full">Descripción</div>
                <div className="w-full">Path</div>
                <div className="w-full">Estado</div>
                <div className="w-full text-center">Acciones</div>
              </div>
              <div className="p-2 flex justify-between items-center border-t text-slate-500">
                <div className="w-full text-sm">endpoint-001</div>
                <div className="w-full text-sm">Metodo login</div>
                <div className="w-full text-sm">/api/login/user</div>
                <div className="w-full text-sm">
                  <span className="py-1 px-2 bg-emerald-200 text-emerald-600 rounded-full text-xs">
                    activo
                  </span>
                </div>
                <div className="w-full text-center">
                  <button className="text-blue-800 font-semibold text-sm">
                    Administrar
                  </button>
                </div>
              </div>
              <div className="p-2 flex justify-between items-center border-t text-slate-500">
                <div className="w-full text-sm">endpoint-001</div>
                <div className="w-full text-sm">Metodo login</div>
                <div className="w-full text-sm">/api/login/user</div>
                <div className="w-full text-sm">
                  <span className="py-1 px-2 bg-red-200 text-red-600 rounded-full text-xs">
                    inactivo
                  </span>
                </div>
                <div className="w-full text-center">
                  <button className="text-blue-800 font-semibold text-sm">
                    Administrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
