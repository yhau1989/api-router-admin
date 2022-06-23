import { useState, useEffect } from "react"
import { generateApp } from "../../libs/utils";
import { fetchAddApp, fetchAddEndpoint, fetchGetAppByCode, fetchGetEndPointsByIdApp, fetchDeleteEndPoint } from "../../services/servicesData";
import { useFormik } from "formik";
import * as Yup from "yup";
import Cookies from 'universal-cookie';
import Narvar from '../../components/Narvar'


export default function NewApp() {

  const [codeApp] = useState(generateApp());
  const [idApp, setIdApp] = useState(null);
  const [endpoints, setEndPoints] = useState([]);
  const [actualizaListEndpoints, setActualizaListEndpoints] = useState(false);
  const campoRequeridoMsg = "* campo requerido";
  const cookies = new Cookies();
  const ip = cookies.get("ipClient");
  const userLogin = cookies.get("userLogin");

  const formikApp = useFormik({
    initialValues: {
      nameApp: "",
      descApp: "",
      ipApp: "",
      statusApp: "1",
      codigoApp: codeApp,
    },
    validationSchema: Yup.object({
      nameApp: Yup.string()
        .required(campoRequeridoMsg),
      descApp: Yup.string()
        .required(campoRequeridoMsg),
      ipApp: Yup.string()
        .required(campoRequeridoMsg),
    }),
    onSubmit: (values) => {
      const app = {
        nombre: values.nameApp,
        descripcion: values.descApp,
        codigo: values.codigoApp,
        dnsIpDestino: values.ipApp,
        auditoria: `user:${userLogin}, ${ip}`,
      };

      fetchAddApp(app).then(rsp => {
        const { data, status } = rsp.response;
        if(status == 200 && data.status == 0){
          fetchGetAppByCode(values.codigoApp).then( xresp => {
            const { data, status } = xresp.response;
            if(status == 200 && data.status == 0){
              alert('App agregada con exito')
              setIdApp(data.data);
            }
            else
            {
              console.log('fetchGetAppByCode error:', xresp.response);
            }
          });
        } else {
          alert(data.msg)
        }
      });
    },
  });

  const formikEndPoints = useFormik({
    initialValues: {
      codeApp: idApp?.id,
      descEndPoint: "",
      pathEndPoint: "",
      jsonErrorGeneralEndPoint: "",
      jsonBodyEndPoint: "",
      statusEndPoint: "1",
      metodoRest: "POST",
    },
    validationSchema: Yup.object({
      descEndPoint: Yup.string()
        .required(campoRequeridoMsg),
      pathEndPoint: Yup.string()
        .required(campoRequeridoMsg),
    }),
    onSubmit: (values, { resetForm }) => {
      if(idApp?.id)
      {
        const endPoint = {
          p_aplicacion: idApp.id,
          p_path: values.pathEndPoint,
          p_descripcion: values.descEndPoint,
          p_jsonRequest: values.jsonBodyEndPoint,
          p_jsonResponseErrorDefault: values.jsonErrorGeneralEndPoint,
          p_metodoRestApi: values.metodoRest,
          p_estado: values.statusEndPoint,
          auditoria: `user:${userLogin}, ${ip}`,
        };

        fetchAddEndpoint(endPoint).then(rsp => {
          console.log(rsp);
           const { data, status } = rsp.response;
           if(status == 200 && data.status == 0){
              alert('Enpoint agregado con correctamente')
              setActualizaListEndpoints(!actualizaListEndpoints);
              resetForm();
           } else {
              alert(data.msg)
           }
        });
        
      }
      else
      {
        alert('Primero debe agregar un app')
      }
      
    },
  });


  useEffect(() => {
    const getEndPoints = () => {
      console.log('idApp', idApp);
      if(idApp)
      {
        fetchGetEndPointsByIdApp(idApp.id).then(rsp => {
          const { data, status } = rsp.response;
          if(status == 200 && data.status == 0){
            console.log('fetchGetEndPointsByIdApp', data.data);
            setEndPoints([...data.data]);
          }
          else
          {
            setEndPoints([]);
            console.log('fetchGetEndPointsByIdApp error:', rsp.response);
          }
        });
      }
    };

    getEndPoints();

  },[actualizaListEndpoints]);

  const handleDeleteEndPoint = (id) => {
    var answer = window.confirm("Esta seguro de eliminar?");
    if(answer)
    {
      alert('Enpoint eliminado correctamente');
      fetchDeleteEndPoint(id, `user:${userLogin}, ${ip}`).then(setActualizaListEndpoints(!actualizaListEndpoints));
    }
  };

  return (
    <div className="w-full h-screen bg-slate-100">
      <Narvar />
      <main className="bg-slate-100 pb-20">
        <section className="my-10 p-4 flex flex-col md:flex-row gap-10">
          <form id="form1" onSubmit={formikApp.handleSubmit} className="w-full md:w-2/5 ">
            <div>
              <h1 className="text-gray-900 text-3xl font-extrabold tracking-tight">
                Datos de la app: {codeApp}
              </h1>
              <h5 className=" text-slate-500 text-sm">
                Ingresar principales datos del app.
              </h5>
            </div>
            <div className="p-4 mt-4 rounded-md bg-white w-full flex flex-col gap-3">
              <div>
                <label
                  htmlFor="descApp"
                  className="text-slate-900 text-sm flex items-center"
                >
                  Nombre <span className="text-red-400 mx-2">*</span>
                </label>
                <input
                  className="bg-white w-full py-2 px-3 border border-gray-300 rounded-md text-sm"
                  type="text"
                  id="nameApp"
                  name="nameApp"
                  placeholder="Nombre"
                  onBlur={formikApp.handleBlur}
                  onChange={formikApp.handleChange}
                  value={formikApp.values.nameApp}
                />
                <div>
                  {
                    formikApp.touched.nameApp && formikApp.errors.nameApp ? (
                      <span className="text-xs text-red-500">
                        {formikApp.errors.nameApp}
                      </span>
                    ) : null
                  }
                </div>
              </div>
              <div>
                <label
                  htmlFor="descApp"
                  className="text-slate-900 text-sm flex items-center"
                >
                  Descripción <span className="text-red-400 mx-2">*</span>
                </label>
                <input
                  className="bg-white w-full py-2 px-3 border border-gray-300 rounded-md text-sm"
                  type="text"
                  id="descApp"
                  name="descApp"
                  placeholder="Descripción"
                  onBlur={formikApp.handleBlur}
                  onChange={formikApp.handleChange}
                  value={formikApp.values.descApp}
                />
                <div>
                  {
                    formikApp.touched.descApp && formikApp.errors.descApp ? (
                      <span className="text-xs text-red-500">
                        {formikApp.errors.descApp}
                      </span>
                    ) : null
                  }
                </div>
              </div>
              <div>
                <label
                  htmlFor="ipApp"
                  className="text-slate-900 text-sm flex items-center"
                >
                  Dns / Ip destino <span className="text-red-400 mx-2">*</span>
                </label>
                <input
                  className="bg-white w-full py-2 px-3 border border-gray-300 rounded-md text-sm"
                  type="text"
                  id="ipApp"
                  name="ipApp"
                  placeholder="Dns / Ip destino"
                  onBlur={formikApp.handleBlur}
                  onChange={formikApp.handleChange}
                  value={formikApp.values.ipApp}
                />
                <div>
                  {
                    formikApp.touched.ipApp && formikApp.errors.ipApp ? (
                      <span className="text-xs text-red-500">
                        {formikApp.errors.ipApp}
                      </span>
                    ) : null
                  }
                </div>
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
                  onBlur={formikApp.handleBlur}
                  onChange={formikApp.handleChange}
                  value={formikApp.values.statusApp}
                >
                  <option value="1">Activo</option>
                  <option value="0">Inactivo</option>
                </select>
              </div>
              <div>
                <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
                type="submit"
                >
                  Guardar
                </button>
              </div>
            </div>
          </form>
          <form id="form2" onSubmit={formikEndPoints.handleSubmit} className="w-full md:w-3/5">
            <div>
              <h1 className="text-gray-900 text-3xl font-extrabold tracking-tight">
                Datalle del endpoint
              </h1>
              <h5 className=" text-slate-500 text-sm">
                Ingresar datos de cada uno de los endpoints.
              </h5>
            </div>
            <div className="p-4 mt-4 rounded-md bg-white w-full flex flex-col gap-4 ">
              <div className=" w-full flex flex-col md:flex-row gap-4">
                <div className="w-full flex flex-col gap-3">
                  <div>
                    <label
                      htmlFor="descEndPoint"
                      className="text-slate-900 text-sm flex items-center"
                    >
                      Descripción <span className="text-red-400 mx-2">*</span>
                    </label>
                    <input
                      className="bg-white w-full py-2 px-3 border border-gray-300 rounded-md text-sm"
                      type="text"
                      id="descEndPoint"
                      name="descEndPoint"
                      placeholder="Descripción"
                      onBlur={formikEndPoints.handleBlur}
                      onChange={formikEndPoints.handleChange}
                      value={formikEndPoints.values.descEndPoint}
                    />
                    <div>
                  {
                    formikEndPoints.touched.descEndPoint && formikEndPoints.errors.descEndPoint ? (
                      <span className="text-xs text-red-500">
                        {formikEndPoints.errors.descEndPoint}
                      </span>
                    ) : null
                  }
                </div>
                  </div>
                  <div>
                    <label
                      htmlFor="pathEndPoint"
                      className="text-slate-900 text-sm flex items-center"
                    >
                      Path <span className="text-red-400 mx-2">*</span>
                    </label>
                    <input
                      className="bg-white w-full py-2 px-3 border border-gray-300 rounded-md text-sm"
                      type="text"
                      id="pathEndPoint"
                      name="pathEndPoint"
                      placeholder="Path"
                      onBlur={formikEndPoints.handleBlur}
                      onChange={formikEndPoints.handleChange}
                      value={formikEndPoints.values.pathEndPoint}
                    />
                    {
                    formikEndPoints.touched.pathEndPoint && formikEndPoints.errors.pathEndPoint ? (
                      <span className="text-xs text-red-500">
                        {formikEndPoints.errors.pathEndPoint}
                      </span>
                    ) : null
                  }
                  </div>
                  <div>
                    <label
                      htmlFor="statusEndPoint"
                      className="text-slate-900 text-sm flex items-center"
                    >
                      Estado <span className="text-red-400 mx-2">*</span>
                    </label>
                    <select
                      id="statusEndPoint"
                      name="statusEndPoint"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                      onBlur={formikEndPoints.handleBlur}
                      onChange={formikEndPoints.handleChange}
                      value={formikEndPoints.values.statusEndPoint}
                    >
                      <option value="1">Activo</option>
                      <option value="0">Inactivo</option>
                    </select>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                  <div>
                    <label
                      htmlFor="jsonErrorGeneralEndPoint"
                      className="text-slate-900 text-sm flex items-center"
                    >
                      Json error general
                    </label>
                    <input
                      className="bg-white w-full py-2 px-3 border border-gray-300 rounded-md text-sm"
                      type="text"
                      id="jsonErrorGeneralEndPoint"
                      name="jsonErrorGeneralEndPoint"
                      placeholder="Json error general"
                      onBlur={formikEndPoints.handleBlur}
                      onChange={formikEndPoints.handleChange}
                      value={formikEndPoints.values.jsonErrorGeneralEndPoint}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="jsonBodyEndPoint"
                      className="text-slate-900 text-sm flex items-center"
                    >
                      Json boby request (ejemplo)
                    </label>
                    <input
                      className="bg-white w-full py-2 px-3 border border-gray-300 rounded-md text-sm"
                      type="text"
                      id="jsonBodyEndPoint"
                      name="jsonBodyEndPoint"
                      placeholder="Json boby request"
                      onBlur={formikEndPoints.handleBlur}
                      onChange={formikEndPoints.handleChange}
                      value={formikEndPoints.values.jsonBodyEndPoint}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="metodoRest"
                      className="text-slate-900 text-sm flex items-center"
                    >
                      Tipo método <span className="text-red-400 mx-2">*</span>
                    </label>
                    <select
                      id="metodoRest"
                      name="metodoRest"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                      onBlur={formikEndPoints.handleBlur}
                      onChange={formikEndPoints.handleChange}
                      value={formikEndPoints.values.metodoRest}
                    >
                      <option value="POST">POST</option>
                      <option value="GET">GET</option>
                      <option value="DELETE">DELETE</option>
                      <option value="HEAD">HEAD</option>
                      <option value="PUT">PUT</option>
                      <option value="PATCH">PATCH</option>
                      <option value="OPTION">OPTIONS</option>
                      <option value="TRACE">TRACE</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className=" w-full flex flex-row gap-4">
                <div>
                  <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
                  type="submit"
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          </form>
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
          <div className="bg-white p-4 rounded-md">
            <div className="border border-slate-200 rounded-md w-full">
              <div className="bg-slate-200 flex justify-between p-2 font-semibold">
                <div className="w-1/4">Código</div>
                <div className="w-full">Descripción</div>
                <div className="w-full">Path</div>
                <div className="w-1/3">Tipo metodo</div>
                <div className="w-1/3">Estado</div>
                <div className="w-full text-center">Acciones</div>
              </div>
              {
                endpoints.map(item => <div key={item.id} className="p-2 flex justify-between items-center border-t text-slate-500">
                <div className="w-1/4 text-sm">{item.id}</div>
                <div className="w-full text-sm"> {item.descripcion} </div>
                <div className="w-full text-sm"> {item.path} </div>
                <div className="w-1/3 text-sm"> {item.metodoRestApi} </div>
                <div className="w-1/3 text-sm">
                {
                  item.estado == 1 ? (
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
                  onClick={() => handleDeleteEndPoint(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>)
              }
              
              
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
