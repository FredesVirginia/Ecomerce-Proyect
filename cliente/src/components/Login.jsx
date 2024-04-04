

import Button from '@mui/material/Button';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import {toast} from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { login } from "../Redux/actions";


export default function Login() {
  const navigate = useNavigate();

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Formato Inválido')
      .required('Campo Requerido'),
    password: Yup.string()
      .required('Campo Requerido'), // Hacer que la contraseña sea requerida
  });

  const dispatch = useDispatch();

  const [user, setUser] = useState({
   
    "password": "",
   
    "email": ""
  });

  const login1 = async (values) =>{
    console.log("Lo valores en el suubmt son " , values);
   const response = await dispatch(login(values));
   if(response.payload){
    toast.success("Ingresando");
    navigate("/home")
   }
   else{
    toast.error("Error de Credenciales");
   }
  }
  return (
    <div className="fondo">
     <div className="flex   justify-center items-center h-screen">
      <div className="bg-white py-10 w-[400px] rounded-lg">
       



        <Formik
              initialValues={user}
              validationSchema={loginSchema}


              onSubmit={async (values) => {
               
                console.log("Se apreto algo");
                login1(values);
               
              }}
            >

              {({ errors, touched
                 }) => (
                <Form className="">
                  <h2 className='text-center ml-7 text-2xl text-gray-600 mb-4'>Inicia Sesion</h2>

                 
                <div className="mx-10">
                <div className="flex flex-col space-y-2  w-full">
                  <label className=" ml-4 text-gray-600">Correo</label>
                    <Field
                        id="email"
                        name="email"
                        label="Correo"
                        placeholder="example@outlook.com"
                        className="py-1 px-2 border border-gray-300 rounded-md"
                        
                      />

{
                        errors.email && touched.email && 
                        (
                            <ErrorMessage className="text-sm text-red-600" name = 'email' component='div'/>
                        )
                    }
                   
                     <label className=" ml-4 text-gray-600">Clave</label>
                     <Field
                        label="Clave"
                        id="password"
                        name="password"
                        placeholder="password"
                        type="password"
                        className="py-1 px-2 border border-gray-300 rounded-md"
                        
                      />

{
                        errors.password && touched.password && 
                        (
                            <ErrorMessage className="text-sm text-red-600" name = 'password' component='div'/>
                        )
                    }

                     

                     
                     <Button variant="contained" type="submit" >Ingresar</Button>
                  </div>
                     
                </div>
                 


                 
                  
                </Form>

              )}




            </Formik>
      </div>
    </div>
    </div>
  )
}
