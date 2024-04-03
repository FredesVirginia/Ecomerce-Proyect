
import Button from '@mui/material/Button';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import {toast} from "react-hot-toast";
export default function Register() {

  const [user, setUser] = useState({
    "name": "",
    "surname": "",
    "phone": "",
    "password": "",
    "confirmPassword": "",
    "address": "",
    "email": ""
  });

  const registerSchema = Yup.object().shape({
    email: Yup.string()
      .email('Formato Inválido')
      .required('Campo Requerido'),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial'
      )
      .required('Campo Requerido'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
      .required('Campo Requerido'),
    name: Yup.string().required('Campo Requerido'),
    surname: Yup.string().required('Campo Requerido'),
    address: Yup.string()
      .matches(
        /^[a-zA-Z0-9\s]*$/,
        'La dirección debe contener solo letras y números'
      )
      .required('Campo Requerido'),
    phone: Yup.string()
      .matches(/^\d+$/, 'El número de teléfono solo debe contener números')
      .required('Campo Requerido'),
  });


  const register = () => {
    
    console.log("Los datos son ", user);
    toast.success("RegistroExitos");
  }
  return (
    <div>
      <div className="fondo">
        <div className=" flex   justify-center items-center h-screen">
          <div className="bg-white py-10  rounded-lg">

            <Formik
              initialValues={user}
              validationSchema={registerSchema}


              onSubmit={async (values) => {
                setUser(values)
               
                register();
               
              }}
            >

              {({ errors, touched, isSubmitting, values, handleChange,
                handleBlur }) => (
                <Form>
                  <h2 className='text-left ml-7 text-2xl text-gray-600 mb-4'>Registro</h2>

                  <div className=" flex space-x-4 mx-10">
                    <div className='flex flex-col space-y-5 '>
                    <div className='flex flex-col'>
                    <label className="text-gray-600">Nombre</label>
                      <Field
                        id="name"
                        label="Nombre"
                        name="name"
                        placeholder="name"
                        className="py-1 px-2 border border-gray-300 rounded-md"
                      />
                     {
                        errors.name && touched.name && 
                        (
                            <ErrorMessage className="text-sm text-red-600" name = 'name' component='div'/>
                        )
                    }
                    </div>


                     <div className='flex flex-col'>
                     <label className="text-gray-600">Apellido</label>
                     <Field
                        label="Apellido"
                        id="surname"
                        name="surname"
                        placeholder="surname"
                        className="py-1 px-2 border border-gray-300 rounded-md"
                      />

{
                        errors.surname && touched.surname && 
                        (
                            <ErrorMessage  className="text-sm text-red-600" name = 'surname' component='div'/>
                        )
                    }
                     </div>

                     <div className='flex flex-col'>
                     <label className="text-gray-600">Dirreccion</label>
                     <Field
                        label="Dirreccion"
                        id="address"
                        name="address"
                        placeholder="address"
                        className="py-1 px-2 border border-gray-300 rounded-md"
                       
                      />

{
                        errors.address && touched.address && 
                        (
                            <ErrorMessage className="text-sm text-red-600" name = 'address' component='div'/>
                        )
                    }
                     </div>


                    </div>
                    <div className='flex flex-col space-y-5 mx-5 '>
                    <div className='flex flex-col'>
                    <label className="text-gray-600">Correo</label>
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
                    </div>

                     <div className='flex flex-col'>
                     <label className="text-gray-600">Clave</label>
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

                     </div>

                     <div className='flex flex-col'>
                     <label className="text-gray-600">Confirmar clave</label>
                     <Field
                        label="Confirmar Clave"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="confirm password"
                        type="password"
                        className="py-1 px-2 border border-gray-300 rounded-md"
                      />
                       {
                        errors.confirmPassword && touched.confirmPassword && 
                        (
                            <ErrorMessage className="text-sm text-red-600" name = 'confirmPassword' component='div'/>
                        )
                    }
                     </div>
                    </div>
                  </div>


                  <div className='mx-10 my-5 '>
                  <label className="text-gray-600">Telefono</label>
                    <Field
                      
                      label="Telefono"
                      id="phone"
                      name="phone"
                      placeholder="phone"
                      className=" w-full py-1 px-2 border border-gray-300 rounded-md"
                    
                    />
                     {
                        errors.phone && touched.phone && 
                        (
                            <ErrorMessage className="text-sm text-red-600" name = 'phone' component='div'/>
                        )
                    }
                  </div>
                  <div className="flex justify-end mr-5">
                    <Button variant="contained" type="submit" >Ingresar</Button>
                   
                  </div>
                </Form>

              )}




            </Formik>


          </div>
        </div>
      </div>
    </div>
  )
}
