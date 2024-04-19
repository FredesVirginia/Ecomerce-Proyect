import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useDispatch  , useSelector } from 'react-redux';
import { logOut } from "../Redux/actions";

export default function Home() {
  const login = useSelector(state =>state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    // Llama a navigate("/") dentro del useEffect para redirigir
    // al usuario a la ruta "/" después de que el componente se monte
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]); // Asegúrate de incluir navigate como una dependencia del efecto
  const logout = () =>{
      dispatch(logOut());
  }
  return (
    <div>
      {login ? (
        <div>
         <nav className="bg-cyan-300 p-10 text-center">Welcome </nav>
          <h1 className="text-center text-3xl">Bienvenido al Home</h1>
         <div className="flex justify-center items-center mt-10">
         <button onClick={logout} className="p-5 bg-cyan-400">Log Out</button>
         </div>
        </div>
      ) : (
      null
      )}
    </div>
  )
}
