import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from "../Redux/actions";
import { TiThMenu } from "react-icons/ti";
import { CgUserlane } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import {Link}  from "react-router-dom";



export default function ClienteDash() {
  const login = useSelector(state => state.login.login);
  const user = useSelector(state => state.login.user);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  console.log("LOGIN EN DASH CLIENT ES ", user.user);
  const name = user.user.name;
  console.log("EL NAME EN EL DASH CLIETE ES ", name);

  useEffect(() => {
    // Llama a navigate("/") dentro del useEffect para redirigir
    // al usuario a la ruta "/" después de que el componente se monte
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  const logout = () => {
    console.log("algo se apreto");
    dispatch(logOut());
  }

  const handleOptionClick = (path) => {
    console.log("algo se apreto");
    navigate(path); // Redirige a la página especificada
    setIsOpen(false); // Cierra el menú desplegable después de hacer clic en una opción
  };

  return (
    <div>
      {login ? (
        <div>
          <nav className=" fondo3 w-full py-1">
            <div className="flex items-center">
              <img
                src="../../public/img/i2-removebg-preview.png"
                className="w-[120px]"
              />

              <h1 className="text-2xl font-extrabold  text-white ">Ecomerce </h1>

              <input placeholder=" 🔎 Buscar" className="  ml-[300px] w-[300px] rounded-xl px-2 py-1" />

              <div className="flex justify-center items-center space-x-4">
                <h2 className="text-2xl ml-60 text-white font-bold"> Bienvenido {name} </h2>
                <TiThMenu className="text-2xl text-sky-800 mt-1"

                  onClick={() => setIsOpen(!isOpen)}
                />
                {/* Menú desplegable */}
                {isOpen && (
                  <div className="absolute mt-5  top-10 right-2 rounded-xl  bg-white border border-gray-200 p-2">
                    {/* Opción 1: Redirige a la página '/opcion1' */}
                    <div
                      className="cursor-pointer hover:bg-cyan-200 p-2 flex  items-center "
                      onClick={() => handleOptionClick('/register')}
                    >
                      <CgUserlane className="text-sky-800 mr-2"/> Mi  Perfil
                    </div>
                    {/* Opción 2: Redirige a la página '/opcion2' */}
                    <div
                      className="cursor-pointer hover:bg-cyan-200 p-2 flex  items-center "
                      onClick={() => handleOptionClick('/home')}
                    >
                      <IoMdLogOut  className="text-sky-800 mr-2"  onClick={logout}  /> Cerrar Sesion
                    </div>
                  </div>
                )}

              </div>
            </div>




          </nav>

          <main> 
            <div className="flex justify-center items-center">
              <Link to="/fomularioProducto"  className="border-2 border-cyan-400 rounded-xl px-20 py-2 mt-5  text-sky-950 text-xl" >  Subir Producto </Link>
            </div>
          </main>

        
        </div>
      ) : (null
      )}
    </div>
  )
}
