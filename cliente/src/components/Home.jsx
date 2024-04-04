import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useState } from "react";
import {toast} from "react-hot-toast";
import { useDispatch  , useSelector } from 'react-redux';
import { logOut } from "../Redux/actions";
import Login from "../components/Login";
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
          <h1 className="text-center text-3xl">Bienvenido al Home</h1>
          <button onClick={logout} className="p-5 bg-cyan-400">Log Out</button>
        </div>
      ) : (
      null
      )}
    </div>
  )
}
